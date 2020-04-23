import { createContext, useContext } from "react";
import { User } from "../models/user";

interface UserContext {
  user: User;
}

let context: React.Context<UserContext>;

export function CreateUserContext(defaultValue: UserContext) {
  const userContext = createContext(defaultValue);
  context = userContext;
  return userContext;
}

export function useUserContext() {
  return useContext(context);
}
