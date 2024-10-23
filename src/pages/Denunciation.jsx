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
        <FormDenunciationOrg></FormDenunciationOrg>
        </>
    )
}

export default Denuntiation;