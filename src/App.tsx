import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "routes/app.routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} exact={route.exact}>
            <route.page />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
