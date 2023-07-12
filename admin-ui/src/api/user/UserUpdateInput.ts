import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  event?: EventWhereUniqueInput | null;
  events?: EventWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
