"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera, Line } from "@react-three/drei";
import * as THREE from "three";

// Definición de las curvas 3D para los carriles de la rotonda e intersección
function createRoadCurves() {
  // Ruta 1: Oeste a Este atravesando rotonda
  const curve1 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-14, 0.05, 1.2),
    new THREE.Vector3(-3.5, 0.05, 1.2),
    new THREE.Vector3(-2.2, 0.05, 2.2),
    new THREE.Vector3(0, 0.05, 3.4),
    new THREE.Vector3(2.2, 0.05, 2.2),
    new THREE.Vector3(3.5, 0.05, 1.2),
    new THREE.Vector3(14, 0.05, 1.2),
  ]);

  // Ruta 2: Norte a Sur atravesando rotonda
  const curve2 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(1.2, 0.05, -14),
    new THREE.Vector3(1.2, 0.05, -3.5),
    new THREE.Vector3(2.2, 0.05, -2.2),
    new THREE.Vector3(3.4, 0.05, 0),
    new THREE.Vector3(2.2, 0.05, 2.2),
    new THREE.Vector3(1.2, 0.05, 3.5),
    new THREE.Vector3(1.2, 0.05, 14),
  ]);

  // Ruta 3: Sur a Norte
  const curve3 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1.2, 0.05, 14),
    new THREE.Vector3(-1.2, 0.05, 3.5),
    new THREE.Vector3(-2.2, 0.05, 2.2),
    new THREE.Vector3(-3.4, 0.05, 0),
    new THREE.Vector3(-2.2, 0.05, -2.2),
    new THREE.Vector3(-1.2, 0.05, -3.5),
    new THREE.Vector3(-1.2, 0.05, -14),
  ]);

  // Ruta 4: Este a Oeste
  const curve4 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(14, 0.05, -1.2),
    new THREE.Vector3(3.5, 0.05, -1.2),
    new THREE.Vector3(2.2, 0.05, -2.2),
    new THREE.Vector3(0, 0.05, -3.4),
    new THREE.Vector3(-2.2, 0.05, -2.2),
    new THREE.Vector3(-3.5, 0.05, -1.2),
    new THREE.Vector3(-14, 0.05, -1.2),
  ]);

  // Anillo de rotonda continuo
  const curveRing = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(3.5, 0.05, 0),
      new THREE.Vector3(2.47, 0.05, 2.47),
      new THREE.Vector3(0, 0.05, 3.5),
      new THREE.Vector3(-2.47, 0.05, 2.47),
      new THREE.Vector3(-3.5, 0.05, 0),
      new THREE.Vector3(-2.47, 0.05, -2.47),
      new THREE.Vector3(0, 0.05, -3.5),
      new THREE.Vector3(2.47, 0.05, -2.47),
    ],
    true // closed loop
  );

  return [curve1, curve2, curve3, curve4, curveRing];
}

// Vehículo técnico minimalista con orientación tangencial
function TechnicalVehicle({
  curve,
  speed,
  color = "#00A3E0",
  initialOffset = 0,
  isBus = false,
}: {
  curve: THREE.CatmullRomCurve3;
  speed: number;
  color?: string;
  initialOffset?: number;
  isBus?: boolean;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const progress = useRef(initialOffset);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    progress.current = (progress.current + speed * delta) % 1;
    const point = curve.getPointAt(progress.current);
    const tangent = curve.getTangentAt(progress.current).normalize();

    meshRef.current.position.copy(point);

    // Orientación precisa según la dirección de la ruta
    const angle = Math.atan2(tangent.x, tangent.z);
    meshRef.current.rotation.set(0, angle, 0);
  });

  return (
    <group ref={meshRef}>
      {/* Cuerpo del vehículo: perfil limpio estilo CAD */}
      <mesh position={[0, isBus ? 0.35 : 0.2, 0]}>
        <boxGeometry args={isBus ? [0.85, 0.6, 2.4] : [0.7, 0.35, 1.4]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Luz delantera/HUD sensor */}
      <mesh position={[0, isBus ? 0.35 : 0.25, isBus ? 1.22 : 0.72]}>
        <boxGeometry args={isBus ? [0.65, 0.1, 0.05] : [0.5, 0.1, 0.05]} />
        <meshBasicMaterial color="#38BDF8" />
      </mesh>
    </group>
  );
}

// Visualización de las líneas de carril estilo blueprint
function TechnicalRoadLines({ curves }: { curves: THREE.CatmullRomCurve3[] }) {
  return (
    <group>
      {curves.map((curve, idx) => {
        const points = curve.getPoints(80).map((p) => [p.x, p.y, p.z] as [number, number, number]);
        return (
          <Line
            key={idx}
            points={points}
            color="#0284C7"
            lineWidth={1.5}
            transparent
            opacity={0.45}
          />
        );
      })}
    </group>
  );
}

// Escenario base: intersección isométrica con materiales mate
function IntersectionBase() {
  return (
    <group>
      {/* Suelo base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[32, 32]} />
        <meshStandardMaterial color="#0B0F17" roughness={0.9} />
      </mesh>

      {/* Grid de ingeniería de fondo */}
      <gridHelper
        args={[32, 32, "#1E293B", "#0F172A"]}
        position={[0, 0.01, 0]}
      />

      {/* Anillo de la rotonda */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <ringGeometry args={[2.5, 4.8, 64]} />
        <meshStandardMaterial color="#111827" roughness={0.5} />
      </mesh>

      {/* Centro de la rotonda con borde cian */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[2.4, 2.4, 0.2, 48]} />
        <meshStandardMaterial color="#0F172A" />
      </mesh>
      <mesh position={[0, 0.21, 0]}>
        <ringGeometry args={[2.3, 2.38, 48]} />
        <meshBasicMaterial color="#00A3E0" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function TrafficSimulation3D() {
  const curves = useMemo(() => createRoadCurves(), []);
  const [speedVal, setSpeedVal] = useState(43.8);

  useEffect(() => {
    const timer = setInterval(() => {
      setSpeedVal(Number((42 + Math.random() * 3.5).toFixed(1)));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[520px] rounded-xl overflow-hidden border border-slate-800 bg-[#080C14] shadow-2xl">
      {/* Overlay de Telemetría Técnica */}
      <div className="absolute top-4 left-4 z-10 font-mono text-xs bg-slate-900/80 backdrop-blur-md border border-slate-700/60 p-3 rounded-lg text-slate-300 pointer-events-none">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-cyan-400 font-bold tracking-wider">SIMULACIÓN VIAL 3D EN VIVO</span>
        </div>
        <p className="text-slate-400">FLUIDEZ: <span className="text-white font-bold">NIVEL A (LOS)</span></p>
        <p className="text-slate-400">VELOCIDAD PROMEDIO: <span className="text-white font-bold">{speedVal} km/h</span></p>
      </div>

      <div className="absolute bottom-4 right-4 z-10 font-mono text-[10px] bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded text-slate-400">
        VISSIM 3D ENGINE • THREE.JS
      </div>

      <Canvas shadows>
        {/* Cámara Isométrica Exacta */}
        <OrthographicCamera
          makeDefault
          position={[15, 18, 15]}
          zoom={35}
          near={-50}
          far={100}
          onUpdate={(c) => c.lookAt(0, 0, 0)}
        />

        {/* Iluminación tipo estudio técnico */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 10]} intensity={1.2} />
        <pointLight position={[0, 5, 0]} intensity={0.8} color="#00A3E0" />

        {/* Elementos de la escena */}
        <IntersectionBase />
        <TechnicalRoadLines curves={curves} />

        {/* Flota de vehículos en circulación */}
        <TechnicalVehicle curve={curves[0]} speed={0.12} color="#00A3E0" initialOffset={0.1} />
        <TechnicalVehicle curve={curves[0]} speed={0.10} color="#38BDF8" initialOffset={0.6} />
        <TechnicalVehicle curve={curves[1]} speed={0.14} color="#0284C7" initialOffset={0.3} isBus={true} />
        <TechnicalVehicle curve={curves[1]} speed={0.11} color="#00A3E0" initialOffset={0.85} />
        <TechnicalVehicle curve={curves[2]} speed={0.13} color="#10B981" initialOffset={0.2} />
        <TechnicalVehicle curve={curves[3]} speed={0.11} color="#38BDF8" initialOffset={0.5} />
        <TechnicalVehicle curve={curves[4]} speed={0.09} color="#00A3E0" initialOffset={0.7} />
      </Canvas>
    </div>
  );
}
