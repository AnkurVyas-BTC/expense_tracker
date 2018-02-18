import React, { Component } from 'react';
import PropTypes from 'prop-types';

class  Expense extends Component {
  render() {
    let priceClass = this.props.price < 0 ? 'table-danger' : 'table-success';
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.title}</td>
        <td className={priceClass}> {this.props.price} </td>
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