import React, { Component } from 'react';
import '../../index.css';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Filters from '../../components/Filters';
import { initializeIcons } from '@uifabric/icons';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { connect } from 'react-redux';
import * as MeetingActions from '../../store/actions/meetings';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import {
  DetailsList,
  DetailsListLayoutMode,
  CheckboxVisibility,
  Selection,
  IColumn,
  IDetailsList
} from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';

initializeIcons();

let columns = [
  {
    key: 'key',
    name: 'Location',
    fieldName: 'location',
    minWidth: 140,
    maxWidth: 140,
  },
  {
    key: 'floor',
    name: 'Floor',
    fieldName: 'floor',
    minWidth: 140,
    maxWidth: 140,
  },
  {
    key: 'building',
    name: 'Building',
    fieldName: 'building',
    minWidth: 140,
    maxWidth: 140,
  },
  {
    key: 'room_type',
    name: 'Location Type',
    fieldName: 'room_type',
    minWidth: 200,
    maxWidth: 200,
  },
  {
    key: 'capacity',
    name: 'Capacity',
    fieldName: 'capacity',
    minWidth: 140,
    maxWidth: 140,
  },
  {
    key: 'like',
    name: '',
    fieldName: 'like',
    onRender: (item) => (
      <div>
        <i className="ms-Icon ms-Icon--Heart" aria-hidden="true"></i> 
      </div>
    )
  }
];

@connect(
  state => ({ meetings: state.meetings }),
  { ...MeetingActions },
)

class Home extends Component {
  selection: Selection;

  constructor(props) {
    super(props);
    this.selection = new Selection({
      onSelectionChanged: () => {
        const {setSelectedLocations} = this.props;
        setSelectedLocations(this.getSelectionDetails(), this.getSelectionCount());
      }
    });
    const {setSelection, meetings, setData} = this.props;
    setSelection(this.selection);
    setData({region:'',building:'',floor:''})
    var self = this;
    this.state = {
      items: [],
      isLoading: false
    };
  }

  getSelectionCount(): any {
    const selectionCount = this.selection.getSelectedCount();
    return selectionCount;
  }
  getSelectionDetails(): any {
    return this.selection.getSelection()
  }

  componentDidMount() {
    var self = this;
    self.timeout = setTimeout(() => {
      const { meetings } = self.props;
      for (var i = 0; i < meetings.selected_locations.length; i++) {
        self.selection.setKeySelected(meetings.selected_locations[i].key,true,false);
      }
    }, 500);
  }

  render() {
    var { items } = this.state;
    const { meetings } = this.props;
    items = meetings.locations
    return (
       
        <div className="ms-Grid" dir="ltr">

            {/* HEADER START - SEND BUTTON, DATEPICKER, TIMER PICKER */}
              <Header></Header>
            {/* HEADER END - SEND BUTTON, DATEPICKER, TIMER PICKER */}

            {/* NAVBAR SECTION START */}
              <NavBar type={'list'}></NavBar>
            {/* NAVBAR SECTION END */}

            {/* FILTERS SECTION START */}
            <Filters></Filters>
            {/* FILTERS SECTION END */}

            {/* LIST VIEW START */}
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 home-list-section">
                <div style={{clear:'both'}}>
                  <MarqueeSelection selection={this.selection}>
                    <DetailsList
                      selectionPreservedOnEmptyClick={true}
                      checkboxVisibility = {CheckboxVisibility.always}
                      items={items}
                      columns={columns}
                      selection={this.selection}
                    />
                  </MarqueeSelection>
                </div>
              </div>
            </div>
            {/* LIST VIEW END */}

        </div>

      
    );
  }
}

export default Home;
