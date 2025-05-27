import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import apiClient from "../apiClient.js"
import Post from "../components/Post.jsx";

function Profile() {
    const [posts, setPosts] = useState([])
    const [userData, setUserData] = useState()
    const { username } = useParams()

    useEffect(() => {
        async function getPosts() {
            const { data } = await apiClient.get(username + "/post")
            setPosts(data)
        }

        async function getUserData() {
            const { data } = await apiClient.get("/user/" + username)
            setUserData(data)
        }

        setTimeout(() => getPosts(), 1)
        setTimeout(() => getUserData(), 1)
    }, [])

    return (
        <>
            {userData && (
                <>
                    <h1>
                        <img src={userData.profilePic} alt="profile pic" width={50} /> 
                        {userData.firstName + " " + userData.lastName}
                    </h1>
                    <p>@{userData.username}</p>
                </>
            )}
            {posts && posts.map((post) => <Post key={post.id} post={post} />)}
        </>
    );
}

export default Profile;