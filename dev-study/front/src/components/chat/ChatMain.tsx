import "../../styles/Chat.scss";
import { ChatLog, ChatLogResponse } from "../../types";
import { Chat } from "../chat";
import { ChatMessageInput } from "./_ChatMessageInput";
import { useEffect, useRef } from "react";
import { api } from "../../utils";
import { useState } from "react";
import dayjs from "dayjs";
import ActionCable from "actioncable";

export const ChatMain = (props: {
  className?: string;
  channelId: number;
  cable: ActionCable.Cable;
}) => {
  const { className, channelId, cable } = props;
  const [chatLogs, setChatLogs] = useState<ChatLog[]>([]);
  const chatLogEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const [subscription, setSubscription] = useState<ActionCable.Channel>();
  const [firstLoaded, setFirstLoaded] = useState<boolean>(false);

  const fetchChat = async () => {
    await api
      .get(`/chats/${channelId}`)
      .then((res) => {
        const data = res.data.chats;
        setChatLogs(
          data.map((chat: ChatLogResponse) => ({
            ...chat,
            timestamp: dayjs(chat.created_at),
          })),
        );
      })
      .catch((e) => {
        console.log(e);
      });
    setFirstLoaded(true);
  };

  useEffect(() => {
    fetchChat();
    const sub = cable?.subscriptions.create(
      {
        channel: "ChatChannel",
        channel_id: channelId,
        user_id: localStorage.getItem("user_id"),
      },
      {
        received: async () => {
          const scroll = !(
            (chatWindowRef.current?.scrollTop || 0) +
              (chatWindowRef.current?.clientHeight || 0) !==
            chatWindowRef.current?.scrollHeight
          );
          await fetchChat();
          if (chatLogEndRef.current && scroll) {
            chatLogEndRef.current.scrollIntoView({ behavior: "smooth" });
          }
        },
      },
    );
    setSubscription(sub);
    return () => {
      subscription?.unsubscribe();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    chatLogEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [firstLoaded]);

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
        <div className="chat-window mt-auto" ref={chatWindowRef}>
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
