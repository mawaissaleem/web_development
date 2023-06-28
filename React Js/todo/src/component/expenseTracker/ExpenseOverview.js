import React from 'react'
import './ExpenseOverview.css'

export default function ExpenseOverview(props) {
    // initialising variables
    let pendingBalance = 0;
    let incomeExpense=props.incomeExpense
    let amount = props.amount;

    // function for calculating total income transactions
    function calcincome(incomeExpense, amount){
        let totalIncome = 0;
        incomeExpense.forEach((element,index) => {
            if(element === true){
                totalIncome = totalIncome + parseInt(amount[index])
            }
            
        })
        return totalIncome;
    }

    // function for calculating total expenses transactions
    function calcexpense(incomeExpense, amount){
        let totalExpense = 0;
        incomeExpense.forEach((element,index) => {
            if(element === false){
                totalExpense = totalExpense + parseInt(amount[index]);
            }
            
        })
        return totalExpense;
    }

    // function to show the total balance
    function totalBalance(incomeExpense,amount){
        pendingBalance = calcincome(incomeExpense,amount) - calcexpense(incomeExpense,amount);
        // balance remaining = income - expense
        
        return pendingBalance;
    }

  return (
    <>
        <h1 className='text-center text-white'>Expense Tracker</h1>
        <div className='container '>
            
            <div className='d-flex flex-column align-items-start'>
                <h3 className='text-white'>
                    Balance
                </h3>
                <h2 style={{color: totalBalance(incomeExpense,amount)>=0 ? "#BAFF39" : "red"}}>$ {totalBalance(incomeExpense,amount)}</h2>
            </div>
            <div className='d-flex flex-wrap'>
                <span className='income-span d-flex flex-column '>
                    <span className='income-heading text-white'>Income</span>
                    <span className='income-dollars text-green'>$ {calcincome(incomeExpense,amount)} </span>
                </span>
                <span className='expense-span d-flex flex-column '>
                    <span className='expense-heading text-white'>Expense</span>
                    <span className='expense-dollars text-red'>${ calcexpense(incomeExpense,amount)}</span>
                </span>
            </div>
        </div>
    </>
  )
}
