/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { provincesData } from "../data/provincesData";
import Item from "./Item";


const ItemList = () => {
  
  const [provinces, setProvinces] = useState([])

  useEffect(() => {
    
    getProvinces()
    
    }, [])

  const getProvinces = () => {
    const getProvincesPromise = new Promise((resolve) => {  
      setTimeout(() => {
        resolve(provincesData)
      }, 2000);

    })
    getProvincesPromise.then(data => setProvinces(data))
  }
  
  return (
    <div className="w-full mx-auto flex flex-wrap justify-center gap-10">
      {provincesData.map( p => <Item key={p.id} province={p}/>)}

      
    </div>


  )           
  }
export default ItemList


