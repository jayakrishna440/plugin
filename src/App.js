import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import ScheduleView from './containers/ScheduleView';
import './index.css';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric'

export default () => (
  <Router>
    <Fabric className="App ms-Fabric">
      <Route exact path="/" component={Home} />
      <Route exact path="/scheduleview" component={ScheduleView} />
      </Fabric>
  </Router>
);
