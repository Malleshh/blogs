// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {author, imageUrl, id, avatarUrl, title, topic} = eachBlog
  return (
    <Link className="linkItem" to={`/blogs/${id}`}>
      <div className="container">
        <div>
          <img className="image" src={imageUrl} alt={`imageId ${id}`} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{topic}</p>
          <div className="avatar-container">
            <img
              className="avatar-image"
              src={avatarUrl}
              alt={`avatarId ${id}`}
            />
            <h5>{author}</h5>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
