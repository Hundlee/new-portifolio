export interface ProjectProps {
    id: string;
    title: string;
    image: string;
    gitUrl: string;
    deployURL?: string;
    alt: string;
    description: string;
    technologies: string[];
}
