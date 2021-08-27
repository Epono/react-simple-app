import { Flags } from "./components/flags/Flags";
import { Header } from "./components/header/Header.js";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
  createStyles,
} from "@material-ui/core/styles";
import { Routing } from "./components/routing/Routing";

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Routing>
          <Header></Header>
          <Flags></Flags>
        </Routing>
      </div>
    </ThemeProvider>
  );
}

export default App;

// better markdown, authors  to grab,
// try not to fetch and use markdown package to do it
// use MaterialUI to finally make it pretty
// add a way to write/edit/delete articles
