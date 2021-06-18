import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header.js';
import { ArticleCard } from './components/article-card/ArticleCard.js';
import { CardsList } from './components/cards-list/CardsList.js';

function App() {
  const articles = [
    {
      author: 'Me',
      title: 'A nice title',
      description: 'A small description',
      date: '11/06/2021',
    },
    {
      author: 'Me',
      title: 'A nice title',
      description: 'A small description',
      date: '11/06/2021',
    },
    {
      author: 'Me',
      title: 'A nice title',
      description: 'A small description',
      date: '11/06/2021',
    },
    {
      author: 'Me',
      title: 'A nice title',
      description: 'A small description',
      date: '11/06/2021',
    },
    {
      author: 'Me',
      title: 'A nice title',
      description: 'A small description',
      date: '11/06/2021',
    },
    {
      author: 'Me',
      title: 'A nice title',
      description: 'A small description',
      date: '11/06/2021',
    },
    {
      author: 'Me',
      title: 'A nice title',
      description: 'A small description',
      date: '11/06/2021',
    },
    {
      author: 'Me',
      title: 'A nice title',
      description: 'A small description',
      date: '11/06/2021',
    },
    {
      author: 'Me',
      title: 'A nice title',
      description: 'A small description',
      date: '11/06/2021',
    },
    {
      author: 'Me',
      title: 'A nice title',
      description: 'A small description',
      date: '11/06/2021',
    },
    {
      author: 'Me',
      title: 'A nice title',
      description: 'A small description',
      date: '11/06/2021',
    },
  ]

  return (
    <>
      <Header />
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}
        <CardsList articles={articles} />
      </div>
    </>
  );
}

export default App;
