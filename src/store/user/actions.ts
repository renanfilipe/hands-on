import * as provider from "./provider/";

import { Store } from "./interfaces";

const actions = (setUser: React.Dispatch<React.SetStateAction<Store>>) => {
  const fetchUserAction = async (id: number) => {
    const [error, user] = await provider.fetchUser(id);
    if (error) {
      console.log("Failed to fetch user");
      return;
    }

    setUser((prev: Store) => ({
      ...prev,
      users: {
        ...prev.users,
        user
      }
    }));
  };

  return {
    fetchUserAction
  };
};

export default actions;
export type Actions = ReturnType<typeof actions>;
