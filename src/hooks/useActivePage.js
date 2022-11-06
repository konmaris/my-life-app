import { useContext } from "react";
import ActivePageContext from "../context/ActivePageProvider";

const useActivePage = () => {
  return useContext(ActivePageContext);
};

export default useActivePage;
