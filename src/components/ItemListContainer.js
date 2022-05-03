import ItemList from "./ItemList"


const ItemListContainer = () => {
  return (
    <div className="text-center">
     
      <ItemList />
      </div>
    
  )
}
export default ItemListContainer 

  /* import { useEffect, useState } from "react"; 


const ProvincesContainer = () => {


const provincesList = ['Buenos Aires', 'Santa Fe', 'Cordoba', 'Misiones', 'Salta', 'Tucuman', 'Entre Rios', 'San Luis']

const [provinces, setProvinces] = useState([])

  useEffect(() => {
    console.log ('Esto sucede al montar el componente')
    console.log ('lista de provincias', provincesList);

    const promesa = new Promise((resolve, reject)=> {
      const rand = Math.random();
      console.log ('Random number', rand);

      setTimeout( () => {
        if (rand >= 0.5){
          resolve (provincesList)
        }else{
          reject ('Rechazada!!!')
        }
      }, 2000);

    })
    promesa
      .then( (result) => {
      console.log('Promesa satisfecha', result);
      setProvinces(result)

    })
    .catch( (err) => {
      console.log('Promesa rechazada', err);
    })
    
    console.log("Fin de ejecucion del useEffect");
  }, []) 
  
  
  return (
    <div style = {{border: 'solid blue 2px', display:'grid', justifyContent: 'space-evenly'}}>
    <h1>ProvincesContainer</h1>
      {provinces.map( (p, i) => <li key={i}>{p}</li>)}
    </div>
  )
}
export default ProvincesContainer  
 */