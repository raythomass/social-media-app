import { useState, useEffect } from "react"

export default function Home() {
  const [ posts, setPosts] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:3001/api/posts')
      console.log(response)

      const json = await response.json()
      console.log(json)

      if(response) {
        setPosts(json)
      }
    }

    fetchPosts();
  }, [])

  return (
    <div className="home">
      {posts && posts.map((post) => (
        <>
        <p>{post.title}</p>
        <p>{post.content}</p>
        </>
      ))}
    </div>
  )
}

