import React from "react";
import "../Style/navbar.css";
import logo from "../Media/logo.png"
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Navbar() {
  
  return (
    <div className="navbar_main">
       <div className="navbar_left"> 
          <img src={logo}/>
       </div>
       <div className="navbar_right">
          <span><HomeIcon style={{ color: 'white' }}/></span>
          <span><NotificationsIcon style={{ color: 'white' }}/></span>
          <span><Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"/></span>
          <MoreVertIcon style={{ color: '#3683F0',marginTop:'.5rem' }}/>
       </div>
    </div>
  );
}

export default Navbar;
