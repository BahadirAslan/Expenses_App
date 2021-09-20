import React, {  useState } from'react';
import NewExpences from './components/NewExpences/NewExpences';
import Expences  from "./components/Expences/Expences";


const App = () => {
  const DUMMY_EXPENCES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  let [expenses, setExpenses] = useState(DUMMY_EXPENCES);
  

  const addExpenseHandler = expense => {
   setExpenses(prevExpenses => {
  return [expense, ...prevExpenses]
   })};

  //return React.createElement(
    //'div',
     //{},
      //React.createElement('h2', {}, "Lets get stared!"),
      //React.createElement(Expences, {items: expenses})
  //);
  return (
    <div>
      <NewExpences onAddExpense={addExpenseHandler}/>
      <Expences items= {expenses} />
    </div>
      );
  };

export default App;

