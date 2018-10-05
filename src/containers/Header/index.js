import React, { Component } from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

const currentDate = new Date();
class Header extends Component {
  render() {
    return (
        <div className="ms-Grid-row header-section">
        <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2 background-white">
            <DefaultButton>
              <i className="ms-Icon ms-Icon--FolderHorizontal padding-right-5" aria-hidden="true"></i> 
              SEND
            </DefaultButton>
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
          <Dropdown
            defaultSelectedKey={'A'}
            options={[
              { key: 'A', text: 'Book a Meeting Room (*) ' },
              { key: 'B', text: 'Book Hall' },
              { key: 'D', text: 'Schedule Meeting' },
              { key: 'E', text: 'Book Conference' }
            ]}
          />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2">
          <DatePicker
            formatDate={this._onFormatDate}
            value={currentDate}
            isRequired={false}
            allowTextInput={false}
          />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2">
            <Dropdown
                options={[
                    { key: 'A', text: '12:00 AM' },
                    { key: 'B', text: '12:15 AM' },
                    { key: 'C', text: '12:30 AM' },
                    { key: 'D', text: '12:45 AM' }
            ]}
            />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md2 ms-lg2">
            <Dropdown
                options={[
                    { key: 'A', text: '12:00 AM' },
                    { key: 'B', text: '12:15 AM' },
                    { key: 'C', text: '12:30 AM' },
                    { key: 'D', text: '12:45 AM' }
            ]}
            />
        </div>
      </div>
    );
  }
}

export default Header;
