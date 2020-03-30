import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TopNav from "../src/Components/TopNav"
import home from "../src/Pages/home"
import noMatch from "../src/Pages/noMatch"
import MainFooter from "../src/Components/MainFooter"
import about from "../src/Pages/about"
import legalVideography from "../src/Pages/legalVideography"
import courtReporters from "../src/Pages/courtReporters"
import siteInspection from "../src/Pages/siteInspections"
import equipmentRental from "../src/Pages/equipmentRental"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHeart,  } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faHeart, )
  

function App() {
  return (
    <Fragment>
    <TopNav />
    
      <Router>
        <Switch>
          <Route exact        path="/"                   component={home} />
          <Route              path="/about"              component={about} />
          <Route              path="/legalVideography"   component={legalVideography} />
          <Route              path="/courtReporters"     component={courtReporters} />
          <Route              path="/siteInspection"     component={siteInspection} />
          <Route              path="/equipmentRental"    component={equipmentRental} />
          <Route component={noMatch} />
        </Switch>
      </Router>
    
    <MainFooter />
    </Fragment>
  );
}

export default App;
