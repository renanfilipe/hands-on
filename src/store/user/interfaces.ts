import { Actions } from "./actions";
import { Selectors } from "./selectors";

export interface StoreContext extends Actions, Selectors {
  $user: Store;
}

export interface Store {
  users: User[];
}

export interface User {
  name: string;
  age: number;
}
