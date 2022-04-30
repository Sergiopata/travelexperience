const Item = ( {props} ) => {
console.log(props.province, "Item")
  const {id, title, description, price, pictureUrl} = props.province
  return (
    <div className="text-center">
      <div> {id} </div>
      <strong> {title} </strong>
      <div> {description} </div>
      <div> {price} </div>
      <div> {pictureUrl} </div>
    </div>
  )
}
export default Item



