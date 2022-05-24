/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
    
    const db = getFirestore()
    
    const item = doc(db, "items", itemId)
    getDoc(item).then (snapshot => {
      if (snapshot.exists()) {
        setItem ({id:snapshot.id, ...snapshot.data()})
      }
    })
  }, [itemId])
  
    return (
        <div>
            <ItemDetail items={item} />
        </div>
    );
};

export default ItemDetailContainer

