import React, { useState } from "react";

export const ChatMessageInput = (props: { className?: string }) => {
  const { className } = props;
  const [input, setInput] = useState("");

  return (
    <>
      <div className={`chat-message-input input-group ${className}`}>
        <div
          className="input-group-text bg-white ps-3 border-end-0"
          id="image-select"
        >
          <img src="/image_select.svg" alt="image select" width={40} />
        </div>
        <textarea
          rows={1}
          className="form-control border-end-0 border-start-0 fs-6 py-2 px-2"
          placeholder="メッセージを送信"
          aria-label="send message"
          aria-describedby="button-send image-select"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          /* eslint-disable */
          onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            console.log(e);
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + 2 + "px";
          }}
        ></textarea>
        <div className="input-group-text bg-white pe-3 border-start-0">
          <button type="submit" className="chat-send"><img src="/bi_send-fill.svg" alt="send message" width={38} /></button>
        </div>
      </div>
    </>
  );
};
