function HacerDenuncia() {
    return ( 
        <>
            <div className="w-[100%] h-[40vh] 
        bg-[url('fondo.png')] bg-no-repeat bg-cover ">

            
                <div className="flex justify-center text-white text-4xl">
                    <p className="mt-28">Realizar denuncia</p>
                </div>
            
                <div className="flex justify-center mt-4">
                    <select className="border border-gray-300 rounded p-2" id="select-denuncia">
                        <option value="" disabled selected>Seleccione el tipo de denuncia</option>
                        <option value="denuncia1">Denuncia 1</option>
                        <option value="denuncia2">Denuncia 2</option>
                        <option value="denuncia3">Denuncia 3</option>
                    </select>
                8</div>
            </div>
        </>
    );
}

export default HacerDenuncia;