import React, { Component } from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

import { connect } from 'react-redux';
import * as MeetingActions from '../../store/actions/meetings';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

var hours = new Date().getHours();
var ampm = (hours >= 12) ? "PM" : "AM";
if(hours===13){
  hours = 1
}
if(hours===14){
  hours = 2
}
if(hours===15){
  hours = 3
}
if(hours===16){
  hours = 4
}
if(hours===17){
  hours = 5
}
if(hours===17){
  hours = 5
}
if(hours===18){
  hours = 6
}
if(hours===19){
  hours = 7
}
if(hours===20){
  hours = 8
}
if(hours===21){
  hours = 9
}
if(hours===22){
  hours = 10
}
if(hours===23){
  hours = 11
}
if(hours===24){
  hours = 12
}
var time = hours+":00 "+ampm

@connect(
  state => ({ meetings: state.meetings }),
  { ...MeetingActions },
)

export class TimePicker extends Component {
  
  startTimeSelected = (option): string=> {
    console.log(option.key)
  }
  endTimeSelected = (option): string=> {
    console.log(option.key)
  }
  _onRenderCaretDown = (props: IDropdownProps): JSX.Element => {
    return <Icon iconName="DateTime" />;
  };

  render() {
    return (
        <Dropdown
          selectedKey={time}
          id="TimePicker"
          className="time-picker"
          onChange={this.startTimeSelected}
          onRenderCaretDown={this._onRenderCaretDown}
          options={[
            { key: '12:00 AM', text: '12:00 AM'},
            { key: '12:15 AM', text: '12:15 AM'},
            { key: '12:30 AM', text: '12:30 AM'},
            { key: '12:45 AM', text: '12:45 AM'},
            { key: '1:00 AM', text: '1:00 AM'},
            { key: '1:15 AM', text: '1:15 AM'},
            { key: '1:30 AM', text: '1:30 AM'},
            { key: '1:45 AM', text: '1:45 AM'},
            { key: '2:00 AM', text: '2:00 AM'},
            { key: '2:15 AM', text: '2:15 AM'},
            { key: '2:30 AM', text: '2:30 AM'},
            { key: '2:45 AM', text: '2:45 AM'},
            { key: '3:00 AM', text: '3:00 AM'},
            { key: '3:15 AM', text: '3:15 AM'},
            { key: '3:30 AM', text: '3:30 AM'},
            { key: '3:45 AM', text: '3:45 AM'},
            { key: '4:00 AM', text: '4:00 AM'},
            { key: '4:15 AM', text: '4:15 AM'},
            { key: '4:30 AM', text: '4:30 AM'},
            { key: '4:45 AM', text: '4:45 AM'},
            { key: '5:00 AM', text: '5:00 AM'},
            { key: '5:15 AM', text: '5:15 AM'},
            { key: '5:30 AM', text: '5:30 AM'},
            { key: '5:45 AM', text: '5:45 AM'},
            { key: '6:00 AM', text: '6:00 AM'},
            { key: '6:15 AM', text: '6:15 AM'},
            { key: '6:30 AM', text: '6:30 AM'},
            { key: '6:45 AM', text: '6:45 AM'},
            { key: '7:00 AM', text: '7:00 AM'},
            { key: '7:15 AM', text: '7:15 AM'},
            { key: '7:30 AM', text: '7:30 AM'},
            { key: '7:45 AM', text: '7:45 AM'},
            { key: '8:00 AM', text: '8:00 AM'},
            { key: '8:15 AM', text: '8:15 AM'},
            { key: '8:30 AM', text: '8:30 AM'},
            { key: '8:45 AM', text: '8:45 AM'},
            { key: '9:00 AM', text: '9:00 AM'},
            { key: '9:15 AM', text: '9:15 AM'},
            { key: '9:30 AM', text: '9:30 AM'},
            { key: '9:45 AM', text: '9:45 AM'},
            { key: '10:00 AM', text: '10:00 AM'},
            { key: '10:15 AM', text: '10:15 AM'},
            { key: '10:30 AM', text: '10:30 AM'},
            { key: '10:45 AM', text: '10:45 AM'},
            { key: '11:00 AM', text: '11:00 AM'},
            { key: '11:15 AM', text: '11:15 AM'},
            { key: '11:30 AM', text: '11:30 AM'},
            { key: '11:45 AM', text: '11:45 AM'},
            { key: '12:00 PM', text: '12:00 PM'},
            { key: '12:15 PM', text: '12:15 PM'},
            { key: '12:30 PM', text: '12:30 PM'},
            { key: '12:45 PM', text: '12:45 PM'},
            { key: '1:00 PM', text: '1:00 PM'},
            { key: '1:15 PM', text: '1:15 PM'},
            { key: '1:30 PM', text: '1:30 PM'},
            { key: '1:45 PM', text: '1:45 PM'},
            { key: '2:00 PM', text: '2:00 PM'},
            { key: '2:15 PM', text: '2:15 PM'},
            { key: '2:30 PM', text: '2:30 PM'},
            { key: '2:45 PM', text: '2:45 PM'},
            { key: '3:00 PM', text: '3:00 PM'},
            { key: '3:15 PM', text: '3:15 PM'},
            { key: '3:30 PM', text: '3:30 PM'},
            { key: '3:45 PM', text: '3:45 PM'},
            { key: '4:00 PM', text: '4:00 PM'},
            { key: '4:15 PM', text: '4:15 PM'},
            { key: '4:30 PM', text: '4:30 PM'},
            { key: '4:45 PM', text: '4:45 PM'},
            { key: '5:00 PM', text: '5:00 PM'},
            { key: '5:15 PM', text: '5:15 PM'},
            { key: '5:30 PM', text: '5:30 PM'},
            { key: '5:45 PM', text: '5:45 PM'},
            { key: '6:00 PM', text: '6:00 PM'},
            { key: '6:15 PM', text: '6:15 PM'},
            { key: '6:30 PM', text: '6:30 PM'},
            { key: '6:45 PM', text: '6:45 PM'},
            { key: '7:00 PM', text: '7:00 PM'},
            { key: '7:15 PM', text: '7:15 PM'},
            { key: '7:30 PM', text: '7:30 PM'},
            { key: '7:45 PM', text: '7:45 PM'},
            { key: '8:00 PM', text: '8:00 PM'},
            { key: '8:15 PM', text: '8:15 PM'},
            { key: '8:30 PM', text: '8:30 PM'},
            { key: '8:45 PM', text: '8:45 PM'},
            { key: '9:00 PM', text: '9:00 PM'},
            { key: '9:15 PM', text: '9:15 PM'},
            { key: '9:30 PM', text: '9:30 PM'},
            { key: '9:45 PM', text: '9:45 PM'},
            { key: '10:00 PM', text: '10:00 PM'},
            { key: '10:15 PM', text: '10:15 PM'},
            { key: '10:30 PM', text: '10:30 PM'},
            { key: '10:45 PM', text: '10:45 PM'},
            { key: '11:00 PM', text: '11:00 PM'},
            { key: '11:15 PM', text: '11:15 PM'},
            { key: '11:30 PM', text: '11:30 PM'},
            { key: '11:45 PM', text: '11:45 PM'}
          ]}
        />
    );
  }
}

export default TimePicker;
