import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expense extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }


  handleDelete(event) {
    this.props.handleDelete(event.target.dataset.id);
  }

  render() {
    let priceClass = this.props.price < 0 ? 'table-danger' : 'table-success';
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.title}</td>
        <td className={priceClass}> {this.props.price} </td>
        <td>
          <input
            type="button"
            className="btn btn-danger"
            value="Delete"
            data-id={this.props.expense_id}
            onClick={this.handleDelete}
          />
        </td>
      </tr>
    )
  }
}

Expense.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  date: PropTypes.string
};

export default Expense;