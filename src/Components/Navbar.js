import React from "react";
import "../Style/navbar.css";
import logo from "../Media/logo.png"
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


function Navbar() {
  
  return (
    <div className="navbar_main">
       <div className="navbar_left"> 
          <img src={logo}/>
       </div>
       <div className="navbar_right">
          <span><HomeIcon style={{ color: 'white',fontSize: 18 }}/></span>
          <span><NotificationsIcon style={{ color: 'white' ,fontSize: 18}}/></span>
          <span><AddCircleOutlineIcon style={{ color: 'white' ,fontSize: 18}}/></span>
          <span><Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" style={{ width: 24, height: 24 }}/></span>
          <MoreVertIcon style={{ color: '#3683F0' }}/>
       </div>
    </div>
  );
}

export default Navbar;
