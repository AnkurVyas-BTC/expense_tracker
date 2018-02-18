import React, { Component } from 'react';
import Expense from './Expense';
import Form from './Form';
import Card from './Card';

class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.refreshList = this.refreshList.bind(this);
    this.loadExpenses = this.loadExpenses.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(id) {
    let thisObj = this;
    $.ajax({
      url: `api/v1/expenses/${id}`,
      method: 'DELETE',
      dataType: 'JSON',
      complete: function () {
        thisObj.loadExpenses();
      }
    });
  }

  render() {
    let spent = this.state.list.filter(e => e.price < 0).reduce((prev, curr) => prev + curr.price, 0);
    let gained = this.state.list.filter(e => e.price >= 0).reduce((prev, curr) => prev + curr.price, 0);
    let total = spent + gained;

    return (
      <div>
        <Form refreshList={this.refreshList} />
        <div className='row'>
          <div className='col-6'>
            <table className="table table-bordered">
              <thead>
                <tr className="table-primary">
                  <th>Date</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map(expense => {
                  return (
                    <Expense
                      key={expense.id}
                      expense_id={expense.id}
                      title={expense.title}
                      price={expense.price}
                      date={expense.date}
                      handleDelete={this.handleDelete}
                    />
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='col-6'>
            <Card title='Spent' amount={-spent} backgound='bg-danger' />
            <Card title='Gained' amount={gained} backgound='bg-success' />
            <Card title='Total' amount={total} backgound='bg-primary' />
          </div>
        </div>

      </div>
    );
  }
}

export default ExpenseList;