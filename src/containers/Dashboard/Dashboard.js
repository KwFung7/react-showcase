import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Jumbotron, Row } from 'reactstrap';
import article from '../../article';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Jumbotron className="my-0">
                  <h1 className="display-3 text-primary">Accenture React Showcase</h1>
                  <p className="lead">Showcase aims to align the React coding style among Accenture's teams and provide coding example for new joiner.</p>
                  <hr className="my-3" />
                  <p className="lead">
                    <a href={article.introduction} rel="noreferrer noopener" target="_blank">
                      <Button color="primary">Discuss on Teams</Button>
                    </a>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
