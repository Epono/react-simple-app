import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

// const ARTICLES_PATH = "../../articles";
export const Article = ({ onBackButtonClicked, article }) => {
  const { t } = useTranslation();
  const [fileArticle, setFileArticle] = useState("");

  useEffect(() => {
    // const path = `${ARTICLES_PATH}/${article.path}`;
    // const path2 = `../../articles/${article.path}`;
    // console.log(path);
    // console.log(path2);
    import(`../../articles/${article.path}`).then((res) => {
      fetch(res.default)
        .then((data) => data.text())
        .then((text) => {
          setFileArticle(text);
        });
    });
  }, [article]);

  return (
    <div>
      <button onClick={onBackButtonClicked}>Back</button>
      <p>{article.author}</p>
      <ReactMarkdown>{fileArticle}</ReactMarkdown>
      <p>{article.date}</p>
    </div>
  );
};
