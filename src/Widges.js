import React from 'react'
import "./Widges.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InfoIcon from '@material-ui/icons/Info';


function Widges() {
    
 const newsArticle =(heading,subtitle) =>(
    <div className='widgets_article'>
    <div className='widget_articleLeft'>
        <FiberManualRecordIcon/>
    </div>
    
    <div className='widget_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
    </div>
    
</div>
 )
 

  return (
   <div className='widgets'>
    <div  className='widgets_header'>
        <h2>LinkedIn News</h2>
        <InfoIcon/>
    </div>

    {newsArticle("dbfidsf","ndfnodn")}
    {newsArticle("dbfidsf","ndfnodn")}

    {newsArticle("dbfidsf","ndfnodn")}

    {newsArticle("dbfidsf","ndfnodn")}

    {newsArticle("dbfidsf","ndfnodn")}

   </div>
  )
}

export default Widges