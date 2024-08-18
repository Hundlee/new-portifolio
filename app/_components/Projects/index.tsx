"use client";

import { useState } from "react";
import { Separator } from "../ui/separator";
import CardProject from "./components/card-project";
import { AnimatePresence, motion } from "framer-motion";
import { LABELSPROJECTS } from "@/app/_constants/label-projects";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { SlideReveal } from "@/app/animation/slide-reveal";

const Projects = () => {
    const [selectedId, setSelectedId] = useState("");

    const handleClick = (selectedId: string) => {
        setSelectedId(selectedId);
    };
    return (
        <div
            className="w-screen pr-16 flex flex-col items-center justify-center py-32 md:pl-[5rem] md:pr-[10rem] lg:pl-28 lg:pr-40 xl:pl-40 xl:pr-64 "
            id="projetos"
        >
            <div className="flex w-full items-center pl-10 pr-12 md:pl-0 md:pr-0">
                <Separator className="bg-white opacity-50" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold ml-10 text-nowrap leading-loose p-0">
                    Projetos
                    <span className="text-primary text-3xl md:text-4xl lg:text-5xl">
                        .
                    </span>
                </h2>
            </div>

            <div className="pt-10 pl-10 pr-12 md:pl-0 md:pr-0 w-full">
                <div className="flex flex-col items-center w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                        {LABELSPROJECTS.map((item) => (
                            <SlideReveal key={item.id}>
                                <CardProject
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    technologies={item.technologies}
                                    description={item.description}
                                    alt={item.alt}
                                    gitUrl={item.gitUrl}
                                    deployURL={item.deployURL}
                                    onClick={() => handleClick(item.id)}
                                />
                            </SlideReveal>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedId && (
                            <motion.div
                                className="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50 overflow-y-auto"
                                variants={{
                                    hidden: { opacity: 0, y: 75 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {LABELSPROJECTS.map(
                                    (item) =>
                                        item.id === selectedId && (
                                            <motion.div
                                                key={item.id}
                                                className="flex flex-col items-center justify-center relative w-screen h-screen"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <button
                                                    className="absolute top-4 right-4 p-2 text-center text-red-700 border border-red-700 rounded-full"
                                                    onClick={() =>
                                                        setSelectedId("")
                                                    }
                                                >
                                                    <IoMdClose />
                                                </button>
                                                <div className="w-full h-full flex flex-col items-center justify-center">
                                                    <div className="relative w-[80%] h-[20%] sm:h-[40%] lg:h-[50%] 2xl:h-[60%] 3xl:h-[65%]">
                                                        <Image
                                                            src={item.image}
                                                            fill
                                                            alt={item.alt}
                                                            className="object-fill rounded-t-lg"
                                                        />
                                                    </div>
                                                    <motion.div
                                                        className="bg-secondary rounded-b-lg p-4 w-[80%] "
                                                        layoutId={`card-container-${item.id}`}
                                                    >
                                                        <div>
                                                            <div>
                                                                <h2 className="text-xl md:text-3xl font-bold mb-3 text-secondary-foreground">
                                                                    {item.title}
                                                                </h2>

                                                                <div className="flex items-center gap-2 flex-wrap">
                                                                    {item.technologies.map(
                                                                        (
                                                                            technology,
                                                                            index
                                                                        ) => (
                                                                            <motion.h3
                                                                                key={
                                                                                    index
                                                                                }
                                                                                className="text-xs md:text-lg text-primary font-semibold capitalize"
                                                                            >
                                                                                {index >
                                                                                    0 &&
                                                                                    "-"}{" "}
                                                                                {
                                                                                    technology
                                                                                }
                                                                            </motion.h3>
                                                                        )
                                                                    )}
                                                                </div>

                                                                <p className="text-sm text-secondary-foreground mb-4 pt-3">
                                                                    {
                                                                        item.description
                                                                    }
                                                                </p>
                                                                <motion.div>
                                                                    <motion.h3
                                                                        className="text-xl sm:text-2xl font-bold text-secondary-foreground"
                                                                        initial={{
                                                                            opacity: 0,
                                                                        }}
                                                                        animate={{
                                                                            opacity: 1,
                                                                        }}
                                                                        exit={{
                                                                            opacity: 0,
                                                                        }}
                                                                    >
                                                                        Project
                                                                        Links
                                                                        <span className="text-3xl text-primary">
                                                                            .
                                                                        </span>
                                                                    </motion.h3>
                                                                    <div className="pt-3 flex items-center gap-2">
                                                                        <button>
                                                                            <a
                                                                                className="flex items-center gap-2 text-primary"
                                                                                href={
                                                                                    item.gitUrl
                                                                                }
                                                                                target="_blank"
                                                                            >
                                                                                <FaGithub className="w-5 h-5" />
                                                                                <p className="text-xs sm:text-lg font-semibold">
                                                                                    Codigo
                                                                                    fonte
                                                                                </p>
                                                                            </a>
                                                                        </button>
                                                                        {item.deployURL && (
                                                                            <div>
                                                                                <a
                                                                                    href={
                                                                                        item.deployURL
                                                                                    }
                                                                                    target="_blank"
                                                                                >
                                                                                    <button className="p-0 flex items-center gap-2 text-primary">
                                                                                        <MdLogout className="w-5 h-5" />
                                                                                        <p className="text-xs sm:text-lg font-semibold">
                                                                                            deploy
                                                                                        </p>
                                                                                    </button>
                                                                                </a>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </motion.div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        )
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Projects;
