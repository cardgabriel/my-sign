import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HoroscopoFlow from "./components/HoroscopoFlow";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HoroscopoFlow />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
