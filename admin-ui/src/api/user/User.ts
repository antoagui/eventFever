import { Event } from "../event/Event";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  event?: Event | null;
  events?: Event | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
