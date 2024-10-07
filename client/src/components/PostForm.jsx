import { useState } from "react"
import {toast} from 'react-hot-toast'
import { usePostContext } from "../hooks/usePostContext"

export default function PostForm() {
    const {dispatch} = usePostContext()

    const [post_title, setTitle] = useState('')
    const [post_content, setContent] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = {post_title, post_content}

        const response = await fetch('http://localhost:3001/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        console.log(json)

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
            toast.error(json.error)
        }

        if(response.ok) {
            toast.success('New Post Added')
            setTitle('')
            setContent('')
            setError(null)
            console.log('New Post Added', json)
            dispatch({type: 'CREATE_POST', payload: json})
        }
    }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
        <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={post_title}
            placeholder="Title of Post"
            className="post-form-title"
        />
        <input
            type="text"
            onChange={(e) => setContent(e.target.value)}
            value={post_content}
            placeholder="What do you want to write about?"
            className="post-form-content"
        />
        <button>Add Post</button>
    </form>
  )
}
