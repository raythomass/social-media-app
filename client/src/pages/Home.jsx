import { useState, useEffect } from "react"
import PostDetails from "../components/PostDetails"

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
      <div>
        {posts && posts.map((post) => (
          <PostDetails key={post._id} post={post} />
      ))}
      </div>
    </div>
  )
}

