import Logo from "./components/logo";
import Sections from "./components/sections";

const NavBar = () => {
    return (
        <div className="fixed z-30 h-screen w-20 right-0 top-0 bg-secondary flex flex-col items-center ">
            <Logo />

            <div className="mt-60">
                <Sections />
            </div>
        </div>
    );
};

export default NavBar;
