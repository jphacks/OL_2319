import "../../styles/Chat.scss";
import { ChatLog, ChatLogResponse } from "../../types";
import dayjs from "dayjs";
import { Chat } from "../chat";
import { ChatMessageInput } from "./_ChatMessageInput";
import { useEffect, useRef } from "react";
import { api } from "../../utils";
import { useState } from "react";
import { dummyChats } from "../../types";

export const ChatMain = (props: { className?: string; channelId: number }) => {
  const { className, channelId } = props;
  const [chatLogs, setChatLogs] = useState<ChatLog[]>([]);
  const chatLogEndRef = useRef<HTMLDivElement>(null);

  const fetchChat = () => {
    api
      .get(`/chats/${channelId}`)
      .then((res) => {
        // const data = res.data.chats;
        // setChatLogs(
        //   data.map((chat: ChatLogResponse) => ({
        //     ...chat,
        //     timestamp: dayjs(chat.created_at),
        //   })),
        // );
        setChatLogs(dummyChats);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchChat();
    const intervalId = setInterval(() => {
      fetchChat();
    }, 5000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (chatLogEndRef.current) {
      chatLogEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatLogs]);

  return (
    <>
      <div
        className={`chat d-flex align-items-stretch flex-column ${className}`}
      >
        <div className="chat-header flex-grow-0 bg-gray d-flex justify-content-between align-items-center">
          <div className="chat-header-text ms-7 fw-bold fs-4 text-white my-3">
            ワールド
          </div>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modal-channel-edit"
          >
            <img
              src="/setting.svg"
              alt="setting"
              height={38}
              className="me-6"
            />
          </button>
        </div>
        <div className="chat-window mt-auto">
          {chatLogs.map((chat, i) => (
            <Chat key={i} chat={chat} className="py-3 px-5" />
          ))}
          <div ref={chatLogEndRef}></div>
        </div>
        <ChatMessageInput className="px-5 my-4" />
      </div>
    </>
  );
};
