import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import BootstrapTextBox from '../../../components/BootstrapTextBox';
import MaterialTextBox from "../../../components/MaterialTextBox";
import codeUrl from '../../../code-url';

class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Bootstrap Text Box</strong>
            <div className="card-header-actions">
              <a href={codeUrl.bootstrapTextBox} rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">Source Code <i className="icon-arrow-right"></i></small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <BootstrapTextBox />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Material-UI Text Box</strong>
            <div className="card-header-actions">
              <a href={codeUrl.materialTextBox} rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">Source Code <i className="icon-arrow-right"></i></small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <MaterialTextBox/>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default TextBox;
