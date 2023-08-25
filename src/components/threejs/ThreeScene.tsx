"use client";
import React, { useRef, useEffect, useState, Dispatch, SetStateAction, FC } from "react";
import {
  vertexShader,
  fragmentShader,
  atmosphereVertexShader,
  atmosphereFragmentShader,
} from "@/three/shaders/shaders";
import {
  AdditiveBlending,
  BackSide,
  Mesh,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  TextureLoader,
  WebGLRenderer,
} from "three/src/Three.js";

interface Props {
  setLoading: SetLoading;
}

type SetLoading = Dispatch<SetStateAction<boolean>>;

const ThreeScene: FC<Props> = ({ setLoading }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dataFetchedRef = useRef(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    try {
      if (typeof window !== "undefined") {
        const width = 600;
        const height = 600;
        const scene = new Scene();

        const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        });
        if (innerWidth < width) {
          renderer.setSize(innerWidth, innerWidth);
        } else {
          renderer.setSize(width, height);
        }
        renderer.setPixelRatio(devicePixelRatio);

        containerRef.current?.appendChild(renderer.domElement);
        camera.position.z = 30;

        const textutre = new TextureLoader().load("./earth-uv-map.webp");

        const sphere = new Mesh(
          new SphereGeometry(12, 100, 100),
          new ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
              globeTexture: { value: textutre },
            },
          })
        );

        sphere.rotation.set(0, 0, -(Math.PI * 23) / 180);

        scene.add(sphere);

        // create a atmosphere
        const atmosphere = new Mesh(
          new SphereGeometry(12, 100, 100),
          new ShaderMaterial({
            vertexShader: atmosphereVertexShader,
            fragmentShader: atmosphereFragmentShader,
            blending: AdditiveBlending,
            side: BackSide,
          })
        );

        atmosphere.scale.set(1.2, 1.2, 1.2);

        // add the atmosphere to the scene
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
          camera.aspect = width / height;
          camera.updateProjectionMatrix();

          if (innerWidth < width) {
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
    } catch (err) {
      setError(err as Error);
    }
    setLoading(false);
  }, [setLoading]);

  return <>{error ? <div></div> : <div ref={containerRef} />}</>;
};
export default ThreeScene;
