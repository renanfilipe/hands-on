import { User } from "../interfaces";

export interface FetchUsersRequestResponse {
  data: User[];
  status: boolean;
  message: string;
}

export interface FetchUserResponse {
  name: string;
  age: number;
}
