// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    blogsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachBlog => ({
      author: eachBlog.author,
      avatarUrl: eachBlog.avatar_url,
      id: eachBlog.id,
      imageUrl: eachBlog.image_url,
      title: eachBlog.title,
      topic: eachBlog.topic,
    }))

    this.setState({blogsList: updatedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          blogsList.map(eachBlog => (
            <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
