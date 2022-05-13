/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { provincesData }  from "../data/provincesData"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        console.log(itemId);
        console.log(provincesData.find((i) => i.id == itemId));
        setItem(provincesData.find((i) => i.id == itemId));
    }, [itemId]);
    
    const getItems = () => {
      const getItemsPromise = new Promise((resolve) => {
          setTimeout(() => {
              resolve(provincesData);
          }, 2000);
      });

      getItemsPromise.then((data) => {
        
              setItem(data);
          
      });
  };
    return (
        <div>
            <ItemDetail items={item} />
        </div>
    );
};

export default ItemDetailContainer

