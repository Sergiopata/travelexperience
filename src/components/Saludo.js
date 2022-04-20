/* const Saludo = (props) => { */
const Saludo = ({name,dni,apodo}) => {
  return (
  /*   <h1 className="text-2xl font-bold text-center" style={{color:'red'}}>
      Hola {props.name}!
      Dni {props.dni} 
      Apodo {props.apodo} </h1> */

    <h1 className="text-2xl font-bold text-center" style={{color:'red'}}>
    Hola {name}!
    Dni {dni} 
    Apodo {apodo} </h1>
  )
}
export default Saludo