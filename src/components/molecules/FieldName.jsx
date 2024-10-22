import InputName from "../atoms/InputName";
import Label from "../atoms/Label";


function FieldName(props) {
    return (
        <div className="w-full h-full">
            <div className="w-full h-[35%] flex justify-start items-center pl-5">
                <Label
                text={props.title}
                ></Label>
            </div>
            <div className="w-full h-[65%]  flex justify-center items-center">
                <InputName
                val={props.val}
                fnval={props.fnval}
                ></InputName>
            </div>
        </div>
    )
}

export default FieldName; 