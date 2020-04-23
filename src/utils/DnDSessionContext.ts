import { createContext, useContext } from "react";
import { DnDSession } from "../models/session";

interface CurrentSessionContext {
  session: DnDSession;
}

let context: React.Context<CurrentSessionContext>;

export function CreateSessionContext(defaultValue: CurrentSessionContext) {
  const sessionContex = createContext(defaultValue);
  context = sessionContex;
  return sessionContex;
}

export function useSessionContext() {
  return useContext(context);
}
