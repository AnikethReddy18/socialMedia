import { useAuth } from "./AuthProvider"
import apiClient from "./apiClient.js"
import { useEffect, useState } from "react"
import Post from "./components/Post.jsx"
import NewPost from "./components/NewPost.jsx"

function App() {
  const auth = useAuth()
  const [posts, setPosts] = useState()

  useEffect(()=>{
    async function getPosts(){
      const { data } = await apiClient.get('/post')
      setPosts(data)
    }

    setTimeout(()=>getPosts(), 1)
  }, [])

  function handleLogoutButton(){
    auth.setToken(null)
  }

  return (
    <>
    <button onClick={handleLogoutButton}>logout</button>
    <NewPost />
    {posts && posts.map((post)=> <Post key={post.id} post={post}/>)}
    </>
  )
}

export default App

