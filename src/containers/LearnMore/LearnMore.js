import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Jumbotron, Row } from 'reactstrap';
import { learnMore } from '../../article';
import ReactHtmlParser from 'react-html-parser';

class LearnMore extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          {
            learnMore.map(item => (
              <Col>
                <Card>
                  <CardBody>
                    <Jumbotron className="my-0">
                      <h1 className="display-3">{item.title}</h1>
                      <p className="lead">{ReactHtmlParser(item.desc)}</p>
                      <hr className="my-3" />
                      <p className="lead">
                        <a href={item.url} rel="noreferrer noopener" target="_blank">
                          <Button color="primary">Learn more</Button>
                        </a>
                      </p>
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
