import { useTranslation } from "react-i18next";

export const Article = ({ onBackButtonClicked, article }) => {
  const { t } = useTranslation();

  return (
    <div>
      <button onClick={onBackButtonClicked}>Back</button>
      <p>{article.author}</p>
      <p>{article.title}</p>
      <p>{article.description}</p>
      <p>{article.date}</p>
    </div>
  );
};
