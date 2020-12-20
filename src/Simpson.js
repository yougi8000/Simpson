import React, { Component } from 'react';
import './Character.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Button
} from 'reactstrap';


class Simpson extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.refreshPage = this.refreshPage.bind(this);
  }

refreshPage(){
    window.location.reload();
}

  render() {
    const color = (this.props.direction === 'Left') ? 'success' : 'danger';
    return (
      <div className="Simpson">
        <Container>
              <Card>
                <CardImg className="CardItem" src={this.props.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle><h2>{this.props.character}</h2></CardTitle>
                  <CardSubtitle><p>{this.props.direction}</p></CardSubtitle>
                  <CardText>{this.props.quote}</CardText>
                </CardBody>
              </Card>
              <Button color={color} size="lg" onClick={() => {this.refreshPage()}}>Changez</Button>
        </Container>
      </div>
    );
  }
}

export default Simpson;