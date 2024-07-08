const Sections = () => {
    const sections = ["contato", "projetos", "sobre-mim"];

    return (
        <div className="flex h-full transform -rotate-90 origin-center">
            {sections.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={index}
                    className="h-full animate-slidenavbarright3"
                >
                    <button className=" h-20 w-36 text-white hover:bg-background transition hover:border-t hover:border-primary capitalize ">
                        {item}
                    </button>
                </a>
            ))}
        </div>
    );
};

export default Sections;
