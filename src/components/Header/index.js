import React, { Component } from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

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
  }

  render() {
    const { meetings,
    } = this.props;
    console.log(meetings)
    return (
        <div className="ms-Grid-row header-section">
          <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2 background-white">
              <DefaultButton iconProps={{ iconName: 'Mail' }}>SEND</DefaultButton>
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
            <Dropdown
              onChange={this.meetingTypeSelected}
              defaultSelectedKey={'A'}
              options={[
                { key: 'A', text: 'Book a Meeting Room (*) ' },
                { key: 'B', text: 'Book Hall' },
                { key: 'D', text: 'Schedule Meeting' },
                { key: 'E', text: 'Book Conference' }
              ]}
            />
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2">
            <DatePicker
              onSelectDate={this.selectMeetingDate}
              formatDate={this._onFormatDate}
              value={currentDate}
              isRequired={false}
              allowTextInput={false}
            />
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2">
              <TimePicker/>
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2">
              <TimePicker/>
          </div>
        </div>
    );
  }
}

export default Header;
