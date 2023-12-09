import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Lamp = ({ isOn, brightness }) => {
  const lampRef = useRef();

  useEffect(() => {
    const lamp = lampRef.current;

    const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x606060 });
    const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
    bodyMesh.position.y = 0.5;
    lamp.add(bodyMesh);

    const bulbGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const bulbMaterial = new THREE.MeshStandardMaterial({ emissive: 0xffff00, emissiveIntensity: isOn ? brightness : 0 });
    const bulbMesh = new THREE.Mesh(bulbGeometry, bulbMaterial);
    bulbMesh.position.y = 1.25;
    lamp.add(bulbMesh);

    return () => {
      // Clean up any resources when the component unmounts
    };
  }, [isOn, brightness]);

  useFrame(() => {
    // Update your Three.js scene in each frame
    // You can add animations or other dynamic changes here
  });

  return (
    <group ref={lampRef}></group>
  );
};

export default Lamp;
