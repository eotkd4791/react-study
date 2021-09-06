import React from 'react';

export default class FlavorForm extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { value: 'coconut' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ value });
  }

  handleSubmit(event) {
    alert('Flavor ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Flavor:
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='coconut'>Coconut</option>
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='mango'>Mango</option>
          </select>
        </label>
        <input type='submit' value='submit' />
      </form>
    );
  }
}
