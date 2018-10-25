import React, { Component } from 'react';
import { initializeIcons } from '@uifabric/icons';
import { connect } from 'react-redux';
import * as MeetingActions from '../../store/actions/meetings';
import NavBar from '../../components/NavBar';
import Filters from '../../components/Filters';
import Autocomplete from "../../components/Autocomplete";
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

initializeIcons();

let attendiesData = [
    {
        id:1,
        attendee_name:'John',
        events: [
            {id:1234,
                start_time: '7:00 AM',
                end_time: '8:15 AM'
            },
            {id:143,
                start_time: '10:15 AM',
                end_time: '10:45 AM'
            }
        ]
    },
    {
        id:2,
        attendee_name:'Jason',
        events: [
            {id:1665,
                start_time: '11:00 AM',
                end_time: '1:15 PM'
            },
            {id:199,
                start_time: '9:15 AM',
                end_time: '10:15 AM'
            }
        ]
    }
]

let schedulesData = [
    {
        id:1,
        room_name:'Conference Room',
        events: [
            {
                start_time: '10:15',
                end_time: '10:45',
                name: 'Eshwar Prasad'
            },
            {
                start_time: '7:00',
                end_time: '8:15',
                name: 'John Mathew'
            }
        ]
    },
    {
        id:2,
        room_name:'Delta Conference Room',
        events: [
            {
                start_time: '11:00',
                end_time: '13:15',
                name: 'Jason'
            },
            {
                start_time: '9:15',
                end_time: '10:15',
                name: 'Hela'
            }
        ]
    }
]

var calculateMin = function(start,end) {
    var startTime = new Date('2018-11-09 '+start); 
    var endTime = new Date('2018-11-09 '+end); 
    var difference = endTime.getTime() - startTime.getTime();
    var resultInMinutes = Math.round(difference / 60000);
    return resultInMinutes
}
var getHours = function(start,end) {
    var startTime = new Date('2018-11-09 '+start); 
    var endTime = new Date('2018-11-09 '+end); 
    var diff = endTime.valueOf() - startTime.valueOf();
    var diffInHours = (diff/1000/60/60); 
    return diffInHours

} 

function convertTime12to24(time12h) {
    const [time, modifier] = time12h.split(' ');
  
    let [hours, minutes] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
  
    return hours + ':' + minutes;
  }
  

@connect(
  state => ({ meetings: state.meetings }),
  { ...MeetingActions },
)

class ScheduleView extends Component {

  constructor(props) {
    super(props);
    this._onCheckboxChange = this._onCheckboxChange.bind(this);
    this.state = {
        showAttendees: true
    }
  }

  componentDidMount() {
  }

