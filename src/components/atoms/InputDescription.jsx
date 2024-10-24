


function InputDescription(props) {

    const handlerChange = (event) => {
        props.fnval(event.target.value)
    }
    return(
        <input
        className="w-[90%] h-[90%] border border-silver-200 rounded-sm"
        value={props.val}
        onChange={handlerChange}
        >
        </input>
    )
}

export default InputDescription;