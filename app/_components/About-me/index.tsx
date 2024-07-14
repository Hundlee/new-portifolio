"use client";

import React from "react";
import { Separator } from "../ui/separator";
import BackendSkills from "./components/backend-skills";
import FrontEndSkills from "./components/frontend-skins";
import { SlideReveal } from "@/app/animation/slide-reveal";
import { FaArrowRight } from "react-icons/fa";
import { GitHubIcon, LinkedinIcon, WhatsAppIcon } from "../Social-Icons";

const AboutMe = () => {
    return (
        <div
            className="w-screen pl-10 pr-28 flex flex-col  items-center justify-center py-32 md:pl-[5rem] md:pr-[10rem] lg:pl-28 lg:pr-40  xl:pl-40 xl:pr-64 "
            id="sobre-mim"
        >
            <div className="flex w-full items-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mr-10 text-nowrap leading-loose ">
                    Sobre mim
                    <span className="text-primary text-3xl md:text-4xl lg:text-5xl">
                        .
                    </span>
                </h2>
                <Separator className="bg-white opacity-50 " />
            </div>

            <div className="flex flex-col lg:flex-row mt-5 gap-10">
                <div className="font-thin text-xl flex flex-col gap-3">
                    <SlideReveal>
                        <p>
                            Minha experiência abrange desde a criação de
                            interfaces de usuário intuitivas e responsivas até a
                            implementação de soluções back-end escaláveis e
                            seguras. Com um sólido conhecimento em HTML5 e CSS3,
                            tenho a habilidade de transformar designs em
                            realidade, garantindo que cada elemento visual seja
                            perfeitamente renderizado em todos os dispositivos.
                        </p>
                    </SlideReveal>
                    <SlideReveal>
                        <p>
                            Meu domínio em JavaScript, Typescript, e bibliotecas
                            como React JS e NextJs me permite desenvolver
                            aplicações web dinâmicas e interativas, sempre
                            focadas na melhor experiência do usuário.
                        </p>
                    </SlideReveal>
                    <SlideReveal>
                        <p>
                            No back-end, sou apaixonado por construir sistemas
                            eficientes e seguros. Com NodeJs, MongoDB, Fastify e
                            ExpressJs, desenvolvo APIs robustas e gerencio dados
                            de maneira eficaz. Estou sempre em busca de otimizar
                            processos e implementar práticas recomendadas de
                            desenvolvimento para garantir a segurança e a
                            eficiência das aplicações.
                        </p>
                    </SlideReveal>
                    <SlideReveal>
                        <p>
                            Minha dedicação ao desenvolvimento web é refletida
                            na minha vontade constante de aprender e me adaptar
                            às novas tecnologias e tendências do mercado.
                            Acredito que a tecnologia tem o poder de transformar
                            vidas e sou dedicado a contribuir com soluções que
                            fazem a diferença.
                        </p>
                    </SlideReveal>
                    <SlideReveal>
                        <div className="flex items-center gap-4">
                            <h2 className="text-primary font-semibold flex items-center gap-2">
                                Meus Links <FaArrowRight />
                            </h2>
                            <div className="flex gap-5">
                                <div>
                                    <GitHubIcon url="https://github.com/Hundlee" />
                                </div>
                                <div>
                                    <LinkedinIcon url="https://www.linkedin.com/in/gabriel-mesquita-9614782b4/" />
                                </div>
                                <div>
                                    <WhatsAppIcon url="https://api.whatsapp.com/send/?phone=5585994038930&text=Tenho+interesse+em+seus+servi%C3%A7oes&type=phone_number&app_absent=0" />
                                </div>
                            </div>
                        </div>
                    </SlideReveal>
                </div>
                <div className="flex flex-col w-full gap-5">
                    <SlideReveal>
                        <FrontEndSkills />
                    </SlideReveal>
                    <SlideReveal>
                        <BackendSkills />
                    </SlideReveal>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
