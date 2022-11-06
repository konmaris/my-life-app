function App() {
  const AppContainerStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const CenterContainerStyle = {
    // backgroundColor: "#ececec",
    width: "70%",
    height: "70%",
    borderRadius: "15px",
    display: "flex",
  };

  const SidebarContainerStyle = {
    backgroundColor: "#ffeaea",
    width: "25%",
    height: "100%",
    borderRadius: "15px",
    marginRight: "1%",
  };

  const ContentContainerStyle = {
    backgroundColor: "#ffbbbb",
    width: "74%",
    height: "100%",
    borderRadius: "15px",
  };

  const TitleStyle = {
    margin: 0,
    fontSize: 32,
    marginLeft: 30,
    marginTop: 20,
    color: "#9c5d5d",
    fontWeight: "500",
  };

  return (
    <div style={AppContainerStyle}>
      <div style={CenterContainerStyle}>
        <div style={SidebarContainerStyle}>
          <p style={TitleStyle}>Elena's life</p>
        </div>
        <div style={ContentContainerStyle}></div>
      </div>
    </div>
  );
}

export default App;
