import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const api = {
  baseURL: 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=c8e9be2d28fb414189aa462890158209'
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: { articles } } = await axios.get(api.baseURL);
        setArticles(articles);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if(loading) return <NewsListBlock>대기중...</NewsListBlock>;
  
  if(!articles) return null;

  return (
    <NewsListBlock>
      {articles.map(article => <NewsItem key={article.url} article={article} />)}
    </NewsListBlock>
  )
};

export default NewsList;