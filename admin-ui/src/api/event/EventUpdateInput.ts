import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserUpdateManyWithoutEventsInput } from "./UserUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  cover?: number | null;
  date?: Date;
  description?: string | null;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  participants?: UserUpdateManyWithoutEventsInput;
  venue?: string;
};
