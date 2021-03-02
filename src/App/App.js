import './App.scss';
//import react google analytics
import ReactGA from 'react-ga';
//import react router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import pages
import { Home } from '../pages/Home';
import { ProjectIndex } from '../pages/ProjectIndex';
import { ProjectDetail } from '../pages/ProjectDetail';
import { ContactMe } from '../pages/ContactMe';
//smooth scroll
import SmoothScroll from "smooth-scroll";

//import checka11y.css
// import 'checka11y-css'; //TODO: remove before merging with production

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

//initialize smooth scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  clip: true,
  easing: 'Linear',
  ignore: '[data-scroll-ignore]',
  updateURL: true,
  popstate: true,
});


function App() {
  return (
    <Router>
      <div style={{ scrollPaddingTop: '2rem' }} className="px-40 text-gdb bg-gray-50 App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/projects" render={() => <ProjectIndex />} />
          <Route exact path="/projects/:project" render={() => <ProjectDetail />} />
          <Route exact path="/contact-me" render={() => <ContactMe />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;