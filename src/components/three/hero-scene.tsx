"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Text } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { Group, Vector3 } from "three";

function OrbitingClips() {
  const groupRef = useRef<Group>(null);
  const spheres = useMemo(() => {
    return Array.from({ length: 36 }, (_, i) => {
      const angle = (i / 36) * Math.PI * 2;
      const radius = 1.75 + Math.sin(i * 0.35) * 0.35;
      const height = Math.cos(angle * 1.5) * 1.1;
      return {
        position: new Vector3(
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius,
        ).toArray(),
        scale: 0.06 + ((i % 5) / 5) * 0.12,
        emissive: i % 3 === 0 ? "#00D1FF" : "#FFFFFF",
        emissiveIntensity: 0.3 + (i % 3) * 0.25,
      };
    });
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.18;
    groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.12) * 0.18;
  });

  return (
    <group ref={groupRef}>
      {spheres.map((data, idx) => (
        <mesh key={idx} position={data.position}>
          <sphereGeometry args={[data.scale, 24, 24]} />
          <meshStandardMaterial
            color={"#1B1B1B"}
            emissive={data.emissive}
            emissiveIntensity={data.emissiveIntensity}
            roughness={0.35}
            metalness={0.45}
          />
        </mesh>
      ))}
      <mesh>
        <torusGeometry args={[1.9, 0.035, 32, 120]} />
        <meshStandardMaterial
          color={"#0F0F0F"}
          emissive={"#00D1FF"}
          emissiveIntensity={0.5}
          roughness={0.25}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}

function EditingFrame() {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.2) * 0.4;
  });

  return (
    <Float floatIntensity={1.5} rotationIntensity={0.4} speed={2}>
      <group ref={groupRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.1, 0.02, 32, 120]} />
          <meshStandardMaterial
            color={"#1A1A1A"}
            emissive={"#00D1FF"}
            emissiveIntensity={0.35}
            metalness={0.5}
            roughness={0.25}
          />
        </mesh>
        <mesh>
          <ringGeometry args={[0.4, 0.43, 90]} />
          <meshStandardMaterial
            color={"#00D1FF"}
            emissive={"#00D1FF"}
            emissiveIntensity={0.6}
          />
        </mesh>
        <mesh>
          <ringGeometry args={[0.95, 0.97, 80]} />
          <meshStandardMaterial
            color={"#ffffff"}
            transparent
            opacity={0.45}
            emissive={"#ffffff"}
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

function FloatingTitle() {
  return (
    <Float floatIntensity={1.1} rotationIntensity={0.2} speed={1.6}>
      <Text
        fontSize={0.35}
        letterSpacing={0.1}
        color="#FFFFFF"
        outlineColor="#00D1FF"
        outlineWidth={0.01}
        position={[0, 0.9, 0]}
      >
        EDITORIAL DEPTH
      </Text>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      className="h-full w-full"
      dpr={[1.5, 2]}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["transparent"]} />
      <PerspectiveCamera makeDefault position={[0, 1.2, 4]} fov={32} />
      <ambientLight intensity={0.35} />
      <spotLight
        position={[4, 5, 4]}
        angle={0.6}
        penumbra={0.65}
        distance={12}
        intensity={1.3}
        color="#00D1FF"
      />
      <spotLight
        position={[-4, -3, -4]}
        angle={0.4}
        penumbra={0.65}
        distance={6}
        intensity={0.8}
        color="#ffffff"
      />
      <EditingFrame />
      <OrbitingClips />
      <FloatingTitle />
    </Canvas>
  );
}
