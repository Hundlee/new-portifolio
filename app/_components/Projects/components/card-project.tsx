"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Separator } from "../../ui/separator";
import { FaGithub } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { CardProps } from "../types";

const CardProject = ({
    id,
    title,
    image,
    description,
    alt,
    gitUrl,
    deployURL,
    technologies,
    onClick,
}: CardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const imageRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        if (imageRef.current) {
            imageRef.current.style.transform =
                "scale(1.10) rotate(2deg) translateY(5px)";
        }
    };

    const handleMouseLeave = () => {
        if (imageRef.current) {
            imageRef.current.style.transform =
                "scale(1) rotate(0deg) translateY(0px)";
        }
    };

    return (
        <div className="min-w-full">
            <motion.div
                className="relative min-w-full h-[8rem] sm:h-[16.5rem] md:h-[20rem] lg:h-[14rem] xl:h-[20rem] 2xl:h-[22rem] bg-[#313131] rounded-lg cursor-pointer overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
            >
                <div
                    className=" w-[85%] h-[85%] absolute bottom-[-8%] left-[8%]  rounded-xl"
                    ref={imageRef}
                    style={{
                        transition: "transform 0.3s ease",
                    }}
                >
                    <Image
                        src={image}
                        className="object-contain rounded-xl"
                        fill
                        alt={alt}
                        style={{
                            borderRadius: "inherit",
                        }}
                    />
                </div>
            </motion.div>

            <div className="min-w-full">
                <div className="flex items-center gap-2 pt-5 min-w-full">
                    <motion.h2 className="text-xl font-bold text-secondary-foreground text-nowrap">
                        {title}
                    </motion.h2>

                    <Separator className="bg-white opacity-20" />
                    <div className="p-0 flex items-center gap-2">
                        <a href={gitUrl}>
                            <button className="p-0">
                                <FaGithub className="w-6 h-6 " />
                            </button>
                        </a>
                        {deployURL && (
                            <a href={deployURL}>
                                <button className="p-0">
                                    <MdLogout className="w-7 h-7" />
                                </button>
                            </a>
                        )}
                    </div>
                </div>

                <motion.div className="flex items-center gap-2">
                    {technologies.map((technology, index) => (
                        <motion.h3
                            key={index}
                            className="text-primary font-semibold capitalize"
                        >
                            {index > 0 && "-"} {technology}
                        </motion.h3>
                    ))}
                </motion.div>

                <motion.p className="text-secondary-foreground min-w-full pt-2 font-thin">
                    {isExpanded
                        ? description
                        : description.length > 200
                        ? `${description.slice(0, 200)}...`
                        : description}
                    {description.length > 200 && !isExpanded && (
                        <button
                            className="text-primary ml-2 font-bold transition-all delay-100 hover:ml-3"
                            onClick={(e) => {
                                e.stopPropagation();
                                onClick();
                            }}
                        >
                            Learn more &gt;
                        </button>
                    )}
                </motion.p>
            </div>
        </div>
    );
};

export default CardProject;
