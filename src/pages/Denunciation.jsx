import React from "react";
import Header from "../components/molecules/header";
import Input from "../components/atoms/Input";
import InputDescription from "../components/atoms/InputDescription";

function Denuntiation() {

    const options = [{ value: 'Calle', label: 'La calle' }, {}]
    return (
        <div className="w-full h-screen">
            <Header />
            <div className="w-full h-full border border-blue-200 flex justify-center items-center">
                <div className="w-[45%] h-[60%] border border-green-200">
                    <div className="w-full h-[10%] flex justify-center items-center">
                        <p>
                            Datos de la denuncia
                        </p>
                    </div>
                    <div className="w-full h-[20%]">
                        <div className="w-full h-[40%] pl-4">
                            <p>
                                Ubicación del incidente
                            </p>
                        </div>
                        <div className="w-full h-[60%] pl-4 flex justify-center items-center">
                            <Input

                            >
                            </Input>
                        </div>
                    </div>
                    <div className="w-full h-[30%] border border-red-600">
                        <div className="w-full h-[20%] pl-4">
                            <p>Descripción detallada</p>
                        </div>
                        <div className="w-full h-[80%]">
                            <InputDescription>
                            </InputDescription>
                        </div>
                    </div>
                    <div className="w-full h-[30%] border border-green-200">
                        <div className="w-full h-1/2 border border-blue-200">
                            <p>Selecciona el lugar</p>
                            <select className="border border-grey-900 pl-4">
                                {
                                    options.map((item, key) => (
                                        <option key={key} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="w-full h-1/2 border border-red-200">
                        <p>Evidencia</p>
                         <input type="submit">
                        </input>
                        </div>
                    </div>
                    <div className="w-full h-[10%] flex justify-center items-center">
                        <button className="w-[90%] h-[90%] bg-[#3C4545]">
                            Enviar denuncia anonima
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Denuntiation;