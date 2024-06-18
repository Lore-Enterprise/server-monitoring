import {Canvas} from "@react-three/fiber";
import {
    AccumulativeShadows, Center,
    Environment,
    Grid,
    OrbitControls,
    PerspectiveCamera,
    RandomizedLight,
    useHelper
} from "@react-three/drei";
import {memo, useRef} from "react";
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
            <boxGeometry attach="geometry" args={[1.1, 1.2, 1]} />
            <meshStandardMaterial attach="material" color={"#192334"} />
        </mesh>
    )
}

const Floor = () => {
    return (
        <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
            <planeGeometry args={[30, 30]}/>
            <meshStandardMaterial color={"#EFF1F3"}/>
        </mesh>
    )
}

const Shadows = memo(() => (
    <AccumulativeShadows temporal frames={40} scale={10} opacity={0.3}>
        <RandomizedLight amount={8} ambient={0.2} radius={1.8} position={[4, 8, 3]} />
    </AccumulativeShadows>
))

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
        groupPosition: [0, 0, 0],
        groupRotation: [0, 0, 0],
        dirLightColour: "white",
        dirLightIntensity: { value: 4.0, min: 0, max: 5, step: 0.1 },
        dirLightPosition: [4, 8, 3],
        ambLightIntensity: { value: 5.0, min: 0, max: 5, step: 0.1 },
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
                <Center top>
                    <Cube position={[0, 0, 0]} />
                    <Cube position={[1.5, 0, 0]} />
                    <Cube position={[-1.5, 0, 0]} />
                    <Cube position={[0, 0, -1.5]} />
                    <Cube position={[-1.5, 0, -1.5]} />
                    <Cube position={[1.5, 0, -1.5]} />
                </Center>
                <Shadows />
            </group>

            {/*<Floor />*/}

            <Grid
                position={[2.5, -0.01, 2]}
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
    const {cameraPosition} = useControls({cameraPosition: [4, 3, 6]})

    return (
        <div id="canvas-container" style={{width: "100%", height: "calc(100vh - 100px)"}}>
            <Canvas
                shadows
                // camera={{ position: [3.5, 2.5, 5], fov: 60}}
            >
                <PerspectiveCamera position={cameraPosition} makeDefault />
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
                    minAzimuthAngle={-(Math.PI / 2)}
                    maxAzimuthAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    )
}