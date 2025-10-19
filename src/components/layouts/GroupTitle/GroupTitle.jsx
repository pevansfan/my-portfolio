import './GroupTitle.css'

const GroupTitle = ({ subtitle, title, span, br}) => {
  return (
    <div className="group-title">
      <span className="subtitle">{subtitle}</span>
      <h1 className="title">
        {title}
        {br ? <br /> : null}
        {span ? <span>{span}</span> : ""}
      </h1>
    </div>
  )
}

export default GroupTitle
