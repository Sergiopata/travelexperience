/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import { provincesData } from "../data/provincesData";

const ItemListContainer = () => {
  const { Id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {

    getItems();
  }, [Id]);
  const getItems = () => {
    const getItemsPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(provincesData);
      }, 2000);
    });

    getItemsPromise.then((data) => {
      if (Id) {
        setItems(data.filter((e) => e.category.toLowerCase() == Id));
      } else setItems(data);
    });
  };

  return <ItemList items={items} />;
};
export default ItemListContainer;

