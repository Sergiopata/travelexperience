import React, { createContext, useContext, useEffect, useState } from "react";
import { provincesData } from "../../data/provincesData";

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {
	const [provinces, setProvinces] = useState([])

	useEffect(() => {
    getItems()
	}, [])

	const getItems = () => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(provincesData);
      }, 2000);
    });

    promesa.then((data) => {
      setProvinces(data);
    });
  }

  return <AppContext.Provider 
	value= {{provinces}}>
		{children}
	</AppContext.Provider>
};

export default AppContextProvider;
