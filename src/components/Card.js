const Card = ({children}) => {
  return (
    <div style={{border:'solid 3px black'}}>
      <div></div>
        {children}
      <div></div>
    </div>
  )
}
export default Card