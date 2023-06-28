import React from 'react'
import "./History.css";
export default function History(props) {
    const checkIncomeExpense = (index) => {
        if(props.hisincomeexpense[index] === false){
            return "-"
        }
        else{
            return ""
        }
    }
    return (
        <>
            <div className='container history-section'>
                <h3 className='text-white'>History</h3>
                {
                    props.histransaction.map((transaction, index) => {
                        return <>
                            <div className='d-flex  align-items-center history-strip ' style={{borderRight: props.hisincomeexpense[index] ? "10px solid white" : "10px solid red"}}>
                                <p className='history-trans font-weight-bold'>{transaction}</p>
                                <p className='history-trans-amount font-weight-bold'>${checkIncomeExpense(index)}{props.hisamount[index]}</p>
                                <i className="fa-solid fa-trash history-del-icon font-weight-bold" onClick={() => {
                                    props.del(index)
                                }}></i>
                            </div>
                        </>
                    })
                }
                {/* <div className='d-flex'>
                <p>cash</p>
                <p>$329</p>
            </div> */}
                {/* <div className='d-flex'>
                <p>food</p>
                <p>$32</p>
            </div>
            <div className='d-flex'>
                <p>water</p>
                <p>$3</p>
            </div> */}
            </div>
        </>
    )
}
