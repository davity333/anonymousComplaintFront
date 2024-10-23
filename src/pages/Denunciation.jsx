import React from "react";
import Header from "../components/molecules/header";
import Input from "../components/atoms/Input";
import InputDescription from "../components/atoms/InputDescription";
import privado from "../../public/privado.png";
import Label from "../components/atoms/Label";
import FormDenunciationOrg from "../components/organisms/FormDenunciationOrg";
function Denuntiation() {

    const options = [{ value: 'Calle', label: 'La calle' }, {value: "Domicilio", label: "El domicio"}]
    return (
        <>
    <Header></Header>
       <div className="min-h-screen bg-[#201d1d46]">
    <div className="max-w-screen-sm mx-auto">
    <FormDenunciationOrg></FormDenunciationOrg>
    </div>
</div>

        </>
    )
}

export default Denuntiation;