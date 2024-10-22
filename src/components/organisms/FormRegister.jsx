import Button from "../atoms/Button";
import TitleForm from "../atoms/TitleForm";
import Field from "../molecules/Field";
import FieldName from "../molecules/FieldName";
import FieldRegister from "../molecules/FieldRegister";


function FormRegister() {
    return (
        <form className="w-1/4 h-3/5 bg-[#000000CC] flex-col rounded-lg">
            <div className="w-full h-1/4 flex justify-center items-center">
                <TitleForm
                    title="Register"
                ></TitleForm>
            </div>
            <div className="w-full h-[25%] flex justify-center items-center">
                <FieldName
                    title={"Primer Nombre"}
                >
                </FieldName>
                <FieldName
                    title={"Segundo nombre"}
                ></FieldName>
            </div>
            <FieldRegister>
            </FieldRegister>
            <FieldRegister>
            </FieldRegister>
            <div className="w-full h-[20%] flex justify-center items-center">
                <Button>
                </Button>
            </div>
        </form>
    )
}

export default FormRegister;