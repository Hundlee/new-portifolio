import { GitHubIcon, LinkedinIcon, WhatsAppIcon } from "../Social-Icons";

const Header = () => {
    return (
        <div
            className={`flex justify-between items-center fixed top-0 left-0 w-screen z-10 text-red-800 py-5 pl-8 pr-28 sm:pr-36 backdrop-blur-md`}
        >
            <a
                href="https://docs.google.com/document/d/e/2PACX-1vQ__pn4QIvPQ3niaqKS7bJRChkJbsoaGHQAQDQQHvJwAVNG3B04mYNm30_J4K1NkV3AJtngcM50SBjj/pub"
                target="_blank"
            >
                <button className="border p-3 border-primary text-primary font-semibold rounded-md hover:backdrop-blur-lg animate-slideinleft1s">
                    Currículo
                </button>
            </a>
            <div className="flex gap-5">
                <div className="animate-slideicontop1">
                    <GitHubIcon url="https://github.com/Hundlee" />
                </div>
                <div className="animate-slideicontop2">
                    <LinkedinIcon url="https://www.linkedin.com/in/gabriel-mesquita-9614782b4/" />
                </div>
                <div className="animate-slideicontop3">
                    <WhatsAppIcon url="https://api.whatsapp.com/send/?phone=5585994038930&text=Tenho+interesse+em+seus+servi%C3%A7oes&type=phone_number&app_absent=0" />
                </div>
            </div>
        </div>
    );
};

export default Header;
