import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  count: number;
  setCount: (count: number) => void;
}

const CountContext = createContext<ContextProps>({} as ContextProps);

export default function CountProvider({ children }: Props) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
