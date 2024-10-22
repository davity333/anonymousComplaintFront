import React from "react";

function Input(props) {

    const handlerChange = (event) => {
        props.fnval(event.target.value);
    }

    return (
        <input className="w-[90%] h-9 bg-[#FFFFFF47] rounded-sm" onChange={handlerChange} value={props.val}></input>
    )
}

export default Input; 