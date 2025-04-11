// import React from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Landing3D = () => {
  const imageContainerRef = useRef(null);
  const imageElementRef = useRef(null);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const imageElement = imageElementRef.current;

    let easeFactor = 0.02;
    let scene, camera, renderer, planeMesh;
    let mousePosition = { x: 0.5, y: 0.5 };
    let targetMousePosition = { x: 0.5, y: 0.5 };
    let aberrationIntensity = 1.0;
    let prevPosition = { x: 0.5, y: 0.5 };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D u_texture;    
      uniform vec2 u_mouse;
      uniform vec2 u_prevMouse;
      uniform float u_aberrationIntensity;

      void main() {
        vec2 mouseDirection = u_mouse - u_prevMouse;
        vec2 pixelToMouseDirection = vUv - u_mouse;
        float pixelDistanceToMouse = length(pixelToMouseDirection);
        float strength = smoothstep(0.4, 0.0, pixelDistanceToMouse);

        vec2 uvOffset = strength * - mouseDirection * 0.03;
        vec2 uv = vUv - uvOffset;

        vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.02, 0.0));
        vec4 colorG = texture2D(u_texture, uv);
        vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.02, 0.0));

        gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
      }
    `;

    function initializeScene(texture) {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        80,
        imageElement.offsetWidth / imageElement.offsetHeight,
        0.01,
        10
      );
      camera.position.z = 1;

      let shaderUniforms = {
        u_mouse: { type: "v2", value: new THREE.Vector2() },
        u_prevMouse: { type: "v2", value: new THREE.Vector2() },
        u_aberrationIntensity: { type: "f", value: 0.0 },
        u_texture: { type: "t", value: texture },
      };

      planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
        })
      );

      scene.add(planeMesh);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(imageElement.offsetWidth, imageElement.offsetHeight);

      imageContainer.appendChild(renderer.domElement);
    }

    function animateScene() {
      requestAnimationFrame(animateScene);

      mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

      planeMesh.material.uniforms.u_mouse.value.set(
        mousePosition.x,
        1.0 - mousePosition.y
      );

      planeMesh.material.uniforms.u_prevMouse.value.set(
        prevPosition.x,
        1.0 - prevPosition.y
      );

      aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.02);

      planeMesh.material.uniforms.u_aberrationIntensity.value =
        aberrationIntensity;

      renderer.render(scene, camera);
    }

    function handleMouseMove(event) {
      easeFactor = 0.02;
      let rect = imageContainer.getBoundingClientRect();
      prevPosition = { ...targetMousePosition };

      targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      targetMousePosition.y = (event.clientY - rect.top) / rect.height;

      aberrationIntensity = 1;
    }

    function handleMouseEnter(event) {
      easeFactor = 0.02;
      let rect = imageContainer.getBoundingClientRect();

      mousePosition.x = targetMousePosition.x =
        (event.clientX - rect.left) / rect.width;
      mousePosition.y = targetMousePosition.y =
        (event.clientY - rect.top) / rect.height;
    }

    function handleMouseLeave() {
      easeFactor = 0.05;
      targetMousePosition = { ...prevPosition };
    }

    imageContainer.addEventListener("mousemove", handleMouseMove);
    imageContainer.addEventListener("mouseenter", handleMouseEnter);
    imageContainer.addEventListener("mouseleave", handleMouseLeave);

    initializeScene(new THREE.TextureLoader().load(imageElement.src));
    animateScene();

    return () => {
      imageContainer.removeEventListener("mousemove", handleMouseMove);
      imageContainer.removeEventListener("mouseenter", handleMouseEnter);
      imageContainer.removeEventListener("mouseleave", handleMouseLeave);

      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div id="img3d" className=" flex justify-center items-center">
      <div
        id="imageContainer"
        ref={imageContainerRef}
        className="relative md:max-h-[768px] min-h-screen min-w-full md:w-[768px] h-[320px] w-[320px] overflow-hidden flex justify-center items-center rounded-[10px] max-w-full max-h-[100svh] transition-all ease-in-out duration-500 hover:saturate-100 scale-[60%] opacity-75"
      >
        <img
          id="myImage"
          className=""
          ref={imageElementRef}
          src="https://www.mozillavit.in/img/fox.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Landing3D;
