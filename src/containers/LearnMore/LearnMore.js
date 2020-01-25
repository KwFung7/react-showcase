import React, { Component } from 'react';
import { Button, Card, CardHeader, CardBody, Col, Jumbotron, Row } from 'reactstrap';
import { learnMore } from '../../article';
import ReactHtmlParser from 'react-html-parser';

class LearnMore extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          {
            learnMore.map((item, index) => (
              <Col key={index}>
                <Card>
                  <CardHeader>
                    <strong>{item.group}</strong>
                  </CardHeader>
                  <CardBody>
                    <Jumbotron className="my-0 p-4">
                      <h1 className="display-4">{item.title}</h1>
                      <div className="lead">{ReactHtmlParser(item.desc)}</div>
                      <hr className="my-3" />
                      <div className="lead">
                        <a href={item.url} rel="noreferrer noopener" target="_blank">
                          <Button color="primary">Learn more</Button>
                        </a>
                      </div>
                    </Jumbotron>
                  </CardBody>
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    );
  }
}

export default LearnMore;
