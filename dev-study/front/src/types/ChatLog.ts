import { Dayjs } from "dayjs";

export type ChatLog = {
  id: number;
  user_id: number;
  name: string;
  content: string;
  timestamp: Dayjs;
  reply_to: number | null;
  is_question: boolean;
};
