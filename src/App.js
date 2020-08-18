import React, { Component } from 'react';
import Total from './components/total/Total'
import History from './components/history/History'
import Operation from './components/operation/Operation'

class App extends Component {
    state = {
        transactions: [],
        description: '',
        amount: ''
    }
    addTransactions = (add) => {
        const transaction = {
            id: `key${(+new Date).toString(16)}`,
            description: this.state.description,
            amount: this.state.amount,
            add
        }
        const transactions = [...this.state.transactions];
        transactions.push(transaction);

    }   
    addAmount = (e) => {
        this.setState({amount: e.target.value});
    }
    addDescription = (e) => {
        this.setState({description: e.target.value});
    }
  render(){
    return (
        <>
        <header>
            <h1>Кошелек</h1>
            <h2>Калькулятор расходов</h2>
        </header>
    
        <main>
            <div className="container">
                <Total/>
                <History/>
                <Operation 
                addTransactions={this.addTransactions}
                addAmount={this.addAmount}
                />
            </div>
        </main>
        </>
    );   
  } 
}

export default App;
