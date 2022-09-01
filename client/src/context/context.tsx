import React, { useState } from "react";

interface AppContextProps {
  loading: boolean;
  query: string;
}

const AppContext = React.createContext<AppContextProps | null>(null);

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  //Loading state
  const [loading, setLoading] = useState<boolean>(true);

  //Search input state
  const [query, setQuery] = useState<string>("");

  return (
    <AppContext.Provider value={{ loading, query }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
