import React, { useState } from 'react'

export default function Calculator() {
    const [screen, setScreen] = useState("");
    const [answer, setAnswer] = useState("");
    const signs = ["+", "-", "*", "/"];
    const signLength = signs.length;

    const checkInput = (value) => {
        if (screen === "") {
            setScreen(value);
        }
        else {
            setScreen(screen + value);
        }
    }
    const calculation = () => {
        // setScreen(eval(screen).toString());
        // setAnswer(eval(screen).toString());

        // -1 if not found for search method
        if(signs.includes(screen.slice(-1))){

        }
        else{
            if (eval(screen).toString().search(".") !== -1) {
                // .toFixed
                setScreen(eval(screen).toFixed(3));
            }
            else {
                setScreen(eval(screen).toString());
            }
        }
        
        // clearScreen();

        // setScreen(answer);
    }
    const checkOps = (sign) => {
        if (screen !== "") {
            if (signs.includes(screen.slice(-1))) {

            }
            else {
                checkInput(sign)
            }
        }
        else{
            setScreen("");
        }

    }


    
    const plus = () => {
        checkOps("+");

    }
    const divide = () => {
        checkOps("/");
    }
    const multiply = () => {
        checkOps("*");
    }
    const minus = () => {
        checkOps("-");
    }
    const clearScreen = () => {
        setScreen("");
    }
    const deleteLastValue = () => {
        setScreen(screen.slice(0, -1));
    }
    const zero = () => {
        checkInput("0");
    }
    const one = () => {
        checkInput("1");
    }
    const two = () => {
        checkInput("2");
    }
    const three = () => {
        checkInput("3");
    }
    const four = () => {
        checkInput("4");
    }
    const five = () => {
        checkInput("5");
    }
    const six = () => {
        checkInput("6");
    }
    const seven = () => {
        checkInput("7");
    }
    const eight = () => {
        checkInput("8");
    }
    const nine = () => {
        checkInput("9");
    }
    const dot = () => {
        checkInput(".");
    }
    return (
        <>
            <div className="container my-5 mx-auto" style={{ width: "500px" }}>
                <div className="input-group input-group-lg">

                    <input type="text" className="form-control" value={screen} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" readOnly />
                </div>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group btn-group-lg me-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-primary " onClick={seven}>7</button>
                        <button type="button" className="btn btn-primary " onClick={eight}>8</button>
                        <button type="button" className="btn btn-primary " onClick={deleteLastValue}><i className="arrow left"></i></button>
                        <button type="button" className="btn btn-primary " onClick={clearScreen}>C</button>
                    </div>
                </div>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group btn-group-lg me-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-primary " onClick={seven}>7</button>
                        <button type="button" className="btn btn-primary " onClick={eight}>8</button>
                        <button type="button" className="btn btn-primary " onClick={nine}>9</button>
                        <button type="button" className="btn btn-primary " onClick={divide}>/</button>
                    </div>
                </div>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group btn-group-lg me-2" role="group" aria-label="Second group">

                        <button type="button" className="btn btn-secondary " onClick={four}>4</button>
                        <button type="button" className="btn btn-secondary " onClick={five}>5</button>
                        <button type="button" className="btn btn-secondary " onClick={six}>6</button>
                        <button type="button" className="btn btn-secondary " onClick={multiply}>*</button>
                    </div>
                </div>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group btn-group-lg" role="group" aria-label="Third group">
                        <button type="button" className="btn btn-info" onClick={one}>1</button>
                        <button type="button" className="btn btn-info" onClick={two}>2</button>
                        <button type="button" className="btn btn-info" onClick={three}>3</button>
                        <button type="button" className="btn btn-info" onClick={minus}>-</button>
                    </div>
                </div>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group btn-group-lg me-2" role="group" aria-label="Second group">

                        <button type="button" className="btn btn-secondary" onClick={zero}>0</button>
                        <button type="button" className="btn btn-secondary" onClick={dot}>.</button>
                        <button type="button" className="btn btn-secondary" onClick={calculation}>=</button>
                        <button type="button" className="btn btn-secondary" onClick={plus}>+</button>
                    </div>
                </div>
                <div className="container">
                    Result = {answer}
                </div>
            </div>


        </>
    )
}

