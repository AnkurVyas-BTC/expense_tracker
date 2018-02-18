import React, { Component } from 'react';
import Expense from './Expense';
import Form from './Form';

class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.refreshList = this.refreshList.bind(this);
    this.loadExpenses = this.loadExpenses.bind(this);
  }

  componentDidMount() {
    this.loadExpenses();
  }

  refreshList() {
    this.loadExpenses();
  }

  loadExpenses() {
    let thisobj = this;
    $.get('api/v1/expenses.json', function (data) {
      thisobj.setState({ list: data });
    }, 'json');
  }

  render() {
    return (
      <div>
        <Form refreshList={this.refreshList} />
        <table className="table table-bordered">
          <thead>
            <tr className="table-primary">
              <th>Date</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map(expense => {
              return(
                <Expense
                  key={expense.id}
                  title={expense.title}
                  price={expense.price}
                  date={expense.date}
                />
              )
            })}
          </tbody>
        </table>

      </div>
    );
  }
}

export default ExpenseList;