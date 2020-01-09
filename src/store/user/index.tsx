import { Store, UseCreateStoreResponse } from "./interfaces";

import { useCreateStore } from "../../lib/useCreateStore";
import { useState } from "react";
import userActions from "./actions";
import userSelectors from "./selectors";

const UserStore = useCreateStore(() => {
  const [$user, setUser] = useState<Store>({ users: [] });
  const actions = userActions(setUser);
  const selectors = userSelectors($user);
  const response = { $user, ...actions, ...selectors };
  return response;
});

export const useUser = () => UserStore();
export const UserContext = UserStore.Context;
export const UserProvider = UserStore.Provider;
