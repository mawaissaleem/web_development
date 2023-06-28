import React from 'react'
import "./AddTransaction.css"
export default function AddTransaction(props) {
    // const [transactionReason, setTransactionReason] = useState("");
    // const [transactionAmount, setTransactionAmount] = useState(0);
    // const [incomeSelect, setIncomeSelect] = useState(false);
    // const [expenseSelect, setExpenseSelect] = useState(false);
    // const [dropBtnVal, setDropBtnVal] = useState("Income/Expense");


    // const addTransChange = (event) => {
    //     setTransactionReason(event.target.value)
    // };
    // const amountChange = (event) => {
    //     setTransactionAmount(event.target.value)
    // };

    // // const onOptionClicked = value => () => {
    // //     setSelectedOption(value);
    // //     setIsOpen(false);
    // //     console.log(selectedOption);
    // // };
    // const incomeDrop = () => {
    //     setIncomeSelect(true);
    //     setExpenseSelect(false);
    //     setDropBtnVal("Income");
    //     console.log(incomeSelect,expenseSelect);
    // }
    // const expenseDrop = () => {
    //     setExpenseSelect(true);
    //     setIncomeSelect(false);
    //     setDropBtnVal("Expense");
    //     console.log(incomeSelect,expenseSelect);
    // }
    const checkFormErrors = (obj) => {
        if (Object.keys(obj).length != 0) {
            if (obj.transactionvalue === false && obj.amountvalue === false && obj.incomeexpensevalue === false) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
        // return Object.keys(obj).length === 0;
    }
    return (
        <>
            <div className='add-transaction-section container d-flex flex-column align-items-start'>
                <h3 className='text-white'>Add Transaction</h3>
                <div className='d-flex justify-content-center align-items-center '>
                    <div>
                        
                        
                        <input className='add-trans-input font-weight-bold' type="text" placeholder='Add transaction' onChange={props.transchange} value={props.trans}></input>
                        <i className="fa-solid fa-circle-info info-btn trns-amnt-icon"></i>
                        <span className="trns-amnt-help-txt">Add the reason of transaction. i.e Food, Grocery, Salary</span>
                    </div>
                    <div class="dropdown">
                    
                        <button className='dropdown-btn font-weight-bold'>{props.dropdown}</button>
                        <div class="dropdown-content">
                            {/* <a href="https://blog.hubspot.com/">Blog</a>
                        <a href="https://academy.hubspot.com/">Academy</a> */}
                            <li className='font-weight-bold' onClick={props.incomedropdown}>Income</li>
                            <li className='font-weight-bold' onClick={props.expensedropdown} >Expense</li>
                        </div>
                        <i className="fa-solid fa-circle-info info-btn inex-icon"></i>
                    <span className="inex-help-txt">Select whether you spent or earned money</span>

                    </div>
                </div>
                {/* <p className='text-red error' style={{display: props.inputValues.transactionvalue ? "block" : "none"}}>Enter amount</p> */}
                {/* <p className='text-red error' style={{display: props.inputValues.amountvalue ? "block" : "none"}}>Enter amount</p> */}
                <div>
                
                <input className='add-amount-input font-weight-bold' type="number" placeholder='amount' onChange={props.totalamountchange} value={props.amount}></input>
                <i className="fa-solid fa-circle-info info-btn amnt-icon"></i>
                <span className="amnt-help-txt">Enter amount(USD)</span>
                </div>
                
                {/* <p className='text-red error' style={{display: props.inputValues.incomeexpensevalue ? "block" : "none"}}>Enter amount</p> */}
                {checkFormErrors(props.formErrors) && <div>
                    <p className='text-red'>Please fill the form</p>
                </div>}
                <div>
                    <button className='btn  add-trans-submit-btn font-weight-bold' onClick={props.submittransaction}>Submit</button>
                </div>
            </div>
        </>
    )
}
