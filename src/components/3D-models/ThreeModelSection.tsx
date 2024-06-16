import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, useHelper} from "@react-three/drei";
import {useRef} from "react";
import {useControls} from "leva";
import {DirectionalLightHelper} from "three";

const Cube = ({position, rotation}) => {
    return (
        <mesh
            position={position}
            rotation={rotation}
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
        <mesh>

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
        ambLightIntensity
    } = useControls({
        groupPosition: [0, 0, 0],
        groupRotation: [0, 0, 0],
        dirLightColour: "white",
        dirLightIntensity: {
            value: 3.3,
            min: 0,
            max: 5,
            step: 0.1,
        },
        dirLightPosition: [4, 8, 3],
        ambLightIntensity: {
            value: 3.5,
            min: 0,
            max: 5,
            step: 0.1
        }
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
                <Cube position={[0, 0, 0]} rotation={[0, 0, 0]}/>
                <Cube position={[1.5, 0, 0]} rotation={[0, 0, 0]}/>
                <Cube position={[-1.5, 0, 0]} rotation={[0, 0, 0]}/>
                <Cube position={[0, 0, -1.5]} rotation={[0, 0, 0]}/>
                <Cube position={[-1.5, 0, -1.5]} rotation={[0, 0, 0]}/>
                <Cube position={[1.5, 0, -1.5]} rotation={[0, 0, 0]}/>
            </group>
        </>
    )
}

export const ThreeModelSection = () => {
    return (
        <div id="canvas-container" style={{width: '100%', height: 'calc(100vh - 20px)', background: "lightgray"}}>
            <Canvas shadows camera={{ position: [3.5, 2.5, 5], fov: 60}}>
                <Scene />
                <Environment preset="city" />
                <OrbitControls
                    minPolarAngle={0.55}
                    maxPolarAngle={Math.PI / 2.25}
                    // minZoom={0.5}
                    // maxZoom={2.0}
                />
            </Canvas>
        </div>
    )
}