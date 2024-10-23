import { useRef, useState } from "react";
import Button from "../atoms/Button";
import TitleForm from "../atoms/TitleForm";
import Field from "../molecules/Field";
import FieldName from "../molecules/FieldName";
import FieldRegister from "../molecules/FieldRegister";
import CryptoJS from "crypto-js";

function FormRegister() {
    
    const [name, setName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const encrypt = () => {
        let encryptedPassword = CryptoJS.AES.encrypt(password, "regiber123").toString();

    }

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
            <FieldRegister
                val={email}
                fnval={setEmail}
            >
            </FieldRegister>
            <FieldRegister
                val={password}
                fnval={setPassword}
            >
            </FieldRegister>
            <div className="w-full h-[20%] flex justify-center items-center">
                <Button>
                </Button>
            </div>
            <button onClick={() => encrypt()}>awea</button>
        </form>
    )
}

export default FormRegister;