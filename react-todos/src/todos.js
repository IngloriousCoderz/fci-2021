import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const SingleComponentTodos = React.lazy(() =>
  import("./single-component-todos")
);
const StylingTodos = React.lazy(() => import("./styling-todos"));

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/single-component">Single Component</Link>
            </li>
            <li>
              <Link to="/styling">Styling</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/single-component">
          <Suspense fallback={<div>Loading...</div>}>
            <SingleComponentTodos />
          </Suspense>
        </Route>
        <Route path="/styling">
          <Suspense fallback={<div>Loading...</div>}>
            <StylingTodos />
          </Suspense>
        </Route>
      </Switch>

      <footer>&copy; Copyright 2021 Inglorious Coderz</footer>
    </Router>
  );
}

export default App;
