/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        getDocs(itemsCollection).then((snapshot) => {
            const provincesList = [];
            snapshot.docs.forEach((s) => {
                provincesList.push({ id: s.id, ...s.data() });
            });
            if (!categoryId) {
                setItem(provincesList);
            } else {
                setItem(provincesList.filter((i) => i.category === categoryId));
            }
        });
    }, [categoryId]);

    return <ItemList items={item} />;
};
export default ItemListContainer;

