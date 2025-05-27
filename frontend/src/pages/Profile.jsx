import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import apiClient from "../apiClient.js"
import Post from "../components/Post.jsx";

function Profile() {
    const [posts, setPosts] = useState([])
    const { username } = useParams()
    
    useEffect(()=>{
        async function getPosts() {
            const {data} = await apiClient.get(username+"/post")
            setPosts(data)
        }

        setTimeout(()=>getPosts(), 1)
    },[])

    return ( <>
    <h1>{username}</h1>
    {posts && posts.map((post)=> <Post key={post.id} post={post}/>)}
    </> );
}

export default Profile;