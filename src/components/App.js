// import React from 'react';
// import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// import Home from './Home';
// import DynamicPage from './DynamicPage';
// import NoMatch from './NoMatch';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/dynamic" component={DynamicPage} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import Loading from './Loading';

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
  {
    LoadingComponent: Loading
  }
);
// import Routes from "../routes"

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPAge} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
      {/* <Routes/> */}
    </Router>
  );
};

export default App;