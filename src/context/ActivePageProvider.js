import { createContext, useState } from "react";

const ActivePageContext = createContext({});

export const ActivePageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState({
    label: "🏠 Home",
    page_id: "home",
  });

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
};

export default ActivePageContext;
