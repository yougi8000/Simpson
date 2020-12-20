import React, { Component } from "react";
import Simpson from "./Simpson";
import "./Character.css";

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons: [],
    };
  }

  componentDidMount() {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          simpsons : data,
        });
      });
  };

  render() {

    return (
      <div>
        <div className="flex-container">

        {this.state.simpsons.map(simpson => <Simpson image={simpson.image} quote={simpson.quote} character={simpson.character} direction={simpson.characterDirection} />)}

        </div>

      </div>
    );
  }
}

export default Character;
