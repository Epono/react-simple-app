import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CardsList } from "../../components/cards-list/CardsList.js";
import { Article } from "../../components/article/Article.js";

export const Routing = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Route path="/about">
          <OurStory />
        </Route>
        <Route path="/article/:articleId">
          <Article />
        </Route>
        <Route path="/404">
          <PageNotFound />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

function Home() {
  return <CardsList />;
}

function PageNotFound() {
  return <div style={{ textAlign: "center" }}>404</div>;
}

function OurStory() {
  return <h2>OurStory</h2>;
}
