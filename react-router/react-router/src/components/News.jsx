import React, { useEffect, useReducer } from 'react';
import axios from "axios";

const intialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return action.payload;
    default:
      return state;
  }

};
function News() {
  const [state, dispatch] = useReducer(reducer, intialState);
  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=b99d566f944b413ea65584af1c062388&category=business");
      const data = response.data;
      const filteredNews = data.articles.filter(article => article.urlToImage !== null);

      setTimeout(() => {
        dispatch({ type: 'SET_NEWS', payload: filteredNews.slice(0, 6) });
      }, 2000);

    };
    fetchNews();
  }, []);

  return (
    <div className="container mx-auto bg-gray-500 py-8">
      <h1 className="text-3xl text-center font-bold mb-4">Business News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-3">
        {state.map((article) => (
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img src={article.urlToImage} alt="" className='w-full md:h-md' />
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.description}</p>
            <a href={article.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
}

export default News;
