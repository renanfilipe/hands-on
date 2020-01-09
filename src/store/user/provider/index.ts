import { FetchUserResponse } from "./interface";
import requestPromise from "request-promise-native";
import to from "../../../lib/to";

export const fetchUser = async (id: number) =>
  to<FetchUserResponse>(
    requestPromise(`https://jsonplaceholder.typicode.com/users/${id}`)
  );
