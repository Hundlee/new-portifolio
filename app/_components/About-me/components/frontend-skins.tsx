import { FiTool } from "react-icons/fi";

const FrontEndSkills = () => {
    const frontEndSkillsList = [
        "Javascript",
        "Typescript",
        "NextJs",
        "TailwindCss",
        "ReactJs",
        "HTML5",
        "CSS",
        "SASS",
    ];

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <FiTool className="text-primary" />
                <h3 className="font-bold text-xl">no Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
                {frontEndSkillsList.map((item, index) => (
                    <div key={index} className="p-2 rounded-2xl bg-zinc-800">
                        <h3 className="text-white">{item}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrontEndSkills;
