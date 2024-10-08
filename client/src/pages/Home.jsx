import { useEffect } from "react"
import PostDetails from "../components/PostDetails"
import PostForm from "../components/PostForm"
import { usePostContext } from "../hooks/usePostContext"
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home() {
  // const [ posts, setPosts] = useState(null)
  const {posts, dispatch} = usePostContext();
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:3001/api/posts', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json()
      console.log(json)

      if(response) {
        // setPosts(json)
        dispatch({type: 'SET_POSTS', payload: json})
      }
    }

    if(user) {
      fetchPosts();
    }
  }, [dispatch, user])

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

