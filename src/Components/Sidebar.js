import React from "react";
import '../Style/sidebar.css';

const Sidebar = ({ sidebarWidth, children }) => {
  return (
    <div style={{width:sidebarWidth}} className="sidebar_main">
      {children}
    </div>
  );
};

export default Sidebar;
