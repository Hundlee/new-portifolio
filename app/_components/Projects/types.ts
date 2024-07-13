export interface CardProps {
    id: string;
    title: string;
    image: string;
    gitUrl: string;
    deployURL?: string;
    alt: string;
    description: string;
    technologies: string[];
    onClick: () => void;
}
