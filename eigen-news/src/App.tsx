import React, { useEffect, useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';

const App: React.FC = () => {
  const [items, setItems] = useState<any[]>([])
  const [active, setActive] = useState<number>(1)
  const [category, setCategory] = useState<string>("general")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2a6e97e7c92247df8b13383f77b75f2b`)
      .then(res => res.json())
      .then(data => setItems(data.articles))
  }, [category])

  console.log(items)
  return (
    <div className="App">
      <h1 className='title'>See The Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}

export default App;
