import { Tag, dummyTags } from "./Tag";

export type Channel = {
  id: number;
  name: string;
  description: string;
  owner_id: number;
  is_anonymous: boolean;
  tags: Tag[];
};

export type ChannelUpdate = {
  name: string | null;
  description: string | null;
  tags: Tag[] | null;
};

export const dummyChannels: Channel[] = [
  {
    id: 1,
    name: "チャンネル1",
    description: "チャンネル1の説明",
    is_anonymous: true,
    owner_id: 1,
    tags: dummyTags,
  },
  {
    id: 2,
    name: "チャンネル2",
    description: "チャンネル2の説明",
    is_anonymous: false,
    owner_id: 1,
    tags: dummyTags,
  },
  {
    id: 3,
    name: "チャンネル3",
    description: "チャンネル3の説明",
    is_anonymous: false,
    owner_id: 1,
    tags: dummyTags,
  },
  {
    id: 4,
    name: "チャンネル4",
    description: "チャンネル4の説明",
    is_anonymous: false,
    owner_id: 1,
    tags: dummyTags,
  },
];
