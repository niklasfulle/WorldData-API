"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import {
  vertexShader,
  fragmentShader,
  atmosphereVertexShader,
  atmosphereFragmentShader,
} from "./shaders/shaders";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("rgb(15, 23, 42)");
      const camera = new THREE.PerspectiveCamera(75, 600 / 600, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });

      if (innerWidth < 600) {
        renderer.setSize(innerWidth, innerWidth);
      } else {
        renderer.setSize(600, 600);
      }
      renderer.setPixelRatio(devicePixelRatio);

      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 30;

      const textutre = new THREE.TextureLoader().load("./earth-day.jpg");

      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(10, 100, 100),
        new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms: {
            globeTexture: { value: textutre },
          },
        })
      );

      sphere.rotation.set(0, 0, -(-Math.PI * 23) / 180);

      scene.add(sphere);

      // create a atmosphere

      const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(10, 100, 100),
        new THREE.ShaderMaterial({
          vertexShader: atmosphereVertexShader,
          fragmentShader: atmosphereFragmentShader,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide,
        })
      );

      atmosphere.scale.set(1.2, 1.2, 1.2);

      scene.add(atmosphere);

      // Render the scene and camera
      renderer.render(scene, camera);

      // Add this function inside the useEffect hook
      const renderScene = () => {
        sphere.rotation.y += 0.001;
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };

      // Call the renderScene function to start the animation loop
      renderScene();

      const handleResize = () => {
        const width = 600;
        const height = 600;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        console.log(innerWidth, innerHeight);

        if (innerWidth < 600) {
          renderer.setSize(innerWidth, innerWidth);
        } else {
          renderer.setSize(width, height);
        }
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <div ref={containerRef} />;
};
export default ThreeScene;
