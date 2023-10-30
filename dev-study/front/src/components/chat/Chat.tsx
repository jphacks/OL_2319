import { ChatLog } from "../../types";
import { apiEndpoint } from "../../utils";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { folderStringToTreeString } from "../../utils";

export const Chat = (props: { className?: string; chat: ChatLog }) => {
  const { className, chat } = props;
  const timestamp = new Date().getTime();
  return (
    <>
      <div
        className={`d-flex w-100 ${className} ${chat.is_question ? "question" : ""}`}
      >
        <div className="chat-avater">
          <img
            src={`${apiEndpoint}/user_icon/${chat.user_id}.png?t=${timestamp}`}
            alt="user avater"
            width={40}
          />
        </div>
        <div className="flex-grow-1 overflow-x-auto">
          <div className="d-flex align-items-center">
            
            <div className="chat-user ms-2 fw-bold fs-6">{chat.user_name}</div>
            <div className="chat-timestamp ms-2">
              {chat.timestamp.format("HH:mm")}
            </div>
            {chat.is_question && (
              <div className="badge bg-primary ms-2 px-2 fw-medium fs-6">
                質問
              </div>
            )}
          </div>
          <MarkdownPreview
            source={chat.content.replace(
              /```Directory([\s\S]*)```/g,
              (_, content) => {
                return "```" + folderStringToTreeString(content) + "```";
              },
            )}
            className="chat-content mt-2 ms-2 fs-6 fw-medium bg-transparent"
          />
        </div>
      </div>
    </>
  );
};
