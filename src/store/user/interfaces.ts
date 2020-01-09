import { Actions } from "./actions";
import { Selectors } from "./selectors";

export interface UserContext extends Actions, Selectors {
  $user: Store;
}

export interface Store {
  users: User[];
}

export interface User {
  name: string;
  age: number;
}

export interface UseCreateStoreResponse {
  (): UserContext;
  Context: React.Context<UserContext>;
  Provider: React.FunctionComponent<{}>;
}
