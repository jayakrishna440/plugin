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
    const {meetings,type} = this.props;
    let listViewClass = 'ms-Grid-col ms-sm2 ms-md2 ms-lg2 padding-20 color-black';
    let scheduleViewClass = 'ms-Grid-col ms-sm2 ms-md2 ms-lg2 padding-20 color-black'
    if(type == 'list') {
      listViewClass = listViewClass + ' selectedTab'
    }else {
      scheduleViewClass = scheduleViewClass + ' selectedTab'
    }
    return (
        <div className="ms-Grid-row background-blue">
            <div className={listViewClass} style={{padding:'10px'}}>
              <Link to="/" className="link">List View</Link>
            </div>
            <div className={scheduleViewClass} style={{padding:'10px'}}>
              <Link to="/scheduleview" className="link">Schedule View</Link>
            </div>
            <div className="ms-Grid-col ms-sm5 ms-md5 ms-lg5 padding-20 color-white" style={{padding:'10px'}}>
              Additional Information
            </div>
            <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3 padding-20 color-white text-right" style={{padding:'10px'}}>
              Selected Locations ({meetings.locations_count})
            </div>
        </div>
    );
  }
}

export default NavBar;
