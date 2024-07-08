import { Canvas } from "@react-three/fiber";
import React from "react";
import { PointCircle } from "./components/point-circle";
import MainDescription from "./components/main-description";
import { Button } from "../ui/button";
import { OrbitControls } from "@react-three/drei";

const Main = () => {
    return (
        <div className="relative h-screen overflow-y-auto">
            <Canvas
                camera={{
                    position: [10, -7.5, -5],
                }}
                className="bg-background"
            >
                <directionalLight />
                <pointLight position={[-30, 0, -30]} power={10.0} />
                <PointCircle />
            </Canvas>

            <div className="absolute top-[50%] left-[40%] -translate-x-[50%] -translate-y-[50%]">
                <div className="animate-slidein gap-3 flex flex-col">
                    <h1 className="text-white font-bold text-6xl pointer-events-none select-none">
                        Olá, Meu nome é Gabriel Mesquita
                        <span className="text-primary text-7xl">.</span>
                    </h1>
                    <h3 className="font-thin text-4xl pointer-events-none select-none">
                        Sou um{" "}
                        <span className="font-bold text-primary">
                            Desenvolvedor Full Stack
                        </span>
                    </h3>
                    <MainDescription />

                    <a href="#contact">
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
