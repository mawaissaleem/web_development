import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import ToDo from './component/todo/ToDo';
import Expense from './component/expenseTracker/Expense';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/todo' element={<ToDo />}></Route>
      <Route exact path='/expense' element={<Expense />}></Route>


      {/* <Navbar></Navbar>
      <ToDo></ToDo>
      <Expense></Expense> */}
      </Routes>
    </>
  );
}

export default App;
