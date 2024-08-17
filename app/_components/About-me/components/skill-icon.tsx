const SkillIcon = ({ name }: { name: string }) => {
    return (
        <div className="p-2 px-3 rounded-2xl bg-zinc-800 hover:bg-primary delay-100 cursor-pointer ease-in">
            <h3 className="text-white">{name}</h3>
        </div>
    );
};

export default SkillIcon;
