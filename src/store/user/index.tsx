import { Store, StoreContext } from "./interfaces";

import { useCreateStore } from "../../lib/useCreateStore";
import { useState } from "react";
import userActions from "./actions";
import userSelectors from "./selectors";

const UserStore = useCreateStore<StoreContext>(() => {
  const [$user, setUser] = useState<Store>({ users: [] });
  const actions = userActions(setUser);
  const selectors = userSelectors($user);

  return { $user, ...actions, ...selectors };
});

export const useUser = () => UserStore();
export const UserContext = UserStore.Context;
export const UserProvider = UserStore.Provider;
