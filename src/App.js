import {
  AppContainerStyle,
  CenterContainerStyle,
  SidebarContainerStyle,
  TitleStyle,
  ContentContainerStyle,
  SidebarItemStyle,
  SidebarItemLabelStyle,
} from "./styles/AppStyles.jsx";

import { useState } from "react";

const SidebarItems = [
  {
    label: "📅 Weekly schedule",
    icon: null,
    route: "/weekly_schedule",
  },
  {
    label: "🎯 Monthly goals",
    icon: null,
    route: "/monthly_goals",
  },
  {
    label: "⏰ Appointments",
    icon: null,
    route: "/appointments",
  },
  {
    label: "⚙️ Settings",
    icon: null,
    route: "/settings",
  },
];

function SidebarItem({ label, icon, route }) {
  const [hover, setHover] = useState(false);
  return (
    <li
      style={{
        ...SidebarItemStyle,
        backgroundColor: !hover ? "#ffd9d9" : "#ffe1e1",
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <p style={SidebarItemLabelStyle}>{label}</p>
    </li>
  );
}

function Sidebar() {
  const sidebarItems = SidebarItems.map((item) => {
    return (
      <SidebarItem label={item.label} icon={item.icon} route={item.route} />
    );
  });

  return <ul>{sidebarItems}</ul>;
}

function App() {
  return (
    <div style={AppContainerStyle}>
      <div style={CenterContainerStyle}>
        <div style={SidebarContainerStyle}>
          <p style={TitleStyle}>Elena's Life 🌹</p>
          <Sidebar />
        </div>
        <div style={ContentContainerStyle}></div>
      </div>
    </div>
  );
}

export default App;
