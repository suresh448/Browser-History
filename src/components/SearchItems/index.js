import './index.css'

const SearchItems = props => {
  const {listItem, deleteSearch} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listItem

  const deleteFunction = () => {
    deleteSearch(id)
  }
  // console.log(listItem)
  return (
    <li className="list-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="title-domain-image-container">
        <div className="image-domain-container">
          <img className="logo" src={logoUrl} alt="domain logo" />
          <div className="domain-title-container">
            <p className="title-domain">{title}</p>
            <p className="title-domain domain">{domainUrl}</p>
          </div>
        </div>
        <button testId="delete" type="button" onClick={deleteFunction}>
          <img
            className="delete-logo"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default SearchItems
