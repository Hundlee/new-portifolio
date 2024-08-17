import { GrTools } from "react-icons/gr";
import SkillIcon from "./skill-icon";

const BackendSkills = () => {
    const backendSkills = [
        "Javascript",
        "Typescript",
        "NodeJs",
        "MongoDb",
        "Prisma",
        "Fastify",
        "ExpressJs",
        "Firebase",
        "GrammY",
    ];

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <GrTools className="text-primary" />
                <h3 className="font-bold text-xl">no Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
                {backendSkills.map((skill, index) => (
                    <SkillIcon name={skill} key={index} />
                ))}
            </div>
        </div>
    );
};

export default BackendSkills;
