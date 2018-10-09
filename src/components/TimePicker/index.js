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
var endTime = ''
@connect(
  state => ({ meetings: state.meetings }),
  { ...MeetingActions },
)

export class TimePicker extends Component {
  
  timeSelected = (option): string => {
    const {setStartTime,setEndTime} = this.props;
    if(this.props.type == 'start'){
      time = option.key
      setStartTime(option.key)
      setEndTime(endTime)
    }else{
      setEndTime(option.key)
    }
  }
  _onRenderCaretDown = (props: IDropdownProps): JSX.Element => {
    return <Icon iconName="DateTime" />;
  };

  render() {
    const{type,meetings} = this.props
    var selectedTypeDate = new Date(meetings.meetingDate)
    selectedTypeDate = selectedTypeDate.setHours(0,0,0,0);
    var currentDate = new Date();
    currentDate = currentDate.setHours(0,0,0,0);
    var times = [
      { key: '12:00 AM', text: '12:00 AM', disabled: false},
      { key: '12:15 AM', text: '12:15 AM', disabled: false},
      { key: '12:30 AM', text: '12:30 AM', disabled: false},
      { key: '12:45 AM', text: '12:45 AM', disabled: false},
      { key: '1:00 AM', text: '1:00 AM', disabled: false},
      { key: '1:15 AM', text: '1:15 AM', disabled: false},
      { key: '1:30 AM', text: '1:30 AM', disabled: false},
      { key: '1:45 AM', text: '1:45 AM', disabled: false},
      { key: '2:00 AM', text: '2:00 AM', disabled: false},
      { key: '2:15 AM', text: '2:15 AM', disabled: false},
      { key: '2:30 AM', text: '2:30 AM', disabled: false},
      { key: '2:45 AM', text: '2:45 AM', disabled: false},
      { key: '3:00 AM', text: '3:00 AM', disabled: false},
      { key: '3:15 AM', text: '3:15 AM', disabled: false},
      { key: '3:30 AM', text: '3:30 AM', disabled: false},
      { key: '3:45 AM', text: '3:45 AM', disabled: false},
      { key: '4:00 AM', text: '4:00 AM', disabled: false},
      { key: '4:15 AM', text: '4:15 AM', disabled: false},
      { key: '4:30 AM', text: '4:30 AM', disabled: false},
      { key: '4:45 AM', text: '4:45 AM', disabled: false},
      { key: '5:00 AM', text: '5:00 AM', disabled: false},
      { key: '5:15 AM', text: '5:15 AM', disabled: false},
      { key: '5:30 AM', text: '5:30 AM', disabled: false},
      { key: '5:45 AM', text: '5:45 AM', disabled: false},
      { key: '6:00 AM', text: '6:00 AM', disabled: false},
      { key: '6:15 AM', text: '6:15 AM', disabled: false},
      { key: '6:30 AM', text: '6:30 AM', disabled: false},
      { key: '6:45 AM', text: '6:45 AM', disabled: false},
      { key: '7:00 AM', text: '7:00 AM', disabled: false},
      { key: '7:15 AM', text: '7:15 AM', disabled: false},
      { key: '7:30 AM', text: '7:30 AM', disabled: false},
      { key: '7:45 AM', text: '7:45 AM', disabled: false},
      { key: '8:00 AM', text: '8:00 AM', disabled: false},
      { key: '8:15 AM', text: '8:15 AM', disabled: false},
      { key: '8:30 AM', text: '8:30 AM', disabled: false},
      { key: '8:45 AM', text: '8:45 AM', disabled: false},
      { key: '9:00 AM', text: '9:00 AM', disabled: false},
      { key: '9:15 AM', text: '9:15 AM', disabled: false},
      { key: '9:30 AM', text: '9:30 AM', disabled: false},
      { key: '9:45 AM', text: '9:45 AM', disabled: false},
      { key: '10:00 AM', text: '10:00 AM', disabled: false},
      { key: '10:15 AM', text: '10:15 AM', disabled: false},
      { key: '10:30 AM', text: '10:30 AM', disabled: false},
      { key: '10:45 AM', text: '10:45 AM', disabled: false},
      { key: '11:00 AM', text: '11:00 AM', disabled: false},
      { key: '11:15 AM', text: '11:15 AM', disabled: false},
      { key: '11:30 AM', text: '11:30 AM', disabled: false},
      { key: '11:45 AM', text: '11:45 AM', disabled: false},
      { key: '12:00 PM', text: '12:00 PM', disabled: false},
      { key: '12:15 PM', text: '12:15 PM', disabled: false},
      { key: '12:30 PM', text: '12:30 PM', disabled: false},
      { key: '12:45 PM', text: '12:45 PM', disabled: false},
      { key: '1:00 PM', text: '1:00 PM', disabled: false},
      { key: '1:15 PM', text: '1:15 PM', disabled: false},
      { key: '1:30 PM', text: '1:30 PM', disabled: false},
      { key: '1:45 PM', text: '1:45 PM', disabled: false},
      { key: '2:00 PM', text: '2:00 PM', disabled: false},
      { key: '2:15 PM', text: '2:15 PM', disabled: false},
      { key: '2:30 PM', text: '2:30 PM', disabled: false},
      { key: '2:45 PM', text: '2:45 PM', disabled: false},
      { key: '3:00 PM', text: '3:00 PM', disabled: false},
      { key: '3:15 PM', text: '3:15 PM', disabled: false},
      { key: '3:30 PM', text: '3:30 PM', disabled: false},
      { key: '3:45 PM', text: '3:45 PM', disabled: false},
      { key: '4:00 PM', text: '4:00 PM', disabled: false},
      { key: '4:15 PM', text: '4:15 PM', disabled: false},
      { key: '4:30 PM', text: '4:30 PM', disabled: false},
      { key: '4:45 PM', text: '4:45 PM', disabled: false},
      { key: '5:00 PM', text: '5:00 PM', disabled: false},
      { key: '5:15 PM', text: '5:15 PM', disabled: false},
      { key: '5:30 PM', text: '5:30 PM', disabled: false},
      { key: '5:45 PM', text: '5:45 PM', disabled: false},
      { key: '6:00 PM', text: '6:00 PM', disabled: false},
      { key: '6:15 PM', text: '6:15 PM', disabled: false},
      { key: '6:30 PM', text: '6:30 PM', disabled: false},
      { key: '6:45 PM', text: '6:45 PM', disabled: false},
      { key: '7:00 PM', text: '7:00 PM', disabled: false},
      { key: '7:15 PM', text: '7:15 PM', disabled: false},
      { key: '7:30 PM', text: '7:30 PM', disabled: false},
      { key: '7:45 PM', text: '7:45 PM', disabled: false},
      { key: '8:00 PM', text: '8:00 PM', disabled: false},
      { key: '8:15 PM', text: '8:15 PM', disabled: false},
      { key: '8:30 PM', text: '8:30 PM', disabled: false},
      { key: '8:45 PM', text: '8:45 PM', disabled: false},
      { key: '9:00 PM', text: '9:00 PM', disabled: false},
      { key: '9:15 PM', text: '9:15 PM', disabled: false},
      { key: '9:30 PM', text: '9:30 PM', disabled: false},
      { key: '9:45 PM', text: '9:45 PM', disabled: false},
      { key: '10:00 PM', text: '10:00 PM', disabled: false},
      { key: '10:15 PM', text: '10:15 PM', disabled: false},
      { key: '10:30 PM', text: '10:30 PM', disabled: false},
      { key: '10:45 PM', text: '10:45 PM', disabled: false},
      { key: '11:00 PM', text: '11:00 PM', disabled: false},
      { key: '11:15 PM', text: '11:15 PM', disabled: false},
      { key: '11:30 PM', text: '11:30 PM', disabled: false},
      { key: '11:45 PM', text: '11:45 PM', disabled: false}
    ];
    if(currentDate == selectedTypeDate) {
      var i = 0 ;
      var length = times.length;

      for(;i< length;i++) {
        if(times[i].key == time) {
          break;
        } else {
          times[i].disabled = true
          if(type == 'end') {
            if(i+1 >= times.length){
              
            }else {
              times[i+1].disabled = true
            }
           
          }
        }
      }
      if(type == 'end' && meetings.endTime == '') {
        if(meetings.startTime !== '') {
          i = 0;
          for(;i< length;i++) {
            if(times[i].key == meetings.startTime) {
              times[i].disabled = true
              if(i+1 >= times.length){
                time = times[0].key;
              }else {
                time = times[i+1].key;
              }
              break;
            }else {
              times[i].disabled = true
            }
          }
        }else {
          if(i+1 >= times.length){
            time = times[0].key;
          }else {
            time = times[i+1].key;
          }
        }
       // endTime = time;
      }else if(type == 'end'){
        time = meetings.endTime
      }
    } else {
      var i = 0 ;
      var length = times.length;
      for(;i< length;i++) {
        if(times[i].key == time) {
          break;
        }
      }
      if(meetings.startTime !== '') {
        time = meetings.startTime;
      }
      if(type == 'end' && meetings.endTime == '') {
        if(meetings.startTime !== '') {
          i = 0;
          for(;i< length;i++) {
            if(times[i].key == meetings.startTime) {
              times[i].disabled = true
              if(i+1 >= times.length){
                time = times[0].key;
              }else {
                time = times[i+1].key;
              }
              break;
            }else {
              times[i].disabled = true
            }
          }
        }else {
          if(i+1 >= times.length){
            time = times[0].key;
          }else {
            time = times[i+1].key;
          }
        }
        //endTime = time;
      }else if(type == 'end'){
        time = meetings.endTime
      }
    }
    return (
        <Dropdown
          selectedKey={time}
          id="TimePicker"
          className="time-picker"
          onChanged={this.timeSelected}
          onRenderCaretDown={this._onRenderCaretDown}
          options={times}
        />
    );
  }
}

export default TimePicker;
