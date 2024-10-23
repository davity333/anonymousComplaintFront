import React, { useEffect, useState } from "react";
import { Gauge } from "@mui/x-charts";

function Estadisticas() {
    const [numero, setNumero] = useState(0);

    const calcular = () => {
        let persons = [];
        fetch("")
            .then((data) => {
                data = persons;
            })

        function returnaData(persons) {
            let suma = 0;
            for (let index = 0; index < persons.length; index++) {
                suma += persons[index];
            }
        }
        returnaData(persons)
    }
    
    useEffect(() => {
        fetch("", {
            method: 'GET',
        })
        .then((data) => {
            for(let index; index < data.length; index++) {
                setNumero(amount => amount + data[index]); 
            }
        })
    })

    return (
        <>
            <div className="flex justify-center p-8 text-[3vh]">
                <p>Estadisticas de denuncias mas comunes</p>
            </div>
            <div className="w-full flex items-center justify-center">
                <Gauge
                    width={200}
                    height={200}
                    value={numero}
                >
                </Gauge>
                <Gauge
                    width={200}
                    height={200}
                    value={75}
                ></Gauge>
                <Gauge
                    width={200}
                    height={200}
                    value={75}
                ></Gauge>
            </div>
        </>
    );
}

export default Estadisticas;