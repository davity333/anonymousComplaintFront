import Field from "../molecules/Field";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import TitleForm from "../atoms/TitleForm";

function Form() {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const login = () => { 
    }

    useEffect(() => {
        login()
    }, [])

    return(     
        <form className="w-1/4 h-1/2 bg-[#000000CC] flex-col rounded-lg">
            <div className="w-full h-1/4 border border-red-400 flex justify-center items-center">
            <TitleForm
            title="Iniciar sesión"
            ></TitleForm>
            </div>
            <Field
            text={"email de una persona"}
            val={email}
            fnval={setEmail}
            >
            </Field>
            <Field
            text={"Password de la persona"}
            val={password}
            fnval={setPassword}
            >
            </Field>
            <div className="w-full h-1/4 border border-red-200  flex items-center justify-center">
                <Button>

                </Button>
            </div>
        </form>
    )
}

export default Form; 