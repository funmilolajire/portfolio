import './App.scss';
import GA from '../../utils/GoogleAnalytics';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      { GA.init() && <GA.RouteTracker />}
      <Switch>
        <Route exact path="/" render={() => <div className="App">Hello World</div>} />
      </Switch>
    </Router>
  )
}

export default App;