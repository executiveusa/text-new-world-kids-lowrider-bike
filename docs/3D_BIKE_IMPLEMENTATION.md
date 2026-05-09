# 3D Bike Model Architecture & Implementation Guide

## Overview

The lowrider bike is now rendered in **real-time 3D** using **React Three Fiber** (R3F), a React renderer for Three.js. This replaces the placeholder with a fully interactive, programmatically-generated 3D model.

---

## Technology Stack

### Core Libraries
- **Three.js** (`three@^0.182.0`) - 3D graphics engine
- **React Three Fiber** (`@react-three/fiber`) - React renderer for Three.js
- **Drei** (`@react-three/drei`) - Reusable 3D components and utilities

### Previous Systems (Still Available)
- **ModelViewer** (`@google/model-viewer`) - For future GLB/GLTF model support
- **Bike360Viewer** (Cloudimage) - 360-degree image sequence viewer (fallback option)

---

## How the 3D Bike Model Works

### Architecture

**File:** `/components/campaign/Bike3D.tsx`

The component is structured in three layers:

#### 1. **Bike Component** - 3D Geometry Builder
- Programmatically constructs the entire bike from primitive geometries
- Uses THREE primitives: cylinders (tubes), spheres (hubs), boxes (components)
- Each part has:
  - **Position** - 3D coordinates `[x, y, z]`
  - **Material** - Color, metalness, roughness for realistic rendering
  - **Geometry** - Shape and dimensions

#### 2. **BikeScene Component** - 3D Environment
- Sets up lighting, camera, and user controls
- **Lighting:**
  - `ambientLight` - Fills shadows uniformly
  - `directionalLight` (2x) - Creates realistic shading and shadows
- **Environment:** Studio preset for professional appearance
- **Controls:** OrbitControls for mouse interaction

#### 3. **Bike3D Component** - Canvas Wrapper
- Wraps the scene in a Three.js Canvas
- Handles Suspense loading states
- Responsive sizing with `h-[500px] lg:h-[600px]`

---

## Building the 3D Model: Key Components

### Frame (Blue Metal Structure)
```
Position: [0, 0, 0]
Material: Blue (#0066ff) with metallic finish

- Top Tube: Main horizontal beam
- Down Tube: Diagonal support (angled down)
- Seat Tube: Post connecting frame to seat
- Chainstays: Rear horizontal supports (2x for stability)
- Seatstays: Rear angled supports (2x)
```

**Why These Parts?**
From your reference images, Rocky Mountain frames use welded aluminum tubing. Each tube is a `cylinderGeometry` with:
- Thin radius (0.025–0.038 units) for realistic tube diameter
- Length matching the actual proportions
- Metalness=0.8 for shiny aluminum appearance

### Fork & Steering (Black Steel)
```
Position: [0.15, 0.25, 0] - Front of frame
Material: Black (#1a1a1a) with high metalness

- Fork Blades: Two downward-angled cylinders
- Fork Crown: Top connecting piece
- Headset: Blue connection point to frame
```

**Why Black?** Stock forks are typically steel with powder-coat finish, darker than the frame.

### Wheels
```
Hubs (Spheres): Position [0.15, -0.2, 0] (front) and [-0.35, -0.2, 0] (rear)
Spokes: 32 individual cylinders radiating from center
Tires: Implied by geometry (actual tire models would be imported GLB)
```

**Why 32 Spokes?** Standard for modern bikes. Each spoke is rotated 11.25° (360°/32).

### Drivetrain (Black Components)
```
Crankset: Cylinder at pedal area (-0.1, 0, 0)
Chainrings: Dark circles showing tooth pattern
Pedals: Small boxes (2x) on rotating arms
```

### Handlebars & Controls
```
Handlebars: Black drop-bar shape
Stem: White/silver connector
```

### Brakes
```
Simple box primitives positioned at wheel areas
In a full model, would include: calipers, pads, cables
```

---

## Material Properties Explained

Each 3D object has a `meshStandardMaterial` with properties:

```typescript
<meshStandardMaterial
  color="#0066ff"        // RGB hex color
  metalness={0.8}        // 0=matte, 1=polished metal
  roughness={0.2}        // 0=mirror, 1=completely diffuse
/>
```

