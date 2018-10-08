import React, { Component } from 'react';

class ScheduleView extends Component {
    render() {
        return (
            <div style={{width:'1024px'}}>
                <div style={{width:'200px',float:'left'}}>
                    Attendes
                </div>
                <div style={{width:'824px',float:'left'}}>
                    <div className="scheduleTable">

                        {/* HEADER */}
                        <div>
                            <div className='time-div'>7 AM</div>
                            <div className='time-div'>8 AM</div>
                            <div className='time-div'>9 AM</div>
                            <div className='time-div'>10 AM</div>
                            <div className='time-div'>11 AM</div>
                            <div className='time-div'>12 AM</div>
                            <div className='time-div'>1 PM</div>
                            <div className='time-div'>2 PM</div>
                            <div className='time-div'>3 PM</div>
                            <div className='time-div'>4 PM</div>
                            <div className='time-div'>5 PM</div>
                            <div className='time-div'>6 PM</div>
                            <div className='time-div'>7 PM</div>
                            <div className='time-div'>8 PM</div>
                            <div className='time-div'>9 PM</div>
                            <div className='time-div'>10 PM</div>
                            <div className='time-div'>11 PM</div>
                        </div>
                        {/* HEADER */}

                        {/* MEETINGS */}
                        <div style={{clear:'both'}}>
                            <div style={{width:'50px',float:'left'}}>&nbsp;</div>
                            <div className="border" style={{width:'225px',float:'left'}}>7:15 AM to 9:30 AM</div>
                        </div>
                        {/* MEETINGS */}

                    </div>
                </div>
            </div>
        );    
    }    
}

export default ScheduleView;