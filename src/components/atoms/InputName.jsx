import React from "react";

function InputName(props) {

    const handlerChange = (event) => {
        props.fnval(event.target.value)
    }

    return( 
        <input fnval={props.fnval} value={props.val} onChange={handlerChange} 
        className="w-[80%] h-8 bg-[#FFFFFF47] rounded-lg text-white">
        </input>
    )
}

export default InputName;