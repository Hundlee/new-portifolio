/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";

const DynamicText = () => {
    const phrases = ["Programador Full Stack", "Desenvolvedor Full Stack"];
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const typingTimeoutRef = useRef<number | null>(null);

    const handleType = () => {
        const currentIndex = loopNum % phrases.length;
        const fullText = phrases[currentIndex];

        setDisplayedText(
            isDeleting
                ? fullText.substring(0, displayedText.length - 1)
                : fullText.substring(0, displayedText.length + 1)
        );

        setTypingSpeed(isDeleting ? 75 : 150);

        if (!isDeleting && displayedText === fullText) {
            setTypingSpeed(1000);
            setIsDeleting(true);
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(500);
        }
    };

    useEffect(() => {
        typingTimeoutRef.current = window.setTimeout(() => {
            handleType();
        }, typingSpeed);

        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
        };
    }, [displayedText, isDeleting, typingSpeed]);

    return (
        <h3 className="font-thin text-2xl md:text-4xl pointer-events-none select-none">
            Sou um{" "}
            <span className="text-primary font-bold">{displayedText}</span>
            <span id="cursor">|</span>
        </h3>
    );
};

export default DynamicText;
