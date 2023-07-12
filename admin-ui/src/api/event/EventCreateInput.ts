import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserCreateNestedManyWithoutEventsInput } from "./UserCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  cover?: number | null;
  date: Date;
  description?: string | null;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  participants?: UserCreateNestedManyWithoutEventsInput;
  venue: string;
};
