import { GrTools } from "react-icons/gr";

const BackendSkills = () => {
    const backendSkillsList = [
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
                {backendSkillsList.map((item, index) => (
                    <div key={index} className="p-2 rounded-2xl bg-zinc-800">
                        <h3 className="text-white">{item}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BackendSkills;
