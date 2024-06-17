import {Canvas} from "@react-three/fiber";
import {Environment, Grid, OrbitControls, PerspectiveCamera, useHelper} from "@react-three/drei";
import {useRef} from "react";
import {useControls} from "leva";
import {DirectionalLightHelper} from "three";
import * as THREE from "three";

const angleToRadians = (angleInDeg: number) => (Math.PI / 180) * angleInDeg;

const Cube = ({position}) => {
    return (
        <mesh
            position={position}
            castShadow
            receiveShadow
        >
            <boxGeometry attach="geometry" args={[1.1, 1.2, 1]}/>
            <meshStandardMaterial attach="material" color={"#192334"}/>
        </mesh>
    )
}

const Floor = () => {
    return (
        <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow >
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color={"#EFF1F3"} />
        </mesh>
    )
}

const Scene = () => {
    const directionalLightRef = useRef();

    const {
        groupPosition,
        groupRotation,
        dirLightColour,
        dirLightIntensity,
        dirLightPosition,
        ambLightIntensity,
        fadeDistance
    } = useControls({
        groupPosition: [0, 0.6, 0],
        groupRotation: [0, 0, 0],
        dirLightColour: "white",
        dirLightIntensity: { value: 3.3, min: 0, max: 5, step: 0.1 },
        dirLightPosition: [4, 8, 3],
        ambLightIntensity: { value: 3.5, min: 0, max: 5, step: 0.1 },
        fadeDistance: { value: 18, min: 0, max: 100, step: 1 },
    })

    useHelper(directionalLightRef, DirectionalLightHelper, 2, "black");

    return (
        <>
            <directionalLight
                position={dirLightPosition}
                ref={directionalLightRef}
                color={dirLightColour}
                intensity={dirLightIntensity}
                castShadow
            />
            <ambientLight color={"#ffffff"} intensity={ambLightIntensity}/>

            <group position={groupPosition} rotation={groupRotation}>
                <Cube position={[0, 0, 0]} />
                <Cube position={[1.5, 0, 0]} />
                <Cube position={[-1.5, 0, 0]} />
                <Cube position={[0, 0, -1.5]} />
                <Cube position={[-1.5, 0, -1.5]} />
                <Cube position={[1.5, 0, -1.5]} />
            </group>

            <Floor />

            <Grid
                // position={[2.5, 0.01, 1]}
                position={[0, 0.01, 0]}
                args={[10.5, 10.5]}
                cellSize={1.25}
                cellThickness={0.6}
                cellColor={"#787A7E"}
                sectionSize={5}
                sectionThickness={0.6}
                sectionColor={"#787A7E"}
                fadeDistance={fadeDistance}
                fadeStrength={1}
                infiniteGrid
            />
        </>
    )
}

export const ThreeModelSection = () => {
    return (
        <div id="canvas-container" style={{width: '100%', height: 'calc(100vh - 20px)'}}>
            <Canvas
                shadows
                // camera={{ position: [3.5, 2.5, 5], fov: 60}}
            >
                <PerspectiveCamera position={[2, 5, 5]} makeDefault />
                <Scene />
                {/*<Environment preset="city" />*/}
                {/*<Environment background>*/}
                {/*    <mesh>*/}
                {/*        <boxGeometry args={[50, 50, 50]} />*/}
                {/*        <meshBasicMaterial color={"#EFF1F3"} side={THREE.BackSide} />*/}
                {/*    </mesh>*/}
                {/*</Environment>*/}
                <OrbitControls
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2.25}
                    minAzimuthAngle={-(Math.PI / 1.75)}
                    maxAzimuthAngle={Math.PI / 1.75}
                />
            </Canvas>
        </div>
    )
}