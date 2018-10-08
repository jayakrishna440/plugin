import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as MeetingActions from '../../store/actions/meetings';
import { Link } from 'react-router-dom';
@connect(
  state => ({ meetings: state.meetings }),
  { ...MeetingActions },
)

export class NavBar extends Component {

  render() {
    return (
        <div className="ms-Grid-row background-blue">
            <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 selectedTab padding-20">
            List View
            </div>
            <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 padding-20 color-white">
            <Link to="/scheduleview" className="link">Schedule View</Link>
            </div>
            <div className="ms-Grid-col ms-sm5 ms-md5 ms-lg5 padding-20 color-white">
            Additional Information
            </div>
            <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3 padding-20 color-white text-right">
            Selected Locations (0)
            </div>
        </div>
    );
  }
}

export default NavBar;
