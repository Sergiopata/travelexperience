import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {
	const [provinces, setProvinces] = useState([])

	useEffect(() => {
   
    const db = getFirestore()
    const itemsCollection = collection(db, "items")

        getDocs (itemsCollection).then ((snapshot) => {
        setProvinces (snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    });
  }, [])

  return <AppContext.Provider 
	value= {{provinces}}>
		{children}
	</AppContext.Provider>
};

export default AppContextProvider;
