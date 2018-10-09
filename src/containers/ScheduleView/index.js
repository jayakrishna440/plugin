import React, { Component } from 'react';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

class ScheduleView extends Component {
    render() {
        return (
            <div className="ms-Grid" dir="ltr">
                {/* HEADER START - SEND BUTTON, DATEPICKER, TIMER PICKER */}
                <Header></Header>
                {/* HEADER END - SEND BUTTON, DATEPICKER, TIMER PICKER */}

                {/* NAVBAR SECTION START */}
                <NavBar type={'schedule'}></NavBar>
                {/* NAVBAR SECTION END */}

                {/* LIST VIEW START */}
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 list-section">
                        
                    </div>
                </div>
                {/* LIST VIEW END */}
            </div>
        );    
    }    
}

export default ScheduleView;