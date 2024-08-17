import { FiTool } from "react-icons/fi";
import SkillIcon from "./skill-icon";

const FrontEndSkills = () => {
    const frontEndSkills = [
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
                {frontEndSkills.map((skill, index) => (
                    <SkillIcon name={skill} key={index} />
                ))}
            </div>
        </div>
    );
};

export default FrontEndSkills;
