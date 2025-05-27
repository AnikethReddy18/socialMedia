import { useState, useRef } from "react";
import apiClient from "../apiClient";
import { Link } from "react-router-dom";

function Post({ post }) {
    const [comment, setComment] = useState("")
    const dilogRef = useRef(null)

    async function handleEnterCommentSubmission(e) {
        e.preventDefault()
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
        <Link to={post.authorUsername}>{post.authorUsername}</Link>
        <p>{post.content}</p>
        <div>
            <span onClick={()=>dilogRef.current.showModal()}>Likes: {post.likes.length}</span>
            <dialog ref={dilogRef}>
                <div>{post.likes.map((like,index)=><Link key={index} to={like.username}>{like.username}</Link>)}</div>
                <button onClick={()=>dilogRef.current.close()}>close!</button>
            </dialog>
            <button onClick={handleLikePostButton}>Like</button>

            <form onSubmit={handleEnterCommentSubmission}>
                <input type="text" placeholder="add your comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                <button>Add Comment</button>
            </form>
            <div style={{ border: "1px solid green" }}>
                {post.comments.map((comment,index) => {
                    return (<div key={index}>
                        <Link to={comment.authorUsername}> {comment.authorUsername} </Link>
                        <span>{comment.content}</span>
                    </div>)
                })}</div>
        </div>
    </div>);
}

export default Post;