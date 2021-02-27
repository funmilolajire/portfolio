import './App.scss';
//import react google analytics
import ReactGA from 'react-ga';
//import react router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import pages
import { Home } from '../pages/Home';
import { PortfolioIndex } from '../pages/PortfolioIndex';
import { PortfolioDetail } from '../pages/PortfolioDetail';
import { ContactMe } from '../pages/ContactMe';


//Google Analytics Start
// const { REACT_APP_GA_TRACKING_ID } = process.env;
const TRACKING_ID = "UA-190642802-1";
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
//Google Analytics End

function App() {
  return (
    <Router>
      <div style={{ color: "#33323D" }} className="px-40 bg-gray-50 App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/portfolio" render={() => <PortfolioIndex />} />
          <Route exact path="/portfolio/:project" render={() => <PortfolioDetail />} />
          <Route exact path="/contact-me" render={() => <ContactMe />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;