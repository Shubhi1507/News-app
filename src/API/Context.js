import React ,  {createContext} from 'react';
import { useState } from 'react';
import { getNewsAPI } from './api';


export const NewsContext = createContext();

const Context = ({children}) => {
const [ News, SetNews] = useState([]);
const[category ,  SetCategory] = useState("general");
const [index, setIndex] = useState(1);
const fetchNews = async() => {

const {data} = await axios.get(getNewsAPI(category ));
SetNews (data) 
setIndex (1)
}

  return <NewsContext.Provider value ={{News , index , setIndex}}>
      
      {children}</NewsContext.Provider>;
};
export default Context ;
