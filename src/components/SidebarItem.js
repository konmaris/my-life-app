import {
  SidebarItemStyle,
  SidebarItemLabelStyle,
} from "../styles/AppStyles.jsx";
import { useState } from "react";
import useActivePage from "../hooks/useActivePage.js";

function SidebarItem({ label, icon, page_id }) {
  const [hover, setHover] = useState(false);
  const { activePage, setActivePage } = useActivePage();
  return (
    <li
      style={{
        ...SidebarItemStyle,
        backgroundColor:
          activePage.page_id === page_id
            ? !hover
              ? "#fdc2c2"
              : "#ffb9b9"
            : !hover
            ? "#ffd9d9"
            : "#ffe1e1",
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        setActivePage({ page_id, label });
      }}
    >
      <p style={SidebarItemLabelStyle}>{label}</p>
    </li>
  );
}

export default SidebarItem;
