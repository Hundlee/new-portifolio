import { Separator } from "../ui/separator";

const Projects = () => {
    return (
        <div className="w-screen pr-20 flex flex-col  items-center justify-center my-32 lg:px-40">
            <div className="flex w-full items-center">
                <Separator className="bg-white opacity-50 hidden lg:block " />
                <h2 className="text-5xl font-bold ml-10 text-nowrap leading-loose ">
                    Projetos
                    <span className="text-primary text-6xl">.</span>
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row mt-5 gap-10">
                <div className="font-thin text-xl flex flex-col gap-3"></div>
            </div>
        </div>
    );
};

export default Projects;
