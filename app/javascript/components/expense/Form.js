import React from "react";
import PropTypes from "prop-types";
import { } from 'jquery-ujs';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      date: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let thisObj = this;
    $.post('/api/v1/expenses', { expense: this.state }, function (data) {
      thisObj.setState({ date: '', title: '', price: '' });
      thisObj.props.refreshList();
    }, "json");
  }

  render() {
    return (
      <form style={FormStyle} action='api/v1/expense' method="POST" onSubmit={this.handleSubmit} className="form-inline">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="date"
            value={this.state.date}
            onChange={this.handleChange}
            placeholder="Date"
          />
          <input
            type="text"
            className="form-control mx-sm-3"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
          />
          <input
            type="number"
            className="form-control mx-sm-3"
            id="price"
            value={this.state.price}
            onChange={this.handleChange}
            placeholder="Price"
          />
          <input
            type="submit"
            className="btn btn-success mx-sm-3"
            value="Submit"
          />
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  date: PropTypes.string
};

let FormStyle = {
  padding: 20
}

export default Form;