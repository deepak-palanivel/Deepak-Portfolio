import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse rotation
    const group = new THREE.Group();
    scene.add(group);

    // Main 3D Wireframe Polyhedron (Icosahedron)
    const geometry = new THREE.IcosahedronGeometry(1.65, 1);
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    
    // Stark black / high-contrast wireframe lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x000000,
      linewidth: 2,
      transparent: true,
      opacity: 0.85,
    });
    const wireframeMesh = new THREE.LineSegments(wireframeGeometry, lineMaterial);
    group.add(wireframeMesh);

    // Inner core polyhedron
    const innerGeometry = new THREE.IcosahedronGeometry(1.0, 0);
    const innerEdges = new THREE.EdgesGeometry(innerGeometry);
    const innerMaterial = new THREE.LineBasicMaterial({
      color: 0x171717,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.5,
    });
    const innerMesh = new THREE.LineSegments(innerEdges, innerMaterial);
    group.add(innerMesh);

    // Floating vertices particles
    const particlesCount = 90;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 2.0 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x000000,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particleSystem);

    // Center focal point
    const corePointGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const corePointMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const corePoint = new THREE.Mesh(corePointGeo, corePointMat);
    group.add(corePoint);

    // Mouse tracking with lerp damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      targetX = (x - 0.5) * 1.6;
      targetY = (y - 0.5) * 1.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Autonomous rotation
      wireframeMesh.rotation.y = elapsedTime * 0.25;
      wireframeMesh.rotation.x = elapsedTime * 0.18;

      innerMesh.rotation.y = -elapsedTime * 0.35;
      innerMesh.rotation.z = elapsedTime * 0.22;

      particleSystem.rotation.y = elapsedTime * 0.1;

      // Mouse smooth follow
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      group.rotation.y = mouseX;
      group.rotation.x = mouseY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeGeometry.dispose();
      lineMaterial.dispose();
      innerGeometry.dispose();
      innerEdges.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      corePointGeo.dispose();
      corePointMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] flex items-center justify-center">
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Structure - Move cursor to interact"
      />
      {/* 3D overlay coordinate badge */}
      <div className="absolute bottom-2 right-4 text-[10px] uppercase font-mono tracking-widest text-neutral-400 bg-white/80 px-2 py-1 border border-neutral-300 rounded shadow-sm">
        3D Wireframe Engine // Three.js
      </div>
    </div>
  );
};
