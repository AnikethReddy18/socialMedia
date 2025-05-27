import { useState, useRef } from "react";
import apiClient from "../apiClient";

function Post({ post }) {
    const [comment, setComment] = useState("")
    const dilogRef = useRef(null)

    async function handleEnterCommentButton() {
        await apiClient.post("/" + post.id + "/comment", { content: comment },
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        )

        window.location.reload()
    }

    async function handleLikePostButton(){
        await apiClient.post("/" + post.id + "/like")

        window.location.reload()
    }

    return (<div style={{ border: "2px solid red" }}>
        <h1>{post.authorUsername}</h1>
        <p>{post.content}</p>
        <div>
            <span onClick={()=>dilogRef.current.showModal()}>Likes: {post.likes.length}</span>
            <dialog ref={dilogRef}>
                <div>{post.likes.map((like,index)=><div key={index}>{like.username}</div>)}</div>
                <button onClick={()=>dilogRef.current.close()}>close!</button>
            </dialog>
            <button onClick={handleLikePostButton}>Like</button>

            <input type="text" placeholder="add your comment" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={handleEnterCommentButton}>Add Comment</button>
            <div style={{ border: "1px solid green" }}>
                {post.comments.map((comment,index) => {
                    return (<div key={index}>
                        <h5> {comment.authorUsername} </h5>
                        <span>{comment.content}</span>
                    </div>)
                })}</div>
        </div>
    </div>);
}

export default Post;