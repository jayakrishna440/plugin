import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as MeetingActions from '../../store/actions/meetings';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

@connect(
  state => ({ meetings: state.meetings }),
  { ...MeetingActions },
)

export class Filters extends Component {

  render() {
    return (
        <div className="ms-Grid-row height-100">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 filter-section">

          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3 selectedTab top-btns location margin-bottom-20">
              <DefaultButton>
                <i className="ms-Icon ms-Icon--Filter padding-right-5 location-icon" aria-hidden="true"></i> 
                Location Filter
              </DefaultButton>
            </div>

            <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 selectedTab top-btns clearall margin-bottom-20">
              <DefaultButton>
                <i className="ms-Icon ms-Icon--ChromeClose padding-right-5 close-icon" aria-hidden="true"></i> 
                Clear All
              </DefaultButton>
            </div>

            <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 selectedTab top-btns capacity margin-bottom-20">
              <DefaultButton>
                Capacity <i className="ms-Icon ms-Icon--ChromeClose padding-right-5 padding-left-5 close-icon" aria-hidden="true"></i> 
               
              </DefaultButton>
            </div>

            <div className="ms-Grid-cols selectedTab margin-bottom-10 locationBtn background-white">
              <DefaultButton>
                Location 
              </DefaultButton>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Filters;
