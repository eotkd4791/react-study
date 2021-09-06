import React from 'react';

export default class EssayForm extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { value: 'textArea' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('submitted ' + this.state.value);
    event.preventDefault();
  }

  handleChange({ target: { value } }) {
    this.setState({ value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        </label>
        <input type='submit' value='submit' />
      </form>
    );
  }
}