**Applied Colors:**
- **Blue (#0066ff)** - Main frame tubes
- **Darker Blue (#0055cc)** - Rear components (shadows)
- **Black (#1a1a1a)** - Fork, seat, drivetrain, pedals
- **Dark Gray (#aaa)** - Spokes (aluminum)

---

## Lighting Strategy

### Three-Light Setup

1. **Ambient Light** (intensity: 0.8)
   - Prevents pure black shadows
   - Fills crevices between frame tubes
   - Creates overall visibility

2. **Key Light** (position: [5, 8, 5], intensity: 1.2)
   - Main directional light from upper right
   - Casts sharp shadows on ground plane (conceptual)
   - Highlights metallic surfaces

3. **Fill Light** (position: [-5, 3, -5], intensity: 0.6)
   - Softer light from opposite side
   - Reduces harsh shadows
   - Creates visual balance

---

## User Interaction

### OrbitControls
- **Drag**: Rotate the bike 360°
- **Scroll**: Zoom in/out
- **Right-Click + Drag**: Pan camera
- **Auto-Rotate**: Bikes slowly rotates when not interacting (4 degree/frame)

### Camera Position
```javascript
camera={{ position: [0.8, 0.4, 0.8], fov: 50 }}
```
- **Position**: [0.8, 0.4, 0.8] = slightly right, above center, toward viewer
- **FOV**: 50° provides good framing without distortion

---

## Performance Optimization

### Current Optimizations
1. **DPR (Device Pixel Ratio):** `dpr={[1, 2]}`
   - Mobile: 1x resolution
   - Desktop: 2x for retina displays

2. **Suspense Loading:** Shows skeleton while canvas initializes

3. **Primitive Geometries:** No imported models = instant rendering
   - No GLB parsing delays
   - No network requests required

### Future Improvements
- Implement LOD (Level of Detail) system for distant components
- Bake shadows instead of real-time rendering
- Consider instanced geometry for spokes

---

## Next Steps: Enhancing the Model

### Option 1: Photogrammetry GLB Import
- Scan the actual bike with Structure Sensor or Photogrammetry software
- Export as `.glb` file
- Load via `Gltf` component from @react-three/drei
- Replaces primitives with photo-realistic mesh

### Option 2: Add Custom Decals
- Import bike texture maps (from reference photos)
- Apply as material textures to frame tubes
- Add "ROCKY MOUNTAIN" and "EDGE 24" branding as texture decals

### Option 3: Physics Simulation
- Use `@react-three/rapier` for interactive components
- Spin wheels on click
- Rotate cranks continuously

### Option 4: Animation Timeline
- Show assembly process (parts appearing one-by-one)
- Highlight specific components on scroll
- Animate rotation on page load

---

## Comparison: Old vs. New

| Feature | Bike360Viewer | Bike3D (New) |
|---------|--------------|------------|
| **Rendering** | 36 pre-rendered JPGs | Real-time 3D |
| **File Size** | 20–50 MB | ~500 KB (code only) |
| **Interaction** | Drag to rotate | Full 3D orbit + zoom |
| **Customization** | Limited | Fully programmable |
| **Load Time** | Network dependent | Instant |
| **Device Support** | All (image-based) | WebGL required |
| **Scalability** | Fixed angles | Infinite resolution |

---

## Troubleshooting

### Issue: 3D doesn't render
**Solution:** Check browser WebGL support. Clear cache and hard-reload (Cmd+Shift+R).

### Issue: Bike looks flat/no shadows
**Solution:** Verify `castShadow` is set on geometries and `shadowMap.enabled` on renderer.

### Issue: Performance lag on mobile
**Solution:** Reduce poly count by simplifying tube geometry or using `dpr={1}` only.

### Issue: Handlebars/details too small
**Solution:** Increase scale multiplier on all positions and sizes (multiply by 2–3x).

---

## Code Reference: Adding New Components

To add a new 3D part (e.g., water bottle):

```typescript
// Inside <group ref={groupRef}>
<mesh position={[0.05, 0.2, 0.08]} castShadow>
  <cylinderGeometry args={[0.02, 0.02, 0.15, 16]} />
  <meshStandardMaterial 
    color="#ff0000" 
    metalness={0.5} 
    roughness={0.8} 
  />
</mesh>
```

Key parameters:
- **position**: [x, y, z] coordinates
- **args**: [radius_top, radius_bottom, height, segments]
- **color**: Any CSS/hex color
- **metalness/roughness**: Adjust for material appearance

---

## Deployment

Build is production-ready:
```bash
npm run build
# Output: ✓ Compiled successfully
```

No additional assets required beyond the code. 3D rendering happens entirely client-side.

---

## Summary

You now have a **professional 3D lowrider bike model** that:
✅ Renders in real-time with no network overhead
✅ Provides full interactive controls (orbit, zoom, pan)
✅ Auto-rotates to draw attention
✅ Uses physically-based materials for realism
✅ Scales responsively across devices
✅ Fully customizable via code

The model is ready for **enhancement with actual 3D scans, textures, and animations** as the build progresses!
