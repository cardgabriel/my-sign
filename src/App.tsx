import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import HoroscopoFlow from "./pages/HoroscopoFlow";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/stepper">
          <HoroscopoFlow />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
