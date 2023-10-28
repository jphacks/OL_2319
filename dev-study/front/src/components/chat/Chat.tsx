import { ChatLog } from "../../types";

export const Chat = (props: { className?: string; chat: ChatLog }) => {
  const { className, chat } = props;
  return (
    <>
      <div
        className={`d-flex ${className} ${chat.is_question ? "question" : ""}`}
      >
        <div className="chat-avater">
          <img src="http://placekitten.com/200" alt="user avater" width={40} />
        </div>
        <div>
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
          <div className="chat-content mt-2 ms-2 fs-6 fw-medium">
            {chat.content}
          </div>
        </div>
      </div>
    </>
  );
};
