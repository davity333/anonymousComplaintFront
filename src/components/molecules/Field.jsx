import Input from "../atoms/Input";
import Label from "../atoms/Label";


function Field(props) {
    return(
        <div className="w-full h-1/4 border boder-green-600 flex flex-col">
            <Label
            text={props.text}
            >
            </Label>
            <Input
            val={props.val}
            fnval={props.fnval}
            ></Input>
        </div>
    )
}

export default Field;