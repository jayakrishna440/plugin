import React, { Component } from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

import { connect } from 'react-redux';
import * as MeetingActions from '../../store/actions/meetings';
import TimePicker from '../TimePicker';
const currentDate = new Date();

@connect(
  state => ({ meetings: state.meetings }),
  { ...MeetingActions },
)

class Header extends Component {
  _onFormatDate = (date: Date): string => {
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear());
  };

  selectMeetingDate = (date): string => {
    const {setMeetingDate} = this.props;
    setMeetingDate(date)
  };
  meetingTypeSelected = (option): string=> {
    console.log(option.key)
  };

  render() {
    return (
        <div className="ms-Grid-row header-section">
          <div className="ms-Grid-col background-white ms-sm-2 margin-bottom-10">
              <DefaultButton iconProps={{ iconName: 'Mail' }}>SEND</DefaultButton>
          </div>
          <div className="ms-Grid-col ms-sm-10 margin-bottom-10">
            <Dropdown
              onChanged={this.meetingTypeSelected}
              defaultSelectedKey={'A'}
              options={[
                { key: 'A', text: 'Book a Meeting Room (*) ' },
                { key: 'B', text: 'Book Hall' },
                { key: 'D', text: 'Schedule Meeting' },
                { key: 'E', text: 'Book Conference' }
              ]}
            />
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2 margin-bottom-10">
            <DatePicker
              onSelectDate={this.selectMeetingDate}
              formatDate={this._onFormatDate}
              value={currentDate}
              isRequired={false}
              allowTextInput={false}
            />
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2 margin-bottom-10">
              <TimePicker type={'start'} />
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2 margin-bottom-10">
              <TimePicker type={'end'} />
          </div>
        </div>
    );
  }
}

export default Header;
