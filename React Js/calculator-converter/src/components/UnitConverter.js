import React, { useState } from 'react'

export default function UnitConverter() {
    const [selectUnit, setSelectUnit] = useState(false);
    const [changeDropDownUnits, setChangeDropDownUnits] = useState([""]);
    const [changeSelectDD, setChangeSelectDD] = useState("Select Unit");
    const [changeSelectDD1, setChangeSelectDD1] = useState("Select Unit");
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const measurementTypeL = () => {
        console.log("butoon pressed");
        setSelectUnit(true);
        setChangeDropDownUnits(["Milimeters", "Centimeters", "Meters"]);
    }
    const measurementTypeT = () => {
        console.log("button pressed");
        setSelectUnit(true);
        setChangeDropDownUnits(["Kelvin", "Celcuis", "Farenheight"]);
    }
    const measurementTypeW = () => {
        console.log("butoon pressed");
        setSelectUnit(true);
        setChangeDropDownUnits(["Gram", "Kilogram", "Pound"]);
    }
    const changeUnit0 = () => {
        setChangeSelectDD(changeDropDownUnits[0]);
    }
    const changeUnit1 = () => {
        setChangeSelectDD(changeDropDownUnits[1]);
    }
    const changeUnit2 = () => {
        setChangeSelectDD(changeDropDownUnits[2]);
    }
    const changeUnit00 = () => {
        setChangeSelectDD1(changeDropDownUnits[0]);
    }
    const changeUnit01 = () => {
        setChangeSelectDD1(changeDropDownUnits[1]);
    }
    const changeUnit02 = () => {
        setChangeSelectDD1(changeDropDownUnits[2]);
    }
    const handleOnChangeInput1 = (event) => {
        setInput1(event.target.value)
    }
    const handleOnChangeInput2 = (event) => {
        setInput2(event.target.value)
    }
    const solve = () => {
        if (changeSelectDD === "Milimeters" && changeSelectDD1 === "Centimeters") {
            setInput2(Number(input1) / 10);
        }
        else if (changeSelectDD === "Milimeters" && changeSelectDD1 === "Meters") {
            setInput2(Number(input1) / 1000);
        }
        else if (changeSelectDD === "Centimeters" && changeSelectDD1 === "Meters") {
            setInput2(Number(input1) / 100);
        }
        else if (changeSelectDD === "Centimeters" && changeSelectDD1 === "Milimeters") {
            setInput2(Number(input1) * 10);
        }
        else if (changeSelectDD === "Meters" && changeSelectDD1 === "Milimeters") {
            setInput2(Number(input1) * 1000);
        }
        else if (changeSelectDD === "Meters" && changeSelectDD1 === "Centimeters") {
            setInput2(Number(input1) * 100);
        }
        else if (changeSelectDD === "Kelvin" && changeSelectDD1 === "Celcuis") {
            setInput2(Number(input1) - 273);
        }
        else if (changeSelectDD === "Kelvin" && changeSelectDD1 === "Farenheight") {
            setInput2(((Number(input1) - 273) * 1.8) + 32);
        }
        else if (changeSelectDD === "Celcuis" && changeSelectDD1 === "Kelvin") {
            setInput2(Number(input1) + 273);
        }
        else if (changeSelectDD === "Celcuis" && changeSelectDD1 === "Farenheight") {
            setInput2(((Number(input1) * 1.8) + 32));
        }
        else if (changeSelectDD === "Farenheight" && changeSelectDD1 === "Celcuis") {
            setInput2(((Number(input1) - 32) * 0.555));
        }
        else if (changeSelectDD === "Farenheight" && changeSelectDD1 === "Kelvin") {
            setInput2((((Number(input1) - 32) * 0.555) + 273));
        }
        else { }


    }

    return (
        <>
            <div className='container'>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Select measurement type
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" onClick={measurementTypeL} href="#">Length</a></li>
                        <li><a className="dropdown-item" onClick={measurementTypeT} href="#">Temperature</a></li>
                        <li><a className="dropdown-item" onClick={measurementTypeW} href="#">Weight</a></li>
                    </ul>
                </div>

                {/* select unit buttons */}
                {selectUnit && <div>
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {changeSelectDD}
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" onClick={changeUnit0} href="#">{changeDropDownUnits[0]}</a></li>
                            <li><a className="dropdown-item" onClick={changeUnit1} href="#">{changeDropDownUnits[1]}</a></li>
                            <li><a className="dropdown-item" onClick={changeUnit2} href="#">{changeDropDownUnits[2]}</a></li>
                        </ul>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {changeSelectDD1}
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" onClick={changeUnit00} href="#">{changeDropDownUnits[0]}</a></li>
                            <li><a className="dropdown-item" onClick={changeUnit01} href="#">{changeDropDownUnits[1]}</a></li>
                            <li><a className="dropdown-item" onClick={changeUnit02} href="#">{changeDropDownUnits[2]}</a></li>
                        </ul>
                    </div>
                    <div>
                        <input type="text" value={input1} onChange={handleOnChangeInput1} className="" id="basic-url" aria-describedby="basic-addon3" />

                        <input type="text" value={input2} onChange={handleOnChangeInput2} className="" id="basic-url" aria-describedby="basic-addon3" />
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={solve}>Calculate</button>
                    </div>
                </div>
                }



            </div>
        </>
    )
}
