import React from "react";

function Input(props) {

    const handlerChange = (event) => { 
        props.fnval(event.target.value); 
    }

    return(
        <input className="w-30 h-9 border boredr-red-200" onChange={handlerChange} value={props.val}></input>
    )
 }

 export default Input; 