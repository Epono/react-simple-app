import "./App.css";
import { Header } from "./components/header/Header.js";
import { CardsList } from "./components/cards-list/CardsList.js";
import { Article } from "./components/article/Article.js";
import { useTranslation } from "react-i18next";
import englishFlag from "./assets/images/united-kingdom.png";
import germanFlag from "./assets/images/germany.png";
import frenchFlag from "./assets/images/france.png";
import italianFlag from "./assets/images/italy.png";
import { GRID_UNIT } from "./constants.js";
import { articles } from "./articles/articles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const lngs = {
  en: { nativeName: "English", image: englishFlag },
  de: { nativeName: "Deutsch", image: germanFlag },
  fr: { nativeName: "French", image: frenchFlag },
  it: { nativeName: "Italian", image: italianFlag },
};

function App() {
  const { i18n } = useTranslation();

  return (
    <Router>
      <Header />
      <div className="App">
        <div className="flags-container">
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{ fontWeight: i18n.language === lng ? "bold" : "normal" }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              <img
                src={lngs[lng].image}
                width={GRID_UNIT * 2}
                data-toggle="tooltip"
                title={lngs[lng].nativeName}
                alt={lngs[lng].nativeName}
              />
            </button>
          ))}
        </div>
      </div>

      <Switch>
        <Route path="/about">
          <OurStory />
        </Route>
        <Route path="/article/:articleId">
          <Article />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <CardsList articles={articles} />;
}

function OurStory() {
  return <h2>OurStory</h2>;
}

export default App;

// better markdown, authors  to grab,
// try not to fetch and use markdown package to do it
// use json data model to store articles => ok
// skim through async tasks and http_client
// 404 on article not found => ok
