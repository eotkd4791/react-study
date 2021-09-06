import React from 'react';

export default class Reservation extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { type, name, value, checked } }) {
    const data = type === 'checkbox' ? checked : value;
    this.setState({ [name]: data });
  }

  handleSubmit(event) {
    alert('reservation ' + this.state.isGoing + ' ' + this.state.numberOfGuests);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input type='checkbox' name='isGoing' checked={this.state.isGoing} onChange={this.handleChange} />
        </label>
        <label>
          Number Of Guests:
          <input type='number' name='numberOfGuests' value={this.state.numberOfGuests} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}
