import { SlideReveal } from "@/app/animation/slide-reveal";
import { MdOutlineEmail } from "react-icons/md";

const Contato = () => {
    return (
        <footer
            className="py-32 lg:py-80 flex justify-center text-center"
            id="contato"
        >
            <div className="flex flex-col justify-center items-center gap-4 pl-10 pr-28 sm:pl-10 sm:pr-28 md:pl-[5rem] md:pr-[10rem] lg:pl-28 lg:pr-40 xl:pl-40 xl:pr-64 ">
                <SlideReveal>
                    <h1 className="text-5xl sm:text-8xl font-bold">
                        Contato
                        <span className="text-primary text-5xl sm:text-8xl">
                            .
                        </span>
                    </h1>
                </SlideReveal>
                <SlideReveal>
                    <div className="flex items-center justify-center">
                        <p className="text-center font-thin text-lg sm:text-xl">
                            Envie-me um e-mail se quiser me contratar! Você
                            também pode me encontrar no{" "}
                            <a
                                href="https://www.linkedin.com/in/gabriel-mesquita-9614782b4/"
                                className="text-primary font-semibold"
                                target="_blank"
                            >
                                Linkedin
                            </a>{" "}
                            ou no{" "}
                            <a
                                href="https://api.whatsapp.com/send/?phone=5585994038930&text=Tenho+interesse+em+seus+servi%C3%A7oes&type=phone_number&app_absent=0"
                                className="text-primary font-semibold"
                                target="_blank"
                            >
                                Whatsapp
                            </a>
                            , se essa for a sua preferência.
                        </p>
                    </div>
                </SlideReveal>
                <div>
                    <SlideReveal>
                        <a
                            href="mailto:mesquitag884@gmail.com"
                            className="flex items-center gap-2 hover:text-primary cursor-pointer"
                        >
                            <MdOutlineEmail className="w-6 h-6" />
                            <h3 className="text-base sm:text-xl">
                                mesquitag884@gmail.com
                            </h3>
                        </a>
                    </SlideReveal>
                </div>
            </div>
        </footer>
    );
};

export default Contato;
