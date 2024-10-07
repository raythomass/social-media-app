import { useState, useEffect } from "react"
import PostDetails from "../components/PostDetails"
import PostForm from "../components/PostForm"

export default function Home() {
  const [ posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:3001/api/posts')
      const json = await response.json()
      console.log(json)

      if(response.ok) {
        setPosts(json)
      }
    }

    fetchPosts();
  }, [])

  return (
    <div className="home">
      <div className="post-form-container">
        <PostForm/>
      </div>
      <div className="post-details-container">
        {posts && posts.map((post) => (
          <PostDetails key={post._id} post={post} />
      ))}
      </div>
    </div>
  )
}

