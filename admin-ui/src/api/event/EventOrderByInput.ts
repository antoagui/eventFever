import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  cover?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  updatedAt?: SortOrder;
  venue?: SortOrder;
};
