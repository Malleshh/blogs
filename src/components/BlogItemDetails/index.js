// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItemDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    console.log(updatedData)
    this.setState({blogItemDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {author, avatarUrl, content, id, imageUrl, title} = blogItemDetails
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          <div className="container1">
            <h2>{title}</h2>
            <div className="avatar-container1">
              <img
                className="avatar-image1"
                src={avatarUrl}
                alt={`avatar ${id}`}
              />
              <h3>{author}</h3>
            </div>
            <img className="image1" src={imageUrl} alt={`imageId ${id}`} />
            <p className="content1">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
