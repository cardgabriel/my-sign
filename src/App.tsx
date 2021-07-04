import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./auth/auth";
import Home from "./pages/Home";
import HoroscopoFlow from "./pages/HoroscopoFlow";

const App: React.FC = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default App;
