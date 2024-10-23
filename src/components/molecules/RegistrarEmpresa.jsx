import LabelForms from "../atoms/labelForms";
function RegisterEmpresa() {
    return ( 
        <>
    <div className="flex gap-10">
        <div className="flex flex-col">
            <LabelForms labelform={"Nombre de la empresa"}></LabelForms>
            <input type="text" className="border-[0.3vh] w-[44vh]" />
        </div>

        <div className="flex flex-col">
            <LabelForms labelform={"Codigo postal"}></LabelForms>
            <input type="text" className="border-[0.3vh] w-[44vh]" />
        </div>
    </div>

    <div className="flex gap-10 mt-5">
        <div className="flex flex-col">
            <LabelForms labelform={"Nombre del dueño de la empresa"}></LabelForms>
            <input type="text" className="border-[0.3vh] w-[44vh]" />
        </div>

        <div className="flex flex-col">
            <LabelForms labelform={"Horario de servicio"}></LabelForms>
            <input type="text" className="border-[0.3vh] w-[44vh]" />
        </div>
    </div>

    <div className="flex flex-col mt-5">
        <LabelForms labelform={"Ubicación de la empresa"}></LabelForms>
        <input type="text" className="border-[0.3vh] w-[44vh]" />
    </div>

    <button className="bg-slate-800 text-white w-[50vh] mt-5">Agregar empresa</button>

        </>
    );
}

export default RegisterEmpresa;