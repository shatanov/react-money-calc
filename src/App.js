import React, { Component } from 'react';
import Total from './componets/total/Total'
import History from './componets/history/History'
import Operation from './componets/operation/Operation'

class App extends Component {
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
                <Operation/>
            </div>
        </main>
        </>
    );   
  } 
}

export default App;
