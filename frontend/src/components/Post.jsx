import { useState } from "react";
import apiClient from "../apiClient";

function Post({ post }) {
    const [comment, setComment] =useState("")

    async function handleEnterCommentButton(){
        await apiClient.post("/"+post.id+"/comment", {content: comment}, 
            {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        )

        window.location.reload()
    }

    return ( <div style={{border: "2px solid red"}}>
    <h1>{post.authorUsername}</h1>
    <p>{post.content}</p>
    <div>
        <span>Likes: {post.likes.length}</span>
        <input type="text" placeholder="add your comment" value={comment} onChange={(e)=>setComment(e.target.value)}/>
        <button onClick={handleEnterCommentButton}>Add Comment</button>
        <div style={{border: "1px solid green"}}> 
            {post.comments.map((comment)=>{
            return(<>
            <h5> {comment.authorUsername} </h5>
            <span>{comment.content}</span>
            </>)
            })}</div>
    </div>
    </div> );
}

export default Post;