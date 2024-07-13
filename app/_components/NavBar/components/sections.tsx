"use client";

import { useEffect, useState } from "react";

const Sections = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sections = ["contato", "projetos", "sobre-mim"];
    const [currentSection, setCurrentSection] = useState("");
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        setCurrentSection(sectionId);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections]);

    return (
        <div className="flex h-full transform -rotate-90 origin-center">
            {sections.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={index}
                    className={`h-full animate-slidenavbarright3 ${
                        currentSection === item
                            ? "bg-background text-primary border-t border-primary"
                            : ""
                    }`}
                >
                    <button className="h-20 w-36 text-white hover:bg-background transition hover:border-t hover:border-primary capitalize">
                        {item}
                    </button>
                </a>
            ))}
        </div>
    );
};
export default Sections;
