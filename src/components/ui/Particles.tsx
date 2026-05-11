"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import * as THREE from "three";

function ParticleField() {
  const count = 200;
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;

      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        col[i * 3] = 0.22;
        col[i * 3 + 1] = 1;
        col[i * 3 + 2] = 0.08;
      } else if (colorChoice < 0.7) {
        col[i * 3] = 0;
        col[i * 3 + 1] = 0.83;
        col[i * 3 + 2] = 1;
      } else {
        col[i * 3] = 1;
        col[i * 3 + 1] = 0.42;
        col[i * 3 + 2] = 0;
      }

      siz[i] = Math.random() * 3 + 1;
    }

    return { positions: pos, colors: col, sizes: siz };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const positionsAttrib = meshRef.current.geometry.attributes.position;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = positions[i3] + Math.sin(time * 0.1 + i) * 0.003;
      const y = positions[i3 + 1] + Math.cos(time * 0.1 + i) * 0.003;
      positionsAttrib.array[i3] = x;
      positionsAttrib.array[i3 + 1] = y;
    }
    positionsAttrib.needsUpdate = true;

    meshRef.current.rotation.x = mouseRef.current.y * 0.05;
    meshRef.current.rotation.y = mouseRef.current.x * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function Particles() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "low-power",
        }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}