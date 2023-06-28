import React, { useState } from 'react'

export default function CalculatorWithoutBootstrap() {
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
    //objects for css
    const styleButton={
        width: "60px",  height: "60px", borderRadius: "50%", borderWidth: "1px", backgroundColor: "#ffc4c8", borderColor:"#ffc4c8", margin: "1px 5px 1px 5px", fontWeight: "bold"
    };
    const mainContainer = {
        // backgroundColor: "#dddae1",
        backgroundImage: "linearGradient(45deg, rgb(228 235 235), rgb(161 184 187),#90bbcb)",
         display:"flex", flexDirection:"column", alignItems:"center"
    }
    return (
        <>
            <div className="container my-5 mx-auto" style={mainContainer}>
                <div className=" input-group-lg" style={{position: "relative",display: "flex",flexWrap: "wrap",alignItems: "stretch", margin:"0px 0px 10px 0px"}}>

                    <input type="text" className="form-control" value={screen} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" readOnly />
                </div>
                <div className="" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="" role="group" aria-label="First group">
                        <button type="button" className=" " style={styleButton} onClick={seven}>7</button>
                        <button type="button" className=" " style={styleButton} onClick={eight}>8</button>
                        <button type="button" className=" " style={styleButton} onClick={deleteLastValue}><i className="arrow left"></i></button>
                        <button type="button" className=" " style={styleButton} onClick={clearScreen}>C</button>
                    </div>
                </div>
                <div className="" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="" role="group" aria-label="First group">
                        <button type="button" className=" " style={styleButton} onClick={seven}>7</button>
                        <button type="button" className=" " style={styleButton} onClick={eight}>8</button>
                        <button type="button" className=" " style={styleButton} onClick={nine}>9</button>
                        <button type="button" className=" " style={styleButton} onClick={divide}>/</button>
                    </div>
                </div>
                <div className="" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="" role="group" aria-label="Second group">

                        <button type="button" className=" " style={styleButton} onClick={four}>4</button>
                        <button type="button" className=" " style={styleButton} onClick={five}>5</button>
                        <button type="button" className=" " style={styleButton} onClick={six}>6</button>
                        <button type="button" className=" " style={styleButton} onClick={multiply}>*</button>
                    </div>
                </div>
                <div className="" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="" role="group" aria-label="Third group">
                        <button type="button" className="" style={styleButton} onClick={one}>1</button>
                        <button type="button" className="" style={styleButton} onClick={two}>2</button>
                        <button type="button" className="" style={styleButton} onClick={three}>3</button>
                        <button type="button" className="" style={styleButton} onClick={minus}>-</button>
                    </div>
                </div>
                <div className="" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="" role="group" aria-label="Second group">

                        <button type="button" className="" style={styleButton} onClick={zero}>0</button>
                        <button type="button" className="" style={styleButton} onClick={dot}>.</button>
                        <button type="button" className="" style={styleButton} onClick={calculation}>=</button>
                        <button type="button" className="" style={styleButton} onClick={plus}>+</button>
                    </div>
                </div>
                {/* <div className="container">
                    Result = {answer}
                </div> */}
            </div>


        </>
    )
}

