import React, {useContext,useState, useEffect} from "react";
import axios from "axios";
const AppContext=React.createContext()

const allProductUrl= 'https://fakestoreapi.com/products/'

 



const AppProvider = ({children})=>{
    const [products, setProducts] = useState([])

    const fetchData=async (url)=>{
          try {
            const {data} = await axios.get(url)
            console.log(data)
          setProducts(data)
          
        }
          catch(err){
             console.log('oh no', err.response);
        console.log('hi')
          }
     }
    
    useEffect(()=>{
    fetchData(allProductUrl);
},[])

    return(
        <AppContext.Provider value={{products}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext =()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider}