export const SET_START_TIME = 'SET_START_TIME';
export const SET_END_TIME = 'SET_END_TIME';
export const SET_MEETING_DATE = 'SET_MEETING_DATE';
export const SET_MEETING_TYPE = 'SET_MEETING_TYPE';

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
