/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import ItemList from "./ItemList"
import { provincesData } from "../data/provincesData"
import Item from "./Item"


const ItemListContainer = () => {

  const { categoryId } = useParams()
  const [category, setCategory] = useState()
	

	useEffect(() => {
    
  setCategory (provincesData.filter ( i => i.category === categoryId ) )
    
  }, [categoryId])
    
  

  return (
   
   
  <ItemList category={category} />

  )
}
export default ItemListContainer 

