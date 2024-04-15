import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "./Header.css"
function Header() {
  return <div className="header">

    <div className="header_left">
        {/* <img src="" alt=""/> */}
        <LinkedInIcon/>

        <div className="header_search">
            <SearchIcon/>
            <input type ="text" />

        </div>
    </div>

    <div className="header_right">
        <HeaderOption Icon={HomeIcon} title= "Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title= "My Network"/>

        <HeaderOption Icon={BusinessCenterIcon} title= "Jobs"/>

        <HeaderOption Icon={ChatIcon} title= "Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title= "Notification"/>
        <HeaderOption avatar="" title= "me"/>

    </div>
  </div>;
}

export default Header;
