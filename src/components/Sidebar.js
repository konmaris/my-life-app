import { SidebarItems } from "../constants/SidebarItems";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const sidebarItems = SidebarItems.map((item) => {
    return (
      <SidebarItem label={item.label} icon={item.icon} page_id={item.page_id} />
    );
  });

  return <ul>{sidebarItems}</ul>;
}

export default Sidebar;
