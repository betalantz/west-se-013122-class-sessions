import React from "react";
import Logo from './Logo'
import MenuLinks from "./MenuLinks";
import MenuLi from './MenuLinks'
import Search from './Search'

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo/>
      <MenuLinks/>
      <Search/>
    </aside>
  );
}

export default SideMenu;
