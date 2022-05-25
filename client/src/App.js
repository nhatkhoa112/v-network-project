import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageRender from './Components/customRouter/PageRender';
import PrivateRouter from './Components/customRouter/PrivateRouter';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <>
      <input type="checkbox" id="theme" />

      <div className="App">
        <div className="main">
          <Switch>
            <Route exact path="/home" component={Home} />
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
