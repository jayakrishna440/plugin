import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as MeetingActions from '../../store/actions/meetings';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

var filterClicked = false;
var region = '';
var building = '';
var floor = '';
@connect(
  state => ({ meetings: state.meetings }),
  { ...MeetingActions },
)

export class Filters extends Component {

  clearAll(e):any {
    const { meetings } = this.props;
    for (var i = 0; i < meetings.selected_locations.length; i++) {
      meetings.selection.setKeySelected(meetings.selected_locations[i].key,false,false);
    }
    const {setSelectedLocations} = this.props;
    setSelectedLocations([],0);
  }

  removeLocation(e): any {
    const { meetings,setSelectedLocations } = this.props;
    for (var i = 0; i < meetings.selected_locations.length; i++) {
      if(meetings.selected_locations[i].locationid == e.locationid) {
        meetings.selection.setKeySelected(meetings.selected_locations[i].key,false,false);
        meetings.selected_locations.splice(i,1)
        break;
      }
    }
    //this.setState({ selectionDetails: meetings.selected_locations, count: count-1 })
    setSelectedLocations(meetings.selected_locations,meetings.locations_count-1);
  }

  constructor(props) {
    super(props);

    this.removeLocation = this.removeLocation.bind(this);
    this.clearAll = this.clearAll.bind(this);

    this.state = {
      filterc:false
    };
    this.filter = this.filter.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  };

  applyFilter() {
    const {setData} = this.props;
    setData({region:region,building:building,floor:floor})
  }

  cancelFilter() {
    const {setData} = this.props;
    filterClicked = !filterClicked;
    this.setState({filterc:filterClicked})
    region = ''
    building = ''
    floor = ''
    setData({region:'',building:'',floor:''})
  }

  filter(e):any {
    filterClicked = !filterClicked;
    if(!filterClicked) {
      this.setState({filterc:filterClicked})
      const {setData} = this.props;
      region = ''
      building = ''
      floor = ''
      setData({region:'',building:'',floor:''})
    }else {
      this.setState({filterc:filterClicked})
    }
  }

  regionSelected = (option): string=> {
    console.log(option.key)
    region = option.text;
  };

  buildingSelected = (option): string=> {
    console.log(option.text)
    building = option.text;
  };

  floorSelected = (option): string=> {
    console.log(option.text)
    floor = option.text;
  };

  render() {
    const { filterc } = this.state;
    const { meetings} = this.props;
    console.log(meetings)
    const self = this
    var detailsList = meetings.selected_locations.map(function(name){
      return <div key={name.key} onClick={self.removeLocation.bind(this,name)} className='padding-20'>
            <i className="ms-Icon ms-Icon--ChromeClose padding-right-5 padding-left-10 close-icon" aria-hidden="true"></i> 
            {name.location}-{name.building}-{name.floor}
        </div>;
    })

    let region = <div><Dropdown
                      onChanged={this.regionSelected}
                      label="Region"
                      options={[
                        { key: 'EMEA', text: 'EMEA' },
                        { key: 'JAPA', text: 'JAPA' },
                        { key: 'LAC', text: 'LAC' },
                        { key: 'US', text: 'US' }
                      ]}
                    />
                  </div>
    let building = <div><Dropdown
                      onChanged={this.buildingSelected}
                      label="Building"
                      options={[
                        { key: '13', text: 'AEDR-OB1' },
                        { key: '364', text: 'AEDR-OB2' },
                        { key: '17', text: 'AESCP-1' },
                        { key: '18', text: 'AESCP-2' }
                      ]}
                    />
                  </div>
    let floor = <div>
                  <Dropdown
                      onChanged={this.floorSelected}
                      label="Floor"
                      options={[
                        { key: 'all', text: 'all' },
                        { key: '1', text: '01' },
                        { key: '2', text: '02' },
                        { key: '3', text: '03' }
                      ]}
                    />
                  </div>

    let applyBtns = <div><DefaultButton
                        onClick={self.applyFilter.bind(this)}
                      primary={true}
                      text="Apply"
                    /></div>
    
    let cancelBtns = <div><DefaultButton
                        onClick={self.cancelFilter.bind(this)}
                      text="Cancel"
                    /></div>

    /*let filterChecks;
    if (filterc) {
      filterChecks = <div><div style={{width:'200px',float:'left',marginRight:'10px'}}>{region}</div><div style={{width:'200px',float:'left',marginRight:'10px'}}>{building}</div><div style={{width:'200px',float:'left',marginRight:'10px'}}>{floor}</div><div style={{width:'200px',float:'left',marginRight:'10px',marginTop:'30px'}}>{applyBtns}</div></div>
    } else {
      filterChecks = <div></div>
    }*/

    let filterChecks;
    let locationBtnBackground;
    if(filterc) {
        filterChecks = 'ms-Grid-row displayblock max-width-800'
        locationBtnBackground = 'background-red'
    } else {
        filterChecks = 'ms-Grid-row displaynone max-width-800'
        locationBtnBackground = ''
    }

    let clearLocations = 'ms-Grid-row displaynone'
    if(meetings.locations_count>0) {
      clearLocations = 'ms-Grid-row displayblock'
    }

    return (
      <div className='ms-Grid-row'>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 filter-section">

          <div className="ms-Grid-row max-width-700">
            <div className="ms-Grid-col location ms-sm6 ms-md6 ms-lg3 margin-bottom-20">
              <DefaultButton iconProps={{ iconName: 'Filter' }} onClick={self.filter.bind(this)} className={locationBtnBackground}>
                Location Filter
              </DefaultButton>
            </div>

          </div>
          <div className={clearLocations}>
            <div className="ms-Grid-col selectedTab top-btns clearall margin-bottom-20  ms-sm4 ms-md4 ms-lg1 ">
              <DefaultButton onClick={self.clearAll.bind(this,'h')}  iconProps={{ iconName: 'ChromeClose' }}>
                Clear All
              </DefaultButton>
            </div>
            <div className="ms-Grid-col selectedTab margin-bottom-10 locationBtn background-white  ms-sm12 ms-md12 ms-lg11 border-1">
              
                Location:
              {detailsList}
            </div>
          </div>
          <div className={filterChecks}>
                <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg3 margin-bottom-20">{region}</div>
                <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg3 margin-bottom-20">{building}</div>
                <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg2 margin-bottom-20">{floor}</div>
                <div className="ms-Grid-col ms-sm3 ms-md6 ms-lg2 margin-bottom-20 margin-top-30">{applyBtns}</div>
                <div className="ms-Grid-col ms-sm3 ms-md6 ms-lg2 margin-bottom-20 margin-top-30">{cancelBtns}</div>
          </div>

        </div>
      </div>
    );
  }
}

export default Filters;
