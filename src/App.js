import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
        <switch>
          <Route path="/watch-list">
            <WatchListPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <AuthPage />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
