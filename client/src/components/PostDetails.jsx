import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext'

const PostDetails = ({ post }) => {
  const { user } = useAuthContext()

  return (
    <div className="post-details">
      <p className='post-title'>{post.post_title}</p>
      <p className='post-content'>{post.post_content}</p>
      <p className='post-date'>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true})}</p>
    </div>
  )
}

export default PostDetails
