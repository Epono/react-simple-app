import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { articles } from "../../articles/articles";
import { Link, Redirect } from "react-router-dom";

export const Article = ({ onBackButtonClicked }) => {
  const { t } = useTranslation();
  const [fileArticle, setFileArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const { articleId } = useParams();

  const article = articles.find(
    (article) => article.id === parseInt(articleId)
  );

  import(`../../articles/${article.path}`)
    .then((res) => {
      fetch(res.default)
        .then((data) => data.text())
        .then((text) => {
          setFileArticle(text);
        });
    })
    .catch((error) => {
      setShouldRedirect(true);
    })
    .finally(() => {
      setLoading(false);
    });

  if (loading) return <div> Loading...</div>;
  if (shouldRedirect) return <Redirect to="/404" />;

  return (
    <div>
      <Link to="/">{t("articles.back")}</Link>
      {fileArticle && (
        <div className="article-content">
          <h3>
            {article.author}, {article.date}
          </h3>
          <ReactMarkdown>{fileArticle}</ReactMarkdown>
        </div>
      )}
      {!fileArticle && <div>{t("articles.not_found")}</div>}
    </div>
  );
};
