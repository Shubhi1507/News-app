import React, {createContext} from 'react';
import {useState, useEffect} from 'react';
import {getNewsAPI} from './api';

export const NewsContext = createContext();

const Context = ({children}) => {
  const [News, SetNews] = useState([]);
  const [category, SetCategory] = useState('general');
  const [index, setIndex] = useState(1);
  useEffect(() => {
    fetchNews();
  }, [category]);
  const fetchNews = async () => {
    // const {data} = await axios.get(getNewsAPI(category ));
    try {
      const data = await fetch(getNewsAPI(category));
      let temp = await data.json();
      console.log(temp.articles);
      SetNews(temp.articles);
    } catch (error) {
      console.log(error);
    }

    setIndex(1);
  };

  return (
    <NewsContext.Provider value={{News, index, setIndex}}>
      {children}
    </NewsContext.Provider>
  );
};
export default Context;
