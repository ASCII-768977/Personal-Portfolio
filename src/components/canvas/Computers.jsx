import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ whichScreen: screenType }) => {
  const computer = useGLTF("desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
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
          screenType === "mobile" ? 0.5 : screenType === "tablet" ? 0.60 : 0.70
        }
        position={
          screenType === "mobile"
            ? [0, -3.0, -1.4]
            : screenType === "tablet"
            ? [0, -3.30, -1.5]
            : [0, -3.50, -1.5]
        }
        rotation={[0, -0.25, -0.13]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  // const [isMobile, setIsMobile] = useState(false);
  // const [isLargeScreen, setIsLargeScreen] = useState(false);

  const [screenType, setScreenType] = useState("tablet");

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 768px)");
  //   setIsMobile(mediaQuery.matches);
  //   const handleMediaQueryChange = (e) => {
  //     setIsMobile(e.matches);
  //   };
  //   mediaQuery.addEventListener("change", handleMediaQueryChange);
  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  useEffect(() => {
    const handleScreenSizeChange = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
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
        {/* <Computers isMobile={isMobile} /> */}
        <Computers whichScreen={screenType} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
