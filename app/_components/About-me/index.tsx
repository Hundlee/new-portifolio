"use client";

import React from "react";
import { Separator } from "../ui/separator";
import BackendSkills from "./components/backend-skills";
import FrontEndSkills from "./components/frontend-skins";

const AboutMe = () => {
    return (
        <div
            className="w-screen pl-10 pr-24 flex flex-col  items-center justify-center my-32 lg:px-40 "
            id="sobre-mim"
        >
            <div className="flex w-full items-center">
                <h2 className="text-5xl font-bold mr-10 text-nowrap leading-loose">
                    Sobre mim<span className="text-primary text-6xl">.</span>
                </h2>
                <Separator className="bg-white opacity-50 hidden lg:block" />
            </div>

            <div className="flex flex-col lg:flex-row mt-5 gap-10">
                <div className="font-thin text-xl flex flex-col gap-3">
                    <p>
                        Minha experiência abrange desde a criação de interfaces
                        de usuário intuitivas e responsivas até a implementação
                        de soluções back-end escaláveis e seguras. Com um sólido
                        conhecimento em HTML5 e CSS3, tenho a habilidade de
                        transformar designs em realidade, garantindo que cada
                        elemento visual seja perfeitamente renderizado em todos
                        os dispositivos.
                    </p>
                    <p>
                        Meu domínio em JavaScript, Typescript, e bibliotecas
                        como React JS e NextJs me permite desenvolver aplicações
                        web dinâmicas e interativas, sempre focadas na melhor
                        experiência do usuário.
                    </p>
                    <p>
                        No back-end, sou apaixonado por construir sistemas
                        eficientes e seguros. Com NodeJs, MongoDB, Fastify e
                        ExpressJs, desenvolvo APIs robustas e gerencio dados de
                        maneira eficaz. Estou sempre em busca de otimizar
                        processos e implementar práticas recomendadas de
                        desenvolvimento para garantir a segurança e a eficiência
                        das aplicações.
                    </p>
                    <p>
                        Minha dedicação ao desenvolvimento web é refletida na
                        minha vontade constante de aprender e me adaptar às
                        novas tecnologias e tendências do mercado. Acredito que
                        a tecnologia tem o poder de transformar vidas e sou
                        dedicado a contribuir com soluções que fazem a
                        diferença.
                    </p>
                </div>
                <div className="flex flex-col w-full gap-5">
                    <FrontEndSkills />
                    <BackendSkills />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
