import { useEffect } from 'react';
import '../scss/main.scss'
//import react google analytics
import ReactGA from 'react-ga';
//import react router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import pages
import { Home } from '../pages/Home';
import { ProjectIndex } from '../pages/ProjectIndex';
import { ContactMe } from '../pages/ContactMe';
//smooth scroll
import SmoothScroll from "smooth-scroll";

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
  useEffect(() => {
    //initialize smooth scroll
    new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
      clip: true,
      easing: 'Linear',
      updateURL: true,
      popstate: true,
    });
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/projects" render={() => <ProjectIndex />} />
          <Route exact path="/contact-me" render={() => <ContactMe />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;