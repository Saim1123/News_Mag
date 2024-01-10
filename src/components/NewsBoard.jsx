import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

let key = "78ddb99fa1cf415b870b89a4d047adbe";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div>
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex item-center flex-wrap justify-content-center">
        {articles.map((news, index) => {
          return <NewsItem key={index} {...news} />;
        })}
      </div>
    </div>
  );
};

export default NewsBoard;
