import { createContext, useState } from "react";

const ActivePageContext = createContext({});

export const ActivePageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState();

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
};

export default ActivePageContext;
