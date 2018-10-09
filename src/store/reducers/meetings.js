import { SET_START_TIME, SET_END_TIME,SET_MEETING_DATE,SET_MEETING_TYPE,SET_SELECTED_LOCATIONS } from '../actions/meetings';

export default function (state = {selected_locations:[],locations_count:0,meetingType:'',startTime:'',endTime:'',meetingDate:new Date().toString()}, action) {
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
        meetingDate: action.date,
        startTime: '7:00 AM'
      }
    case SET_MEETING_TYPE:
      return {
        ...state,
        meetingType: action.meeting_type
      }
    case SET_SELECTED_LOCATIONS:
      return {
        ...state,
        selected_locations: action.meeting_locations,
        locations_count: action.locations_count
      }
    default:
      return state;
  }
}
