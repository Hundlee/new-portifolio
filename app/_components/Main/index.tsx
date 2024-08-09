"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import { PointCircle } from "./components/point-circle";
import { Button } from "../ui/button";
import { OrbitControls } from "@react-three/drei";
import DynamicText from "./components/dynamic-Text";

const Main = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <Canvas
                camera={{
                    position: [10, -7.5, -5],
                }}
                className="bg-background"
            >
                <directionalLight />
                <OrbitControls maxDistance={20} minDistance={10} />
                <pointLight position={[-30, 0, -30]} power={20.0} />
                <PointCircle />
            </Canvas>

            <div className="absolute top-[50%] left-[40%] -translate-x-[50%] -translate-y-[50%]">
                <div className="animate-slideintop1s gap-3 flex flex-col">
                    <h1 className="text-white font-bold text-3xl md:text-6xl pointer-events-none select-none">
                        Olá, Meu nome é Gabriel Mesquita
                        <span className="text-primary text-3xl md:text-7xl">
                            .
                        </span>
                    </h1>

                    <DynamicText />

                    <h2 className="font-thin text-foreground text-xl select-none">
                        <span>
                            Sou desenvolvedor full-stack. Amo o que faço e me
                            esforço continuamente para crescer no mundo da
                            tecnologia. Dedico-me a criar e aprimorar códigos,
                            sempre buscando a excelência em cada projeto.
                        </span>
                    </h2>

                    <a href="#contato">
                        <Button className="p-5 bg-primary w-fit rounded-sm">
                            Contato
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Main;
