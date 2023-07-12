import { User } from "../user/User";

export type Event = {
  cover: number | null;
  createdAt: Date;
  date: Date;
  description: string | null;
  id: string;
  name: string | null;
  owner?: User | null;
  participants?: Array<User>;
  updatedAt: Date;
  venue: string;
};
