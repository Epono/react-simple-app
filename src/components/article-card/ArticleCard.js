import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "green",
    color: (props) => props.color,
  },
});

export const ArticleCard = ({
  title,
  description,
  author,
  date,
  articleId,
  ...props
}) => {
  const classes = useStyles(props);
  const { t } = useTranslation();

  const FancyLink = React.forwardRef((props, ref) => (
    // <a ref={ref} {...props}>
    //   💅 {props.children}
    // </a>
    // <CardActions >
    <Button ref={ref} {...props} size="small">
      {t("articles.learn_more")}
    </Button>
    // </CardActions>
  ));

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {author}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">{description}</Typography>
        <Typography variant="body2" component="p">
          {date}
        </Typography>
      </CardContent>

      <Link to={`/article/${articleId}`}>{t("articles.learn_more")}</Link>

      <CardActions>
        <Link to={`/article/${articleId}`} component={FancyLink} />
      </CardActions>
    </Card>
  );
};
