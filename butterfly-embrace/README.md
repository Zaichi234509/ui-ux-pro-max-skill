# Ferrari "Butterfly Embrace" - Inspired by Hu Tao

A premium AAA 3D web experience showcasing the fictional collaboration between Ferrari and Genshin Impact's Hu Tao. 

## 🚀 Tech Stack
- **React & Vite**: Fast, modern foundation.
- **Three.js & React Three Fiber (@react-three/fiber)**: 3D scene rendering.
- **Drei (@react-three/drei)**: Premium 3D helpers (Environment, Sparkles, Float, PresentationControls).
- **Framer Motion**: Smooth DOM animations, staggered entrances, and the custom cursor.
- **GSAP**: Powering cinematic camera movements on initialization.
- **TailwindCSS v4**: Zero-config styling.

## 🦋 Features implemented
1. **Loading Animation**: A sleek minimal progress loader with a custom ignition sequence.
2. **Custom Cursor**: Interactive floating cursor that reacts magnetically to UI elements.
3. **Entrance Animation**: Cinematic sweep of the 3D placeholder when entering the site (powered by GSAP).
4. **Environment**: Moody dark lighting with Hu Tao's signature Crimson and Gold colors, complete with floating embers (`Sparkles`).
5. **Micro Interactions**: Magnetic links, line-expansion on buttons, staggering text reveals.
6. **Butterflies**: A custom `InstancedMesh` system rendering a flock of glowing butterflies flapping and orbiting the car model position.

## 🛠 How to run locally

```bash
cd butterfly-embrace
npm install
npm run dev
```

## 🚗 How to integrate your GLB car model
1. Place your `.glb` model into the `public/` directory (e.g., `public/ferrari.glb`).
2. Generate a JSX component from it using `gltfjsx`:
   ```bash
   npx gltfjsx public/ferrari.glb -t
   ```
3. Open `src/scene/CarPlaceholder.tsx`.
4. Replace the `<Box>` component with your generated model.
5. Use `<meshStandardMaterial>` or customize the materials on your GLB to react nicely to the red/gold lighting setup provided in `src/scene/EnvironmentSetup.tsx`.
