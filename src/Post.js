import React from 'react'
import { Avatar } from '@material-ui/core'
import "./Post.css"
import InputOption from './InputOption'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({name,description,message,photoUrl}) {
   return (
    <div className='post'>
      <div className='post_header'>
        <Avatar src={photoUrl}> </Avatar> 

        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>


      <div className='post_body'>
        <p>{message}</p>
      </div>

      <div className='post_buttons'>
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatIcon} title="Comment" color="gray" />

        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />

      </div>
    </div>
  )
}

export default Post