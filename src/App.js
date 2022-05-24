import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import WatchListPage from './WatchListPage';
import SearchPage from './SearchPage';
import AuthPage from './AuthPage';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  
  return (
    <Router> 
      <div className="App">
        <Switch>
          <Route exact path="/watch-list">
            {currentUser ? <WatchListPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/search">
            {currentUser ? <SearchPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            {currentUser ? <Redirect to="/search" /> : <AuthPage setCurrentUser={setCurrentUser} />}          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
