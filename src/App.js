import "./App.css";
import { Header } from "./components/header/Header.js";
import { CardsList } from "./components/cards-list/CardsList.js";
import { Article } from "./components/article/Article.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import englishFlag from "./assets/images/united-kingdom.png";
import germanFlag from "./assets/images/germany.png";
import frenchFlag from "./assets/images/france.png";
import italianFlag from "./assets/images/italy.png";
import { GRID_UNIT } from "./constants.js";
import { articles } from "./articles/articles";

const lngs = {
  en: { nativeName: "English", image: englishFlag },
  de: { nativeName: "Deutsch", image: germanFlag },
  fr: { nativeName: "French", image: frenchFlag },
  it: { nativeName: "Italian", image: italianFlag },
};

function App() {
  const { i18n } = useTranslation();

  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const articleClicked = (articleId) => {
    setSelectedArticleId(articleId);
  };

  const backButtonClicked = () => {
    setSelectedArticleId(null);
  };

  const findArticleByArticleId = (articleId) => {
    return articles.find((article) => article.id === articleId);
  };

  return (
    <>
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
        {selectedArticleId ? (
          <Article
            onBackButtonClicked={backButtonClicked}
            article={findArticleByArticleId(selectedArticleId)}
          />
        ) : (
          <CardsList articles={articles} onArticleClick={articleClicked} />
        )}
      </div>
    </>
  );
}

export default App;

// better markdown, authors  to grab,
// try not to fetch and use markdown package to do it
// use json data model to store articles
// skim through async tasks and http_client
// 404 on article not found
