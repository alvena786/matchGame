import './index.css'
const ImageItems = props => {
  const {imageDetails, onThumbnailClick} = props
  const {thumbnailUrl, id} = imageDetails
  const onClickingThumbnail = () => {
    onThumbnailClick(id)
  }
  return (
    <li>
      <button className="btn" onClick={onClickingThumbnail}>
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="image"
        />
      </button>
    </li>
  )
}
export default ImageItems
