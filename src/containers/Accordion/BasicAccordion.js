import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import BootstrapAccordion from '../../components/BootstrapAccordion';
import codeUrl from '../../code-url';

class BasicAccordion extends Component {
  
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Bootstrap Accordion</strong>
            <div className="card-header-actions">
              <a href={codeUrl.bootstrapAccordion} rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">Source Code <i className="icon-arrow-right"></i></small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="mb-3"><u>Standard</u></div>
            <BootstrapAccordion label="Toggle">
               Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
            </BootstrapAccordion>
          </CardBody>
        </Card>
        
      </div>
    );
  }
}

export default BasicAccordion;
