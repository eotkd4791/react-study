import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import HistorySample from './HistorySample';
import WithRouterSample from './WithRouterSample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/stef">stef 프로필</Link>
        </li>
        <li>
          <Link to="/profile/eden">eden 프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
        <li>
          <Link to="/">History 예제</Link>
        </li>
      </ul>
      < hr />
      <Route path="/" component={Home} exact={true}/>
      <Route path={['/about','/info']} component={About} />
      <Route path="/profile/:username" component={Profile} />
      <Route path="/history" component={HistorySample} />
      <Route path="/withrouter" component={WithRouterSample} />
    </div>
  );
};

export default App;