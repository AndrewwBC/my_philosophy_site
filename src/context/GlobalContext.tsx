import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface StateProps {
  name?: string;
  darkTheme?: boolean;
  token?: string;
}

interface ContextProps {
  data: {
    name?: string;
    darkTheme?: boolean;
    token?: string;
  };
  setData: Dispatch<SetStateAction<StateProps>>;
}

export const UserContext = createContext<ContextProps>({
  data: {
    name: "",
    darkTheme: false,
    token: "",
  },
  setData: useState,
});

interface GlobalContextProps {
  children: ReactNode;
}

export function GlobalContext({ children }: GlobalContextProps) {
  const [data, setData] = useState<StateProps>({
    name: "",
    darkTheme: false,
    token: "",
  });

  if (localStorage.getItem("token") && !data.token) {
    const token = localStorage.getItem("token") as string;

    setData({ token });
  }
  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
}
