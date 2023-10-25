import { Tag } from "./Tag";

export type Channel = {
  id: number;
  name: string;
  description: string;
  owner_id: number;
  is_anonymous: boolean;
  tags: Tag[];
};
