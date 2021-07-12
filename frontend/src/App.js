import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProductsListPage from './containers/ProductsListPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:slug" component={ProductsListPage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
