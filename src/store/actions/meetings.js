export const SET_START_TIME = 'SET_START_TIME';
export const SET_END_TIME = 'SET_END_TIME';
export const SET_MEETING_DATE = 'SET_MEETING_DATE';
export const SET_MEETING_TYPE = 'SET_MEETING_TYPE';
export const SET_SELECTED_LOCATIONS = 'SET_SELECTED_LOCATIONS';
export const SET_SELECTION = 'SET_SELECTION';

export function setStartTime(time) {
  return {
    type: SET_START_TIME,
    time: time
  };
}
export function setEndTime(time) {
  return {
    type: SET_END_TIME,
    time: time
  };
}
export function setMeetingDate(date) {
    return {
      type: SET_MEETING_DATE,
      date: date
    };
}
export function setMeetingType(mtype) {
  return {
      type: SET_MEETING_TYPE,
      meeting_type: mtype
  };
}
export function setSelection(mtype) {
  return {
      type: SET_SELECTION,
      selection: mtype
  };
}
export function setSelectedLocations(mtype,count) {
  return {
      type: SET_SELECTED_LOCATIONS,
      meeting_locations: mtype,
      locations_count: count
  };
}

