

function Input(props) {

    const handlerChange = (event) => {
        props.fnval(event.target.value); 
    }

    return(
        <input onChange={handlerChange} value={props.val}></input>
    )
 }

 export default Input; 