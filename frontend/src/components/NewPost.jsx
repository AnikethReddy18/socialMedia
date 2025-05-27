import { useState } from "react";
import apiClient from "../apiClient.js";

function NewPost() {
    const [content, setContent] = useState("")

    async function handleSubmitPost(e) {
        e.preventDefault()
        await apiClient.post('/post', { content },
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        )
        window.location.reload()
    }

    return (
    <form onSubmit={handleSubmitPost}>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <button>Upload Post</button>
    </form>);
}

export default NewPost;