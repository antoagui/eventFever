import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type EventWhereInput = {
  cover?: FloatNullableFilter;
  date?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
  participants?: UserListRelationFilter;
  venue?: StringFilter;
};
