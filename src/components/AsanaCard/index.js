import React, { Component } from 'react';
import './style.css';
import { Button, Card, CardTitle, Divider, Dropdown, Row, Col } from 'react-materialize';
import asanaJson from '../../asana.json';


class AsanaCard extends Component {

  state = {
    categories: ["Backbends", "Balancing", "Hip", "Inversion", "Peak", "Seated", "Shoulder", "Standing", "Supine", "Twists"],
    selected: []
  };

  _renderCategory(category, i) {
    return (
      <a href={category} key={i} className="purple-text">
        {category}
      </a>
    )
  }

  _renderPose(asana, i) {
    const { sanskrit_name, english_name, img_url, targetArea, translation, cues } = asana;
    return (
      <Col l={3} m={6} s={12}>

        <Card key={i} header={<CardTitle image={img_url} />}
          title={english_name}
          reveal={<div><p>{cues}</p><p>Great for targeting: {targetArea}</p><p>Translation: {translation}</p></div>}>
          <Button
            floating
            large
            className="purple"
            waves="light"
            icon="add"
            onClick=""
          />
          <span>{sanskrit_name}</span>
        </Card>
      </Col>
    );
  }

  render() {
    return (
      <div>
        <Row>
          <Dropdown trigger={<Button className="purple">Sort by Category</Button>}>
            {this.state.categories.map(this._renderCategory)}
            <Divider />
          </Dropdown>
        </Row>
        <br></br>
        <br></br>
        <Row>
          {asanaJson.map(this._renderPose)}
        </Row>
      </div>
    );
  }
}

export default AsanaCard;