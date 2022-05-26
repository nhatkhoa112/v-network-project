import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { refreshToken } from './redux/actions/authAction';
import PageRender from './Components/customRouter/PageRender';
import PrivateRouter from './Components/customRouter/PrivateRouter';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

import Alert from './Components/alert/Alert';

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <>
      <Alert />
      <input type="checkbox" id="theme" />

      <div className="App">
        <div className="main">
          <Switch>
            <Route exact path="/" component={auth.token ? Home : Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <PrivateRouter exact path="/:page" component={PageRender} />
            <PrivateRouter exact path="/:page/:id" component={PageRender} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
