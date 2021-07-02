import "./App.css";
import { Header } from "./components/header/Header.js";
import { CardsList } from "./components/cards-list/CardsList.js";
import { useTranslation } from "react-i18next";
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

  const articles = [
    {
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
    {
      author: "Me",
      title: "A nice title",
      description: "A small description",
      date: "11/06/2021",
    },
  ];

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
                // alt="my image"
                // onClick={this.myfunction}
              />
              {/* {lngs[lng].nativeName} */}
            </button>
          ))}
        </div>
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
