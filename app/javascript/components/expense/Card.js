import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {

  render() {
    let cardBackground = "card text-white " + this.props.backgound;
    return (
      <div style={CardStyle}>
        <div className={cardBackground}>
          <div className="card-header">{this.props.title}</div>
          <div className="card-body">{this.props.amount}</div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  backgound: PropTypes.string
};

let CardStyle = {
  padding: 20
}

export default Card;