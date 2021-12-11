//import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from  './components/NewExpense/NewExpense';


const App =() => {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.02,
      date: new Date(2020,7,14)
    },
    {
      id: 'e2',
      title: 'Macbook',
      amount: 944.02,
      date: new Date(2021,7,20)
    },
    {
      id: 'e3',
      title: 'wacom',
      amount: 100,
      date: new Date(2021,1,8)
    },
    {
      id: 'e4',
      title: 'phone',
      amount: 50,
      date: new Date(2021,2,14)
    }
  ]


  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}/>

    </div>
  );
}

export default App;
