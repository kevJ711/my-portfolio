import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function CameraRig({ children, isInteractive }) {
  const { camera, mouse } = useThree();
  useFrame(() => {
    if (isInteractive) {
      camera.position.x += (mouse.x * 4 - camera.position.x) * 0.1;
      camera.position.y += (-mouse.y * 4 - camera.position.y) * 0.1;
      camera.lookAt(0, 0, 0);
    }
  });
  return <>{children}</>;
}

export default function InteractiveStars({ isInteractive = false }) {
  return (
    <Canvas 
      className="fixed top-0 left-0 w-full h-full z-0"
      camera={{ position: [0, 0, 1] }}
      gl={{ alpha: true }}
      style={{ 
        pointerEvents: isInteractive ? 'auto' : 'none',
        cursor: isInteractive ? 'grab' : 'default'
      }}

    >
      <CameraRig isInteractive={isInteractive}>
        <ambientLight intensity={0.5} />
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />
      </CameraRig>
    </Canvas>
  );
}
