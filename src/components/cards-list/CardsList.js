import { ArticleCard } from '../article-card/ArticleCard.js';
import Box from '@material-ui/core/Box';
import { unsupportedProp } from '@material-ui/core';


export const CardsList = ({ articles }) => {

  return (
    <Box display="flex" justifyContent="space-around" flexWrap="wrap">
      {articles.map((article) =>
        <Box width={300}>
          <ArticleCard
            author={article.author}
            title={article.title}
            description={article.description}
            date={article.date}
          />
        </Box>
      )}
    </Box>
  )
}
