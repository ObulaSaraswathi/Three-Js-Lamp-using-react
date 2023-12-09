import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lamp from './components/Lamp';
import './App.css';

const App = () => {
  const [lampOn, setLampOn] = useState(false);
  const [brightness, setBrightness] = useState(1); // Default brightness

  const toggleLamp = () => {
    setLampOn(!lampOn);
  };

  const handleBrightnessChange = (value) => {
    setBrightness(value);
  };

  return (
    <div className="App">
      <h1>React Three.js Lamp</h1>
      <button onClick={toggleLamp}>{lampOn ? 'Turn Off' : 'Turn On'}</button>
      <label htmlFor="brightness">Brightness:</label>
      <input
        type="range"
        id="brightness"
        min="0"
        max="2"
        step="0.1"
        value={brightness}
        onChange={(e) => handleBrightnessChange(parseFloat(e.target.value))}
      />
      <Canvas>
        {/* Other components or lights can be added here */}
        <ambientLight intensity={0.5 * brightness} />
        <pointLight position={[5, 5, 5]} intensity={brightness} />

        {/* Set a specific camera position */}
        <perspectiveCamera position={[0, 2, 5]} />

        <Lamp isOn={lampOn} brightness={brightness} />
        
        {/* Customize controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.25}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default App;
