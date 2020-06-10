import React from 'react';

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses.js";
import { TransactionList } from "./components/TransactionList.js";
import { AddTransaction } from "./components/AddTransaction.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance /> 
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
