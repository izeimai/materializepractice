import React, { Component } from 'react';
import './style.css';
import { Button, Card, CardTitle, Divider, Dropdown, Row, Col } from 'react-materialize';
import asanaJson from '../../asana.json';


class AsanaCard extends Component {

  state = {
    categories: ["Backbends", "Balancing", "Hip", "Inversion", "Peak", "Seated", "Shoulder", "Standing", "Supine", "Twists"],
    asana: asanaJson,
    selected: [],
    selectedCategory: ""
  };



  _renderCategory(category, i) {

    function handleClick(e, value) {
      e.preventDefault();
      console.log("Category button clicked");
    }

    return (
      <a href="/" key={i} value={category} onClick={handleClick} className="purple-text">
        {category}
      </a>
    )
  }

  _renderPose(asana) {
    const { sanskrit_name, english_name, img_url, targetArea, translation, cues } = asana;

    function _addPose(e) {
      console.log("Add button clicked")
    };

    return (
      <Col l={3} m={6} s={12}>
        <Card key={english_name} header={<CardTitle image={img_url} />}
          title={english_name}
          reveal={<div><p>{cues}</p><p>Great for targeting: {targetArea}</p><p>Translation: {translation}</p></div>}>
          <Button
            floating
            large
            className="purple"
            waves="light"
            icon="add"
            onClick={_addPose}
          />
          <span>{sanskrit_name}</span>
        </Card>
      </Col>
    );
  }

  _sortByCategory(e) {
    //Clear asana
    this.setState({ asana: "" });
    // Loop through the original Json for matching category poses
    for (var i = 0; i < asanaJson; i++) {
      if (asanaJson[i].category === e.target.value) {
        this.state.selected.push(this.state.asana[i]);
      }
      this.handleChange(e.target.value);
      return (this.state.selected);
    }
  }

  handleChange = (event) => {
    this.setState({ asana: event.target.value });
  };

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
          {this.state.asana.map(this._renderPose)}
        </Row>
      </div>
    );
  }
}

export default AsanaCard;