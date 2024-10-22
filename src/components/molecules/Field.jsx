import { Input } from "postcss";
import Label from "../atoms/Label";


function Field(props) {
    return(
        <div className="">
            <Label>
                {props.text}
            </Label>
            <Input
            val={val}
            fnvl={fnval}
            placeholder={placeholder}
            ></Input>
        </div>
    )
}

export default Field;