// Write your JS code here
import './index.css'

const BlogItem = props => {
  const blogDetails = props
  const {publishedDate, title, description} = blogDetails

  return (
    <li className="blog-item">
      <div className="blog-details-container">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
