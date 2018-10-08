import { SET_START_TIME, SET_END_TIME,SET_MEETING_DATE,SET_MEETING_TYPE } from '../actions/meetings';

export default function (state = {meetingType:'',startTime:'',endTime:'',meetingDate:''}, action) {
  switch (action.type) {
    case SET_START_TIME:
    return {
      ...state,
      startTime: action.time
    }
    case SET_END_TIME:
      return {
        ...state,
        endTime: action.time
      }
    case SET_MEETING_DATE:
      return {
        ...state,
        meetingDate: action.date
      }
    case SET_MEETING_TYPE:
      return {
        ...state,
        meetingType: action.meeting_type
      }
    default:
      return state;
  }
}
