function Post({ post }) {
    
    return ( <div style={{border: "2px solid red"}}>
    <h1>{post.authorUsername}</h1>
    <p>{post.content}</p>
    <div>
        <span>Likes: {post.likes.length}</span>
        <span> Comments: {post.comments.length}</span>
    </div>
    </div> );
}

export default Post;