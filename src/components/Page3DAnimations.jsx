import { Canvas } from '@react-three/fiber';
import { Float, Icosahedron, Sphere, MeshDistortMaterial, Torus, TorusKnot } from '@react-three/drei';

export function About3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
          {/* Main Gold Wireframe */}
          <Icosahedron args={[2.5, 1]} position={[4, 1, -2]}>
             <meshStandardMaterial color="#d4af37" wireframe />
          </Icosahedron>
          {/* Secondary White Wireframe */}
          <Icosahedron args={[1.5, 0]} position={[-4, -2, -4]}>
             <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.3} />
          </Icosahedron>
        </Float>
      </Canvas>
    </div>
  );
}

export function Contact3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-50 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} color="#d4af37" />
        <directionalLight position={[-5, -10, -5]} intensity={1} color="#ffffff" />
        <Float speed={2} rotationIntensity={2} floatIntensity={1}>
          <Sphere args={[2.2, 64, 64]} position={[0, 0, -2]}>
            <MeshDistortMaterial 
              color="#0f0f0f" // very dark, sleek base
              attach="material" 
              distort={0.5} 
              speed={1.5} 
              roughness={0.1} 
              metalness={1}
              envMapIntensity={1}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}

export function Gallery3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#d4af37" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        
        {/* Floating Lens Rings */}
        <Float speed={1.2} rotationIntensity={2} floatIntensity={1.5}>
          <Torus args={[3, 0.03, 16, 100]} position={[-5, 3, -5]} rotation={[Math.PI / 4, 0, 0]}>
            <meshStandardMaterial color="#d4af37" />
          </Torus>
          <Torus args={[2, 0.01, 16, 100]} position={[-5, 3, -5]} rotation={[Math.PI / 3, 0, 0]}>
            <meshStandardMaterial color="#ffffff" transparent opacity={0.5} />
          </Torus>
        </Float>
        
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
          <Torus args={[2.5, 0.04, 16, 100]} position={[5, -2, -3]} rotation={[0, Math.PI / 4, 0]}>
            <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
          </Torus>
          <Torus args={[1.5, 0.02, 16, 100]} position={[5, -2, -3]} rotation={[0, Math.PI / 3, 0]}>
            <meshStandardMaterial color="#d4af37" />
          </Torus>
        </Float>
      </Canvas>
    </div>
  );
}

export function Work3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 12] }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#d4af37" />
        <directionalLight position={[-10, -5, -10]} intensity={1} color="#ffffff" />
        <Float speed={1} rotationIntensity={3} floatIntensity={1.5}>
          <TorusKnot args={[3, 0.4, 200, 32]} position={[4, -1, -5]}>
            <meshStandardMaterial color="#222" roughness={0.1} metalness={0.9} />
          </TorusKnot>
        </Float>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
           <TorusKnot args={[1.5, 0.05, 100, 16]} position={[-6, 3, -8]}>
            <meshStandardMaterial color="#d4af37" wireframe />
          </TorusKnot>
        </Float>
      </Canvas>
    </div>
  );
}
