import Header from "../components/molecules/header";
import RegistrarEmpresa from "../components/molecules/RegistrarEmpresa";

function Empresa() {
    return ( 
        <>
        <Header></Header>
        <div className="p-10">
            <div className="flex justify-center">
                <p className="text-[3.4vh]">Registrar empresa</p>
            </div>

            <div className="flex justify-center text-[2.3vh] font-light">
                <p>Ingrese los datos de la empresa para registrarlo en el sistema.</p>
            </div>
        </div>
        
        <div className="bg-slate-300">
        <RegistrarEmpresa ></RegistrarEmpresa>
        </div>
        </>
    );
}

export default Empresa;