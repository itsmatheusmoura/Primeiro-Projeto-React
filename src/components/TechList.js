import React, { Component } from "react";

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    techs: ["Node.js", "ReactJS", "React Native"],
    newTech: "",
  };

  handleInputChange = (e) => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: "",
    });
  };

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter((t) => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map((tech) => (
            <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)} />
          ))}
        </ul>

        <input
          onChange={this.handleInputChange}
          type="text"
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
