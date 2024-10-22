import Field from "../molecules/Field";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import TitleForm from "../atoms/TitleForm";
import { useNavigate } from "react-router-dom";

function Form() {
    const navigate = new useNavigate(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    
    const navigateRegister = () => {
        navigate(["/"])
    }

    const login = () => {
    }

    useEffect(() => {
        login()
    }, [])

    return (
        <form className="w-1/4 h-1/2 bg-[#000000CC] flex-col rounded-lg">
            <div className="w-full h-1/4 flex justify-center items-center">
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
            <div className="w-full h-[35%] flex items-center justify-center flex-col">
                <div className="w-full h-1/2 flex justify-center items-end">
                    <Button></Button>
                </div>
                <div className="w-full h-1/2 flex justify-center items-center">
                    <Label text="¿Aun no tienes una cuenta?">
                    </Label>
                    <label className="p-2 text-red-400" onClick={() => navigateRegister}>
                        Registarte
                    </label>
                </div>
            </div>
        </form>
    )
}

export default Form; 