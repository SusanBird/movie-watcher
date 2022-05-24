import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import WatchListPage from './WatchListPage';
import SearchPage from './SearchPage';
import AuthPage from './AuthPage';

function App() {
  return (
    <Router> 
      <div className="App">
        <Switch>
          <Route path="/watch-list">
            <WatchListPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <AuthPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
