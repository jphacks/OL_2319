import { Dayjs } from "dayjs";
import dayjs from "dayjs";

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

export const dummyChats: ChatLog[] = [
  {
    id: 4,
    user_id: 1,
    user_name: "ユーザー2",
    content: "晴れですよ",
    timestamp: dayjs("2023-10-25 12:34:56"),
    reply_to: 3,
    is_question: false,
  },
  {
    id: 1,
    user_id: 1,
    user_name: "ユーザー1",
    content: "こんにちは",
    timestamp: dayjs("2023-10-23 12:34:56"),
    reply_to: null,
    is_question: false,
  },
  {
    id: 2,
    user_id: 2,
    user_name: "ユーザー2",
    content: "おはようございます",
    timestamp: dayjs("2023-10-24 12:34:56"),
    reply_to: 1,
    is_question: false,
  },
  {
    id: 3,
    user_id: 3,
    user_name: "ユーザー1",
    content: "今日の天気はどうですか？",
    timestamp: dayjs("2023-10-25 12:34:54"),
    reply_to: null,
    is_question: true,
  },
  {
    id: 4,
    user_id: 1,
    user_name: "ユーザー2",
    content: `
# 見出し 1

## 見出し 2

### 見出し 3

**太字** または __太字__
*斜体* または _斜体_
~~取り消し線~~

1. 有序リストのアイテム 1
2. 有序リストのアイテム 2

- 無序リストのアイテム
  - サブアイテム

[リンクテキスト](http://example.com)
![代替テキスト](image.png)

> ブロック引用

行内 \`コード\` またはコードブロック:
\`\`\`
コードブロック
\`\`\`
ディレクトリ文字列:
\`\`\`Directory
root
  src
    index.html
    style
      style.css
\`\`\`
表:

| ヘッダー 1 | ヘッダー 2 |
|------------|------------|
| セル 1     | セル 2     |

水平線:

---

テーブル

| 左寄せ | 中央寄せ | 右寄せ |
|:-------|:--------:|-------:|
| セル1  |  セル2   |  セル3 |
    `,
    timestamp: dayjs("2023-10-25 12:34:56"),
    reply_to: null,
    is_question: false,
  },
];
