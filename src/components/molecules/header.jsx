import logo from "../../../public/logo.png"
import { useNavigate } from "react-router-dom/dist";
function Header() {
    const navegar = new useNavigate();

    const click = () =>{
        navegar('/house')
    }

    return (
        <>
            <header className="h-auto w-full bg-[#ffffff] flex justify-between items-center drop-shadow-md text-[2.4vh]">
                <img onClick={click} src={logo} alt="" className="h-[10vh] " />
                <p className="opacity-55">Oficiales</p>
                <p className="opacity-55">Puntos de denuncia</p>

                <div className="flex gap-9 mr-5 items-center">
                    <p className="opacity-55"><a href={"./"}>Inciar sesión</a></p>
                    <p className="bg-[#C9D8F1] opacity-55 px-8 py-2 rounded-md"><a href={'./Register'}>Registrarse</a></p>
                </div>
            </header>
        </>
    );
}
export default Header;