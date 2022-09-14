import React, { useState } from "react";

interface AppContextProps {
  loading: boolean;
  query: string;
  activeTopBar: number;
  handleActiveTopBar: (id: number) => void;
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

  //Active TopBar Menu
  const [activeTopBar, setActiveTopBar] = useState<number>(1);

  const handleActiveTopBar = (id: number): void => {
    setActiveTopBar(id);
  };

  return (
    <AppContext.Provider
      value={{ loading, query, activeTopBar, handleActiveTopBar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = React.useContext(AppContext);
  if (context !== null) {
    return context;
  }
};

export { AppProvider, AppContext };
