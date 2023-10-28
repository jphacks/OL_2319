import { ModalBase } from "../_ModalBase";
import { useState, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import { folderStringToTreeString } from "../../utils";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { api } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";

const ModalContent = () => {
  const [content, setContent] = useState("**Hello world!!!**");
  const closeBtn = useRef<HTMLButtonElement>(null);
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();

  const sendQuestion = () => {
    if (content === "") return;
    if (localStorage.getItem("user_id") === null) {
      navigate("/login");
      return;
    }
    api
      .post("/chats/create", {
        channel_id: channelId,
        user_id: localStorage.getItem("user_id"),
        content: content,
        reply_to: null,
        is_question: true,
      })
      .then(() => {
        setContent("");
        closeBtn.current?.click();
      });
  };

  const inputError = () => {
    setContent(`## やりたいこと


## 結果


## 試したこと


## 表示された画像


## エラーコード
\`\`\`
world
\`\`\`

## 環境
OS(自動取得しています) 
`);
  };

  return (
    <>
      <div>
        <div className="fs-4 fw-bold">質問をチャットに送る</div>
        <div
          className="btn btn-secondary py-2 px-4 fw-medium fs-6 lh-1 my-3"
          onClick={() => inputError()}
        >
          エラーについて質問する
        </div>
        <div
          className="btn btn-outline-secondary py-2 px-4 fw-medium fs-6 lh-1 my-3 ms-3"
          onClick={() => setContent("")}
        >
          クリア
        </div>
        <MDEditor
          value={content}
          onChange={(e = "") => setContent(e)}
          className="question-content"
          height={9999}
          components={{
            preview: (source) => {
              const regex = /```Directory([\s\S]*)```/g;
              return (
                <MarkdownPreview
                  source={source.replace(regex, (_, content) => {
                    return "```" + folderStringToTreeString(content) + "```";
                  })}
                />
              );
            },
          }}
        />
        <div className="mt-5">
          <button
            type="button"
            className="btn btn-primary fw-bold me-3 px-4 py-3 lh-1 fs-5"
            onClick={() => sendQuestion()}
          >
            送信
          </button>
          <button
            type="button"
            className="btn btn-outline-dark fw-bold px-4 py-3 lh-1 fs-5"
            data-bs-dismiss="modal"
            ref={closeBtn}
          >
            キャンセル
          </button>
        </div>
      </div>
    </>
  );
};

export const QuestionModal = () => {
  return (
    <>
      <ModalBase children={<ModalContent />} id="modal-question" />
    </>
  );
};
