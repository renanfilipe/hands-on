import { Store, User } from "./interfaces";

const selectors = ($user: Store) => {
  const filterUsers = (filter: string): User[] => {
    if (!$user.users) {
      return [];
    }

    if (filter === "") {
      return $user.users;
    }

    const lowerCasedFilter = filter.toLowerCase();

    return $user.users.filter(
      ({ name, age }) =>
        name.toLowerCase().includes(lowerCasedFilter) ||
        age.toString().includes(filter)
    );
  };

  return {
    filterUsers
  };
};

export default selectors;
export type Selectors = ReturnType<typeof selectors>;