  _onCheckboxChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean): void {
    console.log(`The option has been changed to ${isChecked}.`);
    this.setState({showAttendees:isChecked})
  }

  render() {  
    var scheduleHoursCss = {
        width:'2880px',
        borderBottom: '1px solid #ccc'
    };
    let hoursDiv = <div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>12 AM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>1 AM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>2 AM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>3 AM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>4 AM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>5 AM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>6 AM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>7 AM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>8 AM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>9 AM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>10 AM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>11 AM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>12 PM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>1 PM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>2 PM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>3 PM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>4 PM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>5 PM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>6 PM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>7 PM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>8 PM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>9 PM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>10 PM</div>
                        <div style={{background:'#f4f4f4',borderRight:'1px solid #ccc',width:'119px',float:'left',height:'39px',lineHeight:'39px'}}>11 PM</div>
                    </div>;

    

    let attendees = attendiesData.map(function(data){return <div key={data.id} className='schedules' style={{borderBottom:'0.5px solid #f4f4f4',borderRight:'1px solid #ccc'}}>{data.attendee_name}</div>});
    let autocomplete =   <div key="222222222222" style={{height:'60px',borderRight:'1px solid #ccc'}}>
                            <Autocomplete
                                    suggestions={[
                                    "Alligator",
                                    "Bask",
                                    "Crocodilian",
                                    "Death Roll",
                                    "Eggs",
                                    "Jaws",
                                    "Reptile",
                                    "Solitary",
                                    "Tail",
                                    "Wetlands"
                                    ]}
                                />
                            </div>
    attendees.push(autocomplete)                       
    let resources = schedulesData.map(function(data){return <div key={data.id} className='schedules' style={{borderBottom:'1px solid #ccc',borderRight:'1px solid #ccc'}}>{data.room_name}</div>});
    let timeSlotDivs = schedulesData.map(function(data){
                        var k = []
                        for(var i=0;i<24;i++) {
                            k.push( <div style={{width:'119px',height:'60px',float:'left',borderRight:'1px solid #ccc'}}>
                                <div style={{width:'29.75px',height:'60px',float:'left',borderRight:'0.5px solid #f4f4f4'}}></div>
                                <div style={{width:'29.75px',height:'60px',float:'left',borderRight:'0.5px solid #f4f4f4'}}></div>
                                <div style={{width:'29.75px',height:'60px',float:'left',borderRight:'0.5px solid #f4f4f4'}}></div>
                                <div style={{width:'29.75px',height:'60px',float:'left'}}></div>
                            </div>)
                        }
                        return <div key={data.id} style={{borderBottom:'0.5px solid #f4f4f4'}}>
                           {k}
                            <div style={{clear:'both'}}></div>
                        </div>

                        
                });    
                
    let atimeSlotDivs = [].concat(timeSlotDivs);
    var k = []
    for(var i=0;i<24;i++) {
        k.push( <div style={{width:'119px',height:'60px',float:'left',borderRight:'1px solid #ccc'}}>
            <div style={{width:'29.75px',height:'60px',float:'left',borderRight:'0.5px solid #f4f4f4'}}></div>
            <div style={{width:'29.75px',height:'60px',float:'left',borderRight:'0.5px solid #f4f4f4'}}></div>
            <div style={{width:'29.75px',height:'60px',float:'left',borderRight:'0.5px solid #f4f4f4'}}></div>
            <div style={{width:'29.75px',height:'60px',float:'left'}}></div>
        </div>)
    }
    let extra =  <div key='11111111'>
    {k}
    <div style={{clear:'both'}}></div>
</div>
atimeSlotDivs.push(extra)
    let scheduleDataDivs = schedulesData.map(function(data){
                                var events = data.events;
                                let ev = events.map(function(event){
                                    var min = (calculateMin(event.start_time,event.end_time)*2);
                                    var hours = (getHours("00:00",event.end_time)*120);
                                    hours = hours-min;
                                    min = min.toString().replace('-','')+'px';
                                    hours = hours.toString().replace('-','')+'px';

                                    return <div key={event.name} style={{width:min,left:hours,position:'absolute', whiteSpace: 'nowrap',overflow:'hidden',textOverflow:'ellipsis',background:'#c7e0f4',color:'#000',height:'60px',textAlign:'center',lineHeight:'60px'}}>{event.name}</div>
                                }); 
                                return <div key={data.id} style={{position:'relative',height:'60px'}}>{ev}</div>
                            });
    let aDataDivs = attendiesData.map(function(data){
        var events = data.events;
        let ev = events.map(function(event){
            var min = (calculateMin(event.start_time,event.end_time)*2);
            var hours = (getHours("00:00",event.end_time)*120);
            hours = hours-min;
            min = min.toString().replace('-','')+'px';
            hours = hours.toString().replace('-','')+'px';

            return <div key={event.id} style={{width:min,left:hours,position:'absolute', whiteSpace: 'nowrap',overflow:'hidden',textOverflow:'ellipsis',background:'#c7e0f4',color:'#000',height:'60px',textAlign:'center',lineHeight:'60px'}}></div>
        }); 
        return <div key={data.id} style={{position:'relative',height:'60px'}}>{ev}</div>
    });

    const {meetings} = this.props;

    var startTime = convertTime12to24(meetings.startTime);
    var endTime = convertTime12to24(meetings.endTime);
    var min = (calculateMin(startTime,endTime)*2);
    var hours = (getHours("00:00",endTime)*120);
    hours = hours-min;
    min = min.toString().replace('-','')+'px';
    hours = hours.toString().replace('-','')+'px';
    let highlightDiv =  <div style={{position:'absolute',width:min,left:hours,background:'rgba(49, 92, 199, 0.33)',height:'500px'}}> &nbsp;</div>         
const {showAttendees} = this.state
let showAttendeesClass = ''
    if(!showAttendees) {
         showAttendeesClass = 'displaynone'
    }else {
        showAttendeesClass = ''
    }
    return (
      <div>
            <NavBar type={'schedule'}></NavBar>
            <Filters></Filters>
            
            <div className='ms-Grid-row'>
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <Checkbox label="Show Attendees" onChange={this._onCheckboxChange} defaultChecked={true} />
      </div>
                <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2" style={{padding:'0px'}}>
                    <div className={showAttendeesClass}><div className='schedule-view-header'>All Attendees</div>
                    {attendees}</div>
                    <div className='schedule-view-header'>EMS HQ</div>
                    {resources}
                </div>
                <div className="ms-Grid-col ms-sm10 ms-md10 ms-lg10" style={{padding:'0px',position:'relative'}}>     
                   
                    <div style={{overflow: 'auto', position: 'relative'}}>
                        {highlightDiv}
                        <div className={showAttendeesClass} style={{width:'2880px',borderBottom: '1px solid #ccc',borderTop: '1px solid #ccc'}}>
                            {hoursDiv}
                            <div style={{clear:'both',borderTop:'1px solid #ccc'}}></div>
                            {atimeSlotDivs}
                            <div style={{clear:'both'}}></div>
                            <div style={{position:'absolute',top:'40px'}}>
                                {aDataDivs}
                            </div>
                        </div>
                        <div style={scheduleHoursCss}>
                            {hoursDiv}
                            <div style={{clear:'both',borderTop:'1px solid #ccc'}}></div>
                            {timeSlotDivs}
                            <div style={{clear:'both'}}></div>
                            <div style={{position:'absolute',top:'263px'}}>
                                {scheduleDataDivs}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default ScheduleView;