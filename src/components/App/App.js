import './App.scss';
import ReactGA from 'react-ga';
// import GA from '../../utils/GoogleAnalytics';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const TRACKING_ID = "UA-190642802-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID, {
  debug: true,
  titleCase: false,
  gaOptions: {
    // userId: 123,
    siteSpeedSampleRate: 100
  }
});
ReactGA.pageview(window.location.pathname + window.location.search);

ReactGA.event({
  category: 'User',
  action: 'Created an Account'
});

ReactGA.exception({
  description: 'An error ocurred',
  fatal: true
});

function App() {
  return (
    <Router>
      {/* { GA.init() && <GA.RouteTracker />} */}
      <Switch>
        <Route exact path="/" render={() => <div className="App">Hello World</div>} />
      </Switch>
    </Router>
  )
}

export default App;