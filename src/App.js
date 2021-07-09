import "./App.css";
import { Header } from "./components/header/Header.js";
import { CardsList } from "./components/cards-list/CardsList.js";
import { Article } from "./components/article/Article.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import englishFlag from "./assets/images/united-kingdom.png";
import germanFlag from "./assets/images/germany.png";
import frenchFlag from "./assets/images/france.png";
import { GRID_UNIT } from "./constants.js";

const lngs = {
  en: { nativeName: "English", image: englishFlag },
  de: { nativeName: "Deutsch", image: germanFlag },
  fr: { nativeName: "French", image: frenchFlag },
};

function App() {
  const { t, i18n } = useTranslation();

  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const articles = [
    {
      id: 1,
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      id: 2,
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      id: 3,
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      id: 4,
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      id: 5,
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      id: 6,
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      id: 7,
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      id: 8,
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      id: 9,
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      id: 10,
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
  ];

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
        <div>
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
