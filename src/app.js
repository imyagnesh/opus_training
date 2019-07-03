import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Home from './screens/Home';
// import About from './screens/About';
// import Details from './screens/Details';

const AsyncHome = lazy(() => import('./screens/Home'));
const AsyncAbout = lazy(() => import('./screens/About'));
const AsyncDetails = lazy(() => import('./screens/Details'));

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/details/">Users</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading....</div>}>
          <Route path="/" exact component={AsyncHome} />
          <Route path="/about/" component={AsyncAbout} />
          <Route path="/details/" component={AsyncDetails} />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
