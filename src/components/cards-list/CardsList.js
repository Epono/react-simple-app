import { ArticleCard } from "../article-card/ArticleCard.js";
import Box from "@material-ui/core/Box";
import { GRID_UNIT } from "../../constants.js";
import { makeStyles } from "@material-ui/core/styles";
import { articles } from "../../articles/articles";

const useStyles = makeStyles({
  root: {
    padding: GRID_UNIT * 2,
  },
});

export const CardsList = () => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-around" flexWrap="wrap">
      {articles.map((article) => (
        <Box width={300} className={classes.root} key={article.id}>
          <ArticleCard
            author={article.author}
            title={article.title}
            description={article.description}
            date={article.date}
            articleId={article.id}
          />
        </Box>
      ))}
    </Box>
  );
};
