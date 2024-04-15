import React from 'react'
import {Avatar} from "@material-ui/core";
import "./Sidebar.css";
import img from "../src/assests/nnn.jpg"

function Sidebar() {

    const recentItem = (topic)  => {
        return(
            <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
        )
    };

  return (
  <div className='sidebar'>
    <div className='sidebar_top'>
        <img src={img} alt=''/>
        <Avatar  className='sidebar_avatar' />
        <h2>Rajshree Nupur</h2>
        <h4>rajshree.nupur@gmail.com</h4>
    </div>

    <div className='sidebar_stats'>
        <div className='sidebar_stat'>
            <p>Who viewed you</p>
            <p className='sidebar_statNumber'>2,546</p>
        </div>
        <div className='sidebar_stat'>
            <p>Views on post</p>
            <p className='sidebar_statNumber'>2,546</p>
        </div>
    </div>

    <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("deisgn")}
        {recentItem("developer")}


    </div>
  </div>
  )
}

export default Sidebar