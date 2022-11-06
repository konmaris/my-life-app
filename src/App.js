import {
  AppContainerStyle,
  CenterContainerStyle,
  SidebarContainerStyle,
  TitleStyle,
  ContentContainerStyle,
  ContentTitleStyle,
} from "./styles/AppStyles.jsx";

import Sidebar from "./components/Sidebar";
import useActivePage from "./hooks/useActivePage";

function App() {
  const { activePage, setActivePage } = useActivePage();
  return (
    <div style={AppContainerStyle}>
      <div style={CenterContainerStyle}>
        <div style={SidebarContainerStyle}>
          <p style={TitleStyle}>Elena's Life 🌹</p>
          <Sidebar />
        </div>
        <div style={ContentContainerStyle}>
          <p style={ContentTitleStyle}>{activePage?.label}</p>
        </div>
      </div>
      <p
        style={{
          color: "#b35151",
          margin: 0,
          marginTop: 10,
          marginRight: "35%",
          width: "100%",
          textAlign: "right",
        }}
      >
        made with love for Elenakos by Kostantoulis ❤️
      </p>
    </div>
  );
}

export default App;
