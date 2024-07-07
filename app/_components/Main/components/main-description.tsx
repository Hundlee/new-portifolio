const MainDescription = () => {
    const text =
        "  Sou desenvolvedor full-stack com mais de 2 anos de experiência. Amo o que faço e me esforço continuamente para crescer no mundo da programação. Dedico-me a criar e aprimorar códigos, sempre buscando a excelência em cada projeto.";

    return (
        <h2 className="font-thin text-foreground text-xl select-none">
            {text.split("").map((child, idx) => (
                <span className="hoverText" key={idx}>
                    {child}
                </span>
            ))}
        </h2>
    );
};

export default MainDescription;
