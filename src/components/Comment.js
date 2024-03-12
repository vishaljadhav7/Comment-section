import React from 'react'
import './Comment.css';
import { useState } from 'react';


const CommentItem = ({comment}) => {
  
    const [showReply,toggleReply] = useState(false);
    const [addReply,toggleaddReply] = useState(false);
     
    return (
         <div className='comment-container'>
           <div className='details'>
             <div>{comment.comment}</div>
             <div className='controls'>
            {comment.replies.length > 0 && <span onClick={()=>{toggleReply(!showReply)}} >View</span>}
              <span onClick={()=>{toggleaddReply(!addReply)}}>Reply</span>
              </div>
           </div>
            {showReply && <Comment commentData={comment.replies}/>}
            {addReply &&   <input className='replyBox' type='text' autoFocus placeholder='add a comment'/> }
        </div>
    );
};


const Comment = ({commentData}) => {
    

  return commentData.map(comment => (
        <CommentItem comment={comment} key={comment.id}/>
  ))  
  
}




export default Comment;



