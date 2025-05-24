import { useState } from "react";
import apiClient from "../apiClient";

function Post({ post }) {
    const [comment, setComment] = useState("")

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
            <span onClick={()=>document.querySelector('dialog').showModal()}>Likes: {post.likes.length}</span>
            <dialog>
                <div>{post.likes.map((like)=><div key={like.id}>{like.username}</div>)}</div>
                <button onClick={()=>document.querySelector('dialog').close()}>close!</button>
            </dialog>
            <button onClick={handleLikePostButton}>Like</button>

            <input type="text" placeholder="add your comment" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={handleEnterCommentButton}>Add Comment</button>
            <div style={{ border: "1px solid green" }}>
                {post.comments.map((comment) => {
                    return (<div key={comment.id}>
                        <h5> {comment.authorUsername} </h5>
                        <span>{comment.content}</span>
                    </div>)
                })}</div>
        </div>
    </div>);
}

export default Post;