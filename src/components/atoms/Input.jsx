

function Input(props) {

    const handlerChange = (event) => {
        props.fnval(event.target.value); 
    }

    return(
        <input className="" onChange={handlerChange} value={props.val} placeholder={props.placeholder}></input>
    )
 }

 export default Input; 