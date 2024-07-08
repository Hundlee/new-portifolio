import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";
import * as THREE from "three";
import { pointsInner, pointsOuter } from "../utils/points";
import { Point } from "./point";

interface PointData {
    idx: number;
    position: [number, number, number];
    color: string;
}

export const PointCircle: FC = () => {
    const ref = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (ref.current?.rotation) {
            ref.current.rotation.z = clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={ref}>
            {pointsInner.map((point: PointData) => (
                <Point
                    key={point.idx}
                    position={point.position}
                    color={point.color}
                />
            ))}
            {pointsOuter.map((point: PointData) => (
                <Point
                    key={point.idx}
                    position={point.position}
                    color={point.color}
                />
            ))}
        </group>
    );
};
