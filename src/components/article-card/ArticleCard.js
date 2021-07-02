import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    backgroundColor: "green",
    color: (props) => props.color,
  },
});

export const ArticleCard = ({ title, description, author, date, ...props }) => {
  const classes = useStyles(props);
  const { t } = useTranslation();

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
      <CardActions>
        <Button size="small">{t("articles.learn_more")}</Button>
      </CardActions>
    </Card>
  );
};
