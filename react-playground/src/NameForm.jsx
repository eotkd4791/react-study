import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange({ target: { value } }) {
    this.setState({ value });
  }

  handleSubmit(event) {
    alert('submitted ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>
          Name:
          <input type='text' name='name' value={this.state.value} onChange={(event) => this.handleChange(event)} />
        </label>
        <input type='submit' value='submit' />
      </form>
    );
  }
}

export default NameForm;
