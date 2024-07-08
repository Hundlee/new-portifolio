import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

export const WhatsAppIcon = ({ url }: { url: string }) => {
    return (
        <a href={url} target="_blank">
            <FaSquareWhatsapp className="w-6 h-6 text-secondary-foreground hover:text-primary" />
        </a>
    );
};

export const LinkedinIcon = ({ url }: { url: string }) => {
    return (
        <a href={url} target="_blank">
            <FaLinkedin className="w-6 h-6 text-secondary-foreground hover:text-primary" />
        </a>
    );
};

export const GitHubIcon = ({ url }: { url: string }) => {
    return (
        <a href={url} target="_blank">
            <FaGithub className="w-6 h-6 text-secondary-foreground hover:text-primary" />
        </a>
    );
};
