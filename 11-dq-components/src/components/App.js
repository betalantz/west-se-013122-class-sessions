import React from "react";
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import MainContent from './MainContent';

function App() {
  return <div className="app-container">
    <TopMenu />
    <MainContent />
    <SideMenu />
  </div>;
}

export default App;
