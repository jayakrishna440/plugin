import React, { Component } from 'react';
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler'
import 'react-big-scheduler/lib/css/style.css'
import moment from 'moment';
import withDragDropContext from './withDnDContext';
import NavBar from '../../components/NavBar';
import Filters from '../../components/Filters';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';

let attendiesData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Day,false, false, {
    startResizable: false,
    endResizable: false,
    movable: false,
    creatable: false,
    resourceName: "ATTENDIES",
    minuteStep: 15,
    checkConflict: true,
    calendarPopoverEnabled: false,
    eventItemHeight: 40,
    eventItemLineHeight: 40,
    views: [
        {viewName: 'Day', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false},
        {viewName: 'Month', viewType: ViewTypes.Month, showAgenda: false, isEventPerspective: false},
        {viewName: 'Year', viewType: ViewTypes.Year, showAgenda: false, isEventPerspective: false},
      ]
});

let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Day,false, false, {
    startResizable: false,
    endResizable: false,
    movable: false,
    creatable: false,
    resourceName: "EMS HQ",
    minuteStep: 15,
    displayWeekend: false,
    checkConflict: true,
    calendarPopoverEnabled: false,
    eventItemHeight: 40,
    eventItemLineHeight: 40,
    views: [
        {viewName: 'Day', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false},
        {viewName: 'Month', viewType: ViewTypes.Month, showAgenda: false, isEventPerspective: false},
        {viewName: 'Year', viewType: ViewTypes.Year, showAgenda: false, isEventPerspective: false},
      ]
});
let attendiesresources = [
    {
       id: 'r1',
       name: 'John'
    },
    {
       id: 'r2',
       name: 'Mathew'
    },
    {
       id: 'r3',
       name: 'Vittal'
    }
];
attendiesData.setResources(attendiesresources);
let resources = [
    {
       id: 'r1',
       name: 'EMS Building 1'
    },
    {
       id: 'r2',
       name: 'EMS Conference Room'
    },
    {
       id: 'r3',
       name: 'EMS Building Room 2'
    }
];
schedulerData.setResources(resources);

let events = [
{
     id: 1,
     start: '2018-10-09 09:30:00',
     end: '2018-10-09 10:30:00',
     resourceId: 'r1',
     title: 'I am finished',
     bgColor: '#D9D9D9'
 }, 
 {
     id: 2,
     start: '2018-10-09 01:00:00',
     end: '2018-10-09 02:30:00',
     resourceId: 'r2',
     title: 'New Project',
     resizable: false
 }, 
 {
     id: 3,
     start: '2018-10-09 14:30:00',
     end: '2018-10-09 16:30:00',
     resourceId: 'r3',
     title: 'Erick Conference',
     movable: false
 }, 
 {
     id: 4,
     start: '2018-10-09 16:30:00',
     end: '2018-10-09 23:30:00',
     resourceId: 'r1',
     title: 'Test Jon Data',
     startResizable: false
 }, 
 {
     id: 5,
     start: '2018-10-09 19:30:00',
     end: '2018-10-09 20:30:00',
     resourceId: 'r2',
     title: 'R2 has recurring tasks every week on Tuesday, Friday'
 }
];
schedulerData.setEvents(events);

attendiesData.setEvents(events);
    
class ScheduleView extends Component {
    prevClick = (schedulerData)=> {
        schedulerData.prev();
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData)=> {
        schedulerData.next();
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onSelectDate = (schedulerData, date) => {
        /*schedulerData.setDate(date);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })*/
    }
    slotItemTemplateResolver = (schedulerData, slot, slotClickedFunc, width, clsName) => {
        console.log(slot)
        return (
            <div>
               <input type='checkbox'/>{slot.slotName}
            </div>
        );
    }    
    nonAgendaCellHeaderTemplateResolver = (schedulerData, item, formattedDateItems, style) => {
        let datetime = schedulerData.localeMoment(item.time);
        let isCurrentDate = false;
  
        if (schedulerData.viewType === ViewTypes.Day) {
            isCurrentDate = datetime.isSame(new Date(), 'hour');
        }
        else {
            isCurrentDate = datetime.isSame(new Date(), 'day');
        }
  
        if (isCurrentDate) {
            style.backgroundColor = '#118dea';
            style.color = 'white';
        }
        return (
            <th key={item.time} className={`header3-text`} style={style}>
                {
                    formattedDateItems.map((formattedItem, index) => (
                        <div key={index}
                            dangerouslySetInnerHTML={{__html: formattedItem.replace(/[0-9]/g, '<b>$&</b>')}}/>
                    ))
                }
            </th>
        );
    }
    slotClickedFunc = (schedulerData, slot) => {
        alert(`You just clicked a ${schedulerData.isEventPerspective ? 'task':'resource'}.{id: ${slot.slotId}, name: ${slot.slotName}}`);
    }
    eventClicked = (schedulerData, event) => {
        alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    };
    updateEventStart = (schedulerData, event, newStart) => {
        if(confirm(`Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`)) {
            schedulerData.updateEventStart(event, newStart);
        }
        this.setState({
            viewModel: schedulerData
        })
    }

    updateEventEnd = (schedulerData, event, newEnd) => {
        if(confirm(`Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`)) {
            schedulerData.updateEventEnd(event, newEnd);
        }
        this.setState({
            viewModel: schedulerData
        })
    }

    moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
        if(confirm(`Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`)) {
            schedulerData.moveEvent(event, slotId, slotName, start, end);
            this.setState({
                viewModel: schedulerData
            })
        }
    }

    onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
      schedulerData.next();
      schedulerData.setEvents(events);
      this.setState({
          viewModel: schedulerData
      });

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }

    onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
      schedulerData.prev();
      schedulerData.setEvents(events);
      this.setState({
          viewModel: schedulerData
      });

      schedulerContent.scrollLeft = 10;
    }

    onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
        console.log('onScrollTop');
    }

    onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
        console.log('onScrollBottom');
    }

    constructor(props) {
        super(props);
        this.state = {
          hideDialog: true
        };
      }


   _showDialog = (): void => {
    this.setState({ hideDialog: false });
  };

   _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  };

    render() {
        return (
            <div>
                <NavBar type={'fff'}></NavBar>
                <Filters></Filters>
                <div className="ms-Grid-row attendies">
                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                        <div style={{position:'absolute',top: '24%'}}>
                            <span>All Attendees</span><br/>
                            <span onClick={this._showDialog}>
                                Add New
                            </span>
                        </div>
                        <Scheduler schedulerData={attendiesData} 
                                prevClick={this.prevClick}
                                nextClick={this.nextClick}
                                onSelectDate={this.onSelectDate}
                                onViewChange={this.onViewChange}
                                updateEventStart={this.updateEventStart}
                                updateEventEnd={this.updateEventEnd}
                                moveEvent={this.moveEvent}
                                nScrollLeft={this.onScrollLeft}
                                onScrollRight={this.onScrollRight}
                                onScrollTop={this.onScrollTop}
                                onScrollBottom={this.onScrollBottom}
                                nonAgendaCellHeaderTemplateResolver = {this.nonAgendaCellHeaderTemplateResolver} />
                    </div>
                </div>
                <div className="ms-Grid-row rooms">
                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 list-section">
                        <div style={{position:'absolute'}}>
                            <span>Rooms</span><br/>
                            <span onClick={this._showDialog}>
                                Add New
                            </span>
                        </div>
                        <Scheduler schedulerData={schedulerData} 
                                prevClick={this.prevClick}
                                nextClick={this.nextClick}
                                onSelectDate={this.onSelectDate}
                                onViewChange={this.onViewChange}
                                updateEventStart={this.updateEventStart}
                                updateEventEnd={this.updateEventEnd}
                                moveEvent={this.moveEvent}
                                nScrollLeft={this.onScrollLeft}
                                onScrollRight={this.onScrollRight}
                                onScrollTop={this.onScrollTop}
                                onScrollBottom={this.onScrollBottom}
                                slotItemTemplateResolver={this.slotItemTemplateResolver}
                                nonAgendaCellHeaderTemplateResolver = {this.nonAgendaCellHeaderTemplateResolver} />
                    </div>
                </div>

                <div>
                 <Dialog
                    hidden={this.state.hideDialog}
                    onDismiss={this._closeDialog}
                    dialogContentProps={{
                        type: DialogType.normal,
                        title: 'Select Rooms',
                        subText:'Show Here All Rooms List'
                    }}
                    modalProps={{
                        isBlocking: true,
                        containerClassName: 'ms-dialogMainOverride'
                    }}
                    >
                    <DialogFooter>
                        <PrimaryButton onClick={this._closeDialog} text="Save" />
                        <DefaultButton onClick={this._closeDialog} text="Cancel" />
                    </DialogFooter>
                    </Dialog>
                </div>
                
            </div>
        );    
    }    
}

export default withDragDropContext(ScheduleView);