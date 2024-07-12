"use client";

import {
    AnimatePresence,
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface CardProps {
    id: string;
    title: string;
    image: string;
    description: string;
    tecnologics: string[];
    onClick: () => void;
}

const CardProject = ({
    id,
    title,
    image,
    description,
    tecnologics,
    onClick,
}: CardProps) => {
    const ROTATION_RANGE = 32.5;
    const HALF_ROTATION_RANGE = 32.5 / 2;

    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }}
                className="relative h-96 w-auto lg:h-60 xl:h-80 2xl:h-96 rounded-xl bg-gradient-to-br bg-primary to-violet-300 cursor-pointer"
            >
                <div
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg "
                >
                    <Image
                        src={image}
                        className="object-fill"
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ borderRadius: "inherit" }}
                    />
                </div>
            </motion.div>

            <div className="pt-5">
                <motion.h2 className="text-xl font-bold mb-2 text-secondary-foreground">
                    {title}
                </motion.h2>
                <motion.p className="text-secondary-foreground">
                    {description}
                </motion.p>
            </div>
        </div>
    );
};

export default CardProject;
