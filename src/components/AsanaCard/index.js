import React, { Component } from 'react';
import './style.css';
import { Card, CardTitle, Row, Col } from 'react-materialize';
import asanaJson from '../../asana.json';


class AsanaCard extends Component {

  state = {
  };

  _renderPose(asana, i) {
    const { sanskrit_name, english_name, img_url, targetArea, cues } = asana;
    return (
      <Col m={3} s={12}>
        <Card key={i} header={<CardTitle image={img_url} />}
          title={english_name}
          reveal={<div><p>{cues}</p><p>Great for targeting: {targetArea}</p></div>}>
          <span>{sanskrit_name}</span>
        </Card>
      </Col>
    );
  }

  render() {
    return (
      <Row>
          {asanaJson.map(this._renderPose)}
      </Row>
    );
  }
}

export default AsanaCard;