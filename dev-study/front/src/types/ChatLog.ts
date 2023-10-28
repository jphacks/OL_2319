import { Dayjs } from "dayjs";

export type ChatLog = {
  id: number;
  user_id: number;
  user_name: string;
  content: string;
  timestamp: Dayjs;
  reply_to: number | null;
  is_question: boolean;
};

export type ChatLogResponse = {
  id: number;
  channel_id: number;
  user_id: number;
  user_name: string;
  content: string;
  created_at: string;
  reply_to: number | null;
  is_question: boolean;
};
