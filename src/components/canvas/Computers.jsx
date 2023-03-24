import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const getModelContainerStyle = (screenType) => {
  const commonStyle = {
    position: "absolute",
    pointerEvents: "auto",
  };

  if (screenType === "mobile") {
    return {
      ...commonStyle,
      width: "100%",
      height: "35%",
      top: "55%",
      // left: "10%",
    };
  }

  if (screenType === "tablet") {
    return {
      ...commonStyle,
      width: "100%",
      height: "25%",
      top: "60%",
      // left: "20%",
    };
  }

  return {
    ...commonStyle,
    width: "100%",
    height: "35%",
    top: "50%",
    // left: "25%",
  };
};

const Computers = ({ whichScreen: screenType }) => {
  const computer = useGLTF("desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0.7} position={[0,4.9,3.3]}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={
          screenType === "mobile" ? 0.9 : screenType === "tablet" ? 1.5 : 1.5
        }
        position={
          screenType === "mobile"
            ? [0, -1.7, -1.5]
            : screenType === "tablet"
            ? [0, -3.3, -1.5]
            : [0, -3.5, -1.5]
        }
        rotation={[-0.005, -0.25, -0.10]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {

  const [screenType, setScreenType] = useState("tablet");

  useEffect(() => {
    const handleScreenSizeChange = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setScreenType("mobile");
      } else if (window.matchMedia("(min-width: 1280px)").matches) {
        setScreenType("desktop");
      } else {
        setScreenType("tablet");
      }
    };

    handleScreenSizeChange();

    window.addEventListener("resize", handleScreenSizeChange);

    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, [screenType]);

  return (
    <div style={getModelContainerStyle(screenType)}>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers whichScreen={screenType} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
