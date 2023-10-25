import "../../styles/Chat.scss";
import { ChatLog } from "../../types";
import dayjs from "dayjs";
import { Chat } from "../chat";
import { ChatMessageInput } from "./_ChatMessageInput";
import { useEffect } from "react";

const dummyChats: ChatLog[] = [
  {
    id: 1,
    user_id: 1,
    name: "ユーザー1",
    content: "こんにちは",
    timestamp: dayjs("2023-10-23 12:34:56"),
    reply_to: null,
    is_question: false,
  },
  {
    id: 2,
    user_id: 2,
    name: "ユーザー2",
    content: "おはようございます",
    timestamp: dayjs("2023-10-24 12:34:56"),
    reply_to: 1,
    is_question: false,
  },
  {
    id: 3,
    user_id: 3,
    name: "ユーザー1",
    content: "今日の天気はどうですか？",
    timestamp: dayjs("2023-10-25 12:34:54"),
    reply_to: null,
    is_question: true,
  },
  {
    id: 4,
    user_id: 1,
    name: "ユーザー2",
    content: "晴れですよ",
    timestamp: dayjs("2023-10-25 12:34:56"),
    reply_to: 3,
    is_question: false,
  },
  {
    id: 1,
    user_id: 1,
    name: "ユーザー1",
    content: "こんにちは",
    timestamp: dayjs("2023-10-23 12:34:56"),
    reply_to: null,
    is_question: false,
  },
  {
    id: 2,
    user_id: 2,
    name: "ユーザー2",
    content: "おはようございます",
    timestamp: dayjs("2023-10-24 12:34:56"),
    reply_to: 1,
    is_question: false,
  },
  {
    id: 3,
    user_id: 3,
    name: "ユーザー1",
    content: "今日の天気はどうですか？",
    timestamp: dayjs("2023-10-25 12:34:54"),
    reply_to: null,
    is_question: true,
  },
  {
    id: 4,
    user_id: 1,
    name: "ユーザー2",
    content: "晴れですよ",
    timestamp: dayjs("2023-10-25 12:34:56"),
    reply_to: 3,
    is_question: false,
  },
  {
    id: 1,
    user_id: 1,
    name: "ユーザー1",
    content: "こんにちは",
    timestamp: dayjs("2023-10-23 12:34:56"),
    reply_to: null,
    is_question: false,
  },
  {
    id: 2,
    user_id: 2,
    name: "ユーザー2",
    content: "おはようございます",
    timestamp: dayjs("2023-10-24 12:34:56"),
    reply_to: 1,
    is_question: false,
  },
  {
    id: 3,
    user_id: 3,
    name: "ユーザー1",
    content: "今日の天気はどうですか？",
    timestamp: dayjs("2023-10-25 12:34:54"),
    reply_to: null,
    is_question: true,
  },
  {
    id: 4,
    user_id: 1,
    name: "ユーザー2",
    content: "晴れですよ",
    timestamp: dayjs("2023-10-25 12:34:56"),
    reply_to: 3,
    is_question: false,
  },
  {
    id: 1,
    user_id: 1,
    name: "ユーザー1",
    content: "こんにちは",
    timestamp: dayjs("2023-10-23 12:34:56"),
    reply_to: null,
    is_question: false,
  },
  {
    id: 2,
    user_id: 2,
    name: "ユーザー2",
    content: "おはようございます",
    timestamp: dayjs("2023-10-24 12:34:56"),
    reply_to: 1,
    is_question: false,
  },
  {
    id: 3,
    user_id: 3,
    name: "ユーザー1",
    content: "今日の天気はどうですか？",
    timestamp: dayjs("2023-10-25 12:34:54"),
    reply_to: null,
    is_question: true,
  },
  {
    id: 4,
    user_id: 1,
    name: "ユーザー2",
    content: "晴れですよ",
    timestamp: dayjs("2023-10-25 12:34:56"),
    reply_to: 3,
    is_question: false,
  },
  {
    id: 1,
    user_id: 1,
    name: "ユーザー1",
    content: "こんにちは",
    timestamp: dayjs("2023-10-23 12:34:56"),
    reply_to: null,
    is_question: false,
  },
  {
    id: 2,
    user_id: 2,
    name: "ユーザー2",
    content: "おはようございます",
    timestamp: dayjs("2023-10-24 12:34:56"),
    reply_to: 1,
    is_question: false,
  },
  {
    id: 3,
    user_id: 3,
    name: "ユーザー1",
    content: "今日の天気はどうですか？",
    timestamp: dayjs("2023-10-25 12:34:54"),
    reply_to: null,
    is_question: true,
  },
  {
    id: 4,
    user_id: 1,
    name: "ユーザー2",
    content: "晴れですよ",
    timestamp: dayjs("2023-10-25 12:34:56"),
    reply_to: null,
    is_question: false,
  },
];

export const ChatMain = (props: { className?: string; channelId: number }) => {
  const { className, channelId } = props;
  useEffect(() => {
    console.log(channelId);
  }, [channelId]);
  return (
    <>
      <div
        className={`chat d-flex align-items-stretch flex-column ${className}`}
      >
        <div className="chat-header flex-grow-0 bg-gray d-flex justify-content-between align-items-center">
          <div className="chat-header-text ms-7 fw-bold fs-4 text-white my-3">
            ワールド
          </div>
          <img src="/setting.svg" alt="setting" height={38} className="me-6" />
        </div>
        <div className="chat-window mt-auto">
          {dummyChats.map((chat, i) => (
            <Chat key={i} chat={chat} className="py-3 px-5" />
          ))}
        </div>
        <ChatMessageInput className="px-5 my-4" />
      </div>
    </>
  );
};
