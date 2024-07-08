import { Sphere } from "@react-three/drei";
import { FC } from "react";

interface PointProps {
    position: [number, number, number];
    color: string;
}

export const Point: FC<PointProps> = ({ position, color }) => {
    return (
        <Sphere position={position} args={[0.1, 10, 10]}>
            <meshStandardMaterial
                emissive={color}
                emissiveIntensity={0.5}
                roughness={0.5}
                color={color}
            />
        </Sphere>
    );
};
