import LabelForms from "../atoms/labelForms";
function FormDenunciation() {
    return ( 
    <>    
        <form className="bg-slate-300 w-[70vh]"> 
            <h1 className="text-[2.3vh] font-semibold text-[#00000074] 
            text-center py-5 pl-5 pr-5">Datos de la denuncia</h1>

            <div className="flex flex-col mt-5">
            <LabelForms labelform={"Datos del incidente"}></LabelForms>
            <input type="text" className="border-[0.1vh] border-[#0000005b] h-8 w-[40vh] mt-2"/>
            </div>

            <div className="flex flex-col">
            <LabelForms labelform={"Descripción detallada"}></LabelForms>
            <textarea name="" id="" className="border-[0.1vh] border-[#0000005b] 
            h-28 w-[40vh] mt-2"></textarea>
            </div>

            <div className="flex flex-col">
            <LabelForms labelform={"Seleccione el lugar"}></LabelForms>
            <select name="" id="" class="w-[30vh]">
                <option value="saddam" key="fdfd">Saddam</option>
            </select>
            </div>

            <div className="flex flex-col">
            <LabelForms labelform={"Evidencia(opcional)"}></LabelForms>
            <input type="file" />
            </div>
            
        </form>
    </> 
    );
}

export default FormDenunciation;