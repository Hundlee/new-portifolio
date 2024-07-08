import { GitHubIcon, LinkedinIcon, WhatsAppIcon } from "../Social-Icons";

const Header = () => {
    return (
        <div className="flex justify-between fixed top-8 left-10 w-screen z-10 text-red-800 pr-48">
            <h3>curriculo</h3>
            <div className="flex gap-5">
                <GitHubIcon url="https://github.com/Hundlee" />
                <LinkedinIcon url="https://www.linkedin.com/in/gabriel-mesquita-9614782b4/" />
                <WhatsAppIcon url="https://github.com/Hundlee" />
            </div>
        </div>
    );
};

export default Header;
