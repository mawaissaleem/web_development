import React,{useState, useEffect} from 'react'
import AddTransaction from './AddTransaction'
import ExpenseOverview from './ExpenseOverview'
import History from './History'
import "./Expense.css";
import { useOnKeyPress } from '../../hooks/useOnKeyPress';




export default function Expense() {
  // let inputValues = {transactionvalue:false, amountvalue:false, incomeexpensevalue:false};
  // making states
  const [transactionReason, setTransactionReason] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [incomeSelect, setIncomeSelect] = useState(false);
  const [expenseSelect, setExpenseSelect] = useState(false);
  const [dropBtnVal, setDropBtnVal] = useState("Income/Expense");
  const [transaction, setTransaction] = useState([]);
  const [incomeExpense, setIncomeExpense] = useState([]);
  const [amount, setAmount] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);

  // handling onchange of input tags
  const addTransChange = (event) => {
    setTransactionReason(event.target.value)
};
const amountChange = (event) => {
    setTransactionAmount(event.target.value)
};

// const onOptionClicked = value => () => {
//     setSelectedOption(value);
//     setIsOpen(false);
//     console.log(selectedOption);
// };

// onclick function to check whether income is selected from dropdown or not and setting income as true and expense as false.
const incomeDrop = () => {
    setIncomeSelect(true);
    setExpenseSelect(false);
    setDropBtnVal("Income");
    console.log(incomeSelect,expenseSelect);
}
// same as above but checking for expense.
const expenseDrop = () => {
    setExpenseSelect(true);
    setIncomeSelect(false);
    setDropBtnVal("Expense");
    console.log(incomeSelect,expenseSelect);
}
// onclick function of btn to submit the transaction. setting and concatinating the transactions, amount and income/expense.
// incomeExpense is true when income is selected otherwise false.
const submitTransaction = () => {
  setFormErrors(validateForm());
  setIsSubmit(true);
  // setInputValues({transactionvalue:true, amountvalue:false, incomeexpensevalue:false})
  // console.log(inputValues.transactionvalue)

  // if (inputValues.transactionvalue===false && inputValues.amountvalue===false && inputValues.incomeexpensevalue===false){
  //   setTransaction([...transaction,transactionReason])
  //   setAmount([...amount,transactionAmount]);
  //   setIncomeExpense([...incomeExpense,incomeSelect]);
  //   setTransactionReason("");
  //   setTransactionAmount("");
  //   setDropBtnVal("Income/Expense");
  // }
  

};
useEffect(()=>{
  // console.log(inputValues)
  if (formErrors.transactionvalue===false && formErrors.amountvalue===false && formErrors.incomeexpensevalue===false && isSubmit===true){
    setTransaction([...transaction,transactionReason])
    setAmount([...amount,transactionAmount]);
    setIncomeExpense([...incomeExpense,incomeSelect]);
    setTransactionReason("");
    setTransactionAmount("");
    setDropBtnVal("Income/Expense");
  }
  setIsSubmit(false);
},[formErrors,amount,incomeExpense,incomeSelect,transaction,transactionAmount,transactionReason,isSubmit])
// function for form validation
const validateForm = () =>{
  let errors={};
  if (transactionReason.length<3){
    errors.transactionvalue=true;
  }
  else{
    errors.transactionvalue=false;
  }
  if (isNaN(parseInt(transactionAmount))){
    errors.amountvalue=true;
  }
  else{
    errors.amountvalue=false;
  }
  if (dropBtnVal==="Income/Expense"){
    errors.incomeexpensevalue=true;
  }
  else{
    errors.incomeexpensevalue=false;
  }
  return errors;
}
// onclick for delete btn 
const deleteItem = (id) => {
  setAmount((amount) => {
    return amount.filter((amount,index)=>{
      return id !== index
    })
  })
  setTransaction((transaction) => {
    return transaction.filter((transaction,index)=>{
      return id !== index
    })
  })
  setIncomeExpense((incomeExpense) => {
    return incomeExpense.filter((incomeExpense,index)=>{
      return id !== index
    })
  })
}

// press enter to submit the transaction using hooks(useEffect)
useOnKeyPress(submitTransaction,"Enter");
  return (
    <>
    <div className='container main-expense-section'>
    <ExpenseOverview amount={amount} incomeExpense={incomeExpense}></ExpenseOverview>
    <History hisamount={amount} histransaction={transaction} hisincomeexpense={incomeExpense} del = {deleteItem} ></History>
    <AddTransaction trans={transactionReason} amount={transactionAmount} inselect={incomeSelect} expselect={expenseSelect} dropdown={dropBtnVal} transchange={addTransChange} totalamountchange={amountChange} incomedropdown={incomeDrop} expensedropdown={expenseDrop} submittransaction={submitTransaction} formErrors={formErrors}></AddTransaction>
    </div>
    </>
  )
}
