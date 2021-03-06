import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import BootstrapListGroup from '../../components/BootstrapListGroup';
import codeUrl from '../../code-url';

const items = [
  { key: 'primary', title: 'Primary isActive', color:'primary', isActive: true, isAction: false, isDisabled: false, link: 'http://www.accenture.com' },
  { key: 'secondary', title: 'Secondary isAction', color:'secondary', isActive: false, isAction: true, isDisabled: false, link: 'http://www.accenture.com' },
  { key: 'success', title: 'Success isDisabled', color:'success', isActive: false, isAction: false, isDisabled: true, link: 'http://www.accenture.com' },
  { key: 'info', title: 'Info', color:'info', isActive: false, isAction: false, isDisabled: false, link: 'http://www.accenture.com' },
  { key: 'warning', title: 'Warning', color:'warning', isActive: false, isAction: false, isDisabled: false, link: 'http://www.accenture.com' },
  { key: 'danger', title: 'Danger', color:'danger', isActive: false, isAction: false, isDisabled: false, link: 'http://www.accenture.com' },
];

class BasicListGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlush: false
    };
  }

  toggleFlushMode = () => {
    this.setState({
      isFlush: !this.state.isFlush 
    });
  };
  
  render() {
    const { isFlush } = this.state;

    return (
      <div className="animated fadeIn">
        <div className="d-flex justify-content-end mb-3">
          <div className="d-flex align-items-center mr-2">
            <div className="text-black-50">Flush</div>
            <AppSwitch
              className={'mx-1'}
              variant={'pill'}
              color={'secondary'}
              checked={isFlush}
              onChange={this.toggleFlushMode} />
          </div>
        </div>
        <Card>
          <CardHeader>
            <strong>Bootstrap List Group</strong>
            <div className="card-header-actions">
              <a href={codeUrl.bootstrapListGroup} rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">Source Code <i className="icon-arrow-right"></i></small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="mb-3"><u>Standard</u></div>
            <BootstrapListGroup {...this.state} items={items} />
            <div className="mb-3 mt-4"><u>Horizontal</u></div>
            <BootstrapListGroup {...this.state} items={items} isHorizontal/>
            <div className="mb-3 mt-4"><u>Link</u></div>
            <BootstrapListGroup {...this.state} items={items} isLink/>
          </CardBody>
        </Card>
        
      </div>
    );
  }
}

export default BasicListGroup;
