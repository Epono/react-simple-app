import { ArticleCard } from "../article-card/ArticleCard.js";
import Box from "@material-ui/core/Box";
import { GRID_UNIT } from "../../constants.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: GRID_UNIT * 2,
  },
});

export const CardsList = ({ articles, onArticleClick }) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-around" flexWrap="wrap">
      {articles.map((article) => (
        <Box
          width={300}
          className={classes.root}
          key={article.id}
          onClick={() => onArticleClick(article.id)}
        >
          <ArticleCard
            author={article.author}
            title={article.title}
            description={article.description}
            date={article.date}
          />
        </Box>
      ))}
    </Box>
  );
};
