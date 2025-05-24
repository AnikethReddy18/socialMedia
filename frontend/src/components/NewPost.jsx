import { useState } from "react";
import apiClient from "../apiClient.js";

function NewPost() {
    const [content, setContent] = useState("")

    async function handleSubmitPost() {
        await apiClient.post('/post', { content },
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        )
        window.location.reload()
    }

    return (<div>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={handleSubmitPost}>Upload Post</button>
    </div>);
}

export default NewPost;