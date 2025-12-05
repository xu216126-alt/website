import React, { useEffect, useRef } from 'react';

interface Bird {
  x: number;
  y: number;
  z: number; // visual depth for parallax
  speed: number;
  scale: number;
  wingOffset: number;
  wingSpeed: number;
}

export const InfiniteSeaWindow: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Store mouse position in ref to avoid re-renders, default off-screen
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let time = 0;

    // Configuration
    const WAVE_SPEED = 0.02;
    const MOUSE_RADIUS = 300; // Interaction radius
    
    // Initialize Birds
    const birds: Bird[] = Array.from({ length: 8 }).map(() => {
      const depthFactor = Math.random(); 
      // Varied scales for depth perception
      const scale = 0.2 + (depthFactor * depthFactor) * 6.0; 
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height * 0.4),
        z: depthFactor,
        speed: 0.5 + depthFactor * 3.5,
        scale: scale,
        wingOffset: Math.random() * Math.PI * 2,
        wingSpeed: 0.1 + Math.random() * 0.1
      };
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Calculate mouse pos relative to canvas, accounting for potential scaling
      // We need to map client coordinates to canvas internal coordinate system
      const dpr = window.devicePixelRatio || 1;
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        // Double resolution for sharp circles on retina displays
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(1, 1); // We handle scaling manually in our logic or use width/height
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
      }
    };
    
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;
      
      // 1. Background (Clean White/Slate)
      ctx.fillStyle = '#f8fafc'; 
      ctx.fillRect(0, 0, width, height);

      // 2. Particle Wave Generation
      const rows = 40; 
      const cols = 50;
      
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          // Normalized coordinates (0 to 1)
          const normX = c / cols; // 0 (Left/Near) -> 1 (Right/Far)
          const normY = r / rows; // 0 (Top) -> 1 (Bottom)

          // PERSPECTIVE LOGIC
          // Left = Close (Spread out), Right = Far (Compressed)
          
          // Non-linear visual X position to exaggerate depth
          // Pushes grid points to the left to simulate perspective
          const visualX = (Math.pow(normX, 0.7)) * width; 
          
          // WAVE CALCULATION
          const wavePhase = time * WAVE_SPEED;
          
          // Primary rolling wave
          const swell = Math.sin(normX * 5 + wavePhase) * (height * 0.08);
          // Secondary ripple
          const ripple = Math.cos(normY * 8 + normX * 12 + wavePhase) * (height * 0.03);
          
          const totalWave = swell + ripple;

          // Horizon convergence
          // As normX approaches 1, everything squashes to centerY
          const amplitudeDampening = Math.pow(1 - normX, 1.2); 
          
          // Base Y position
          // Spread vertically more on the left
          const spreadY = (normY - 0.5) * height * 1.5; 
          
          let visualY = centerY + (spreadY * amplitudeDampening) + (totalWave * amplitudeDampening);

          // MOUSE INTERACTION
          // Calculate distance in screen space
          const dx = visualX - mouseRef.current.x;
          const dy = visualY - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MOUSE_RADIUS) {
            const force = (1 - dist / MOUSE_RADIUS);
            // Create a "wake" or "push" effect
            // Slowed down wave speed: time * 0.05 (was 0.2)
            const wave = Math.sin(dist * 0.04 - time * 0.05) * 50 * force;
            visualY += wave;
          }

          // SIZE CALCULATION
          // Dramatic size difference for 3D feel
          // Foreground (normX 0) -> 8px
          // Background (normX 1) -> 0.5px
          const perspectiveScale = Math.pow(1 - normX, 2); 
          const baseSize = 8.0; 
          const size = baseSize * perspectiveScale;

          if (size > 0.5) {
            ctx.beginPath();
            ctx.arc(visualX, visualY, size, 0, Math.PI * 2);
            
            // COLOR LOGIC - VIBRANT GEEK BLUE
            // Front: Dark/Rich Blue (#0284c7)
            // Back: Slightly lighter/faded but still visible
            
            // Opacity falls off towards the very end
            const alpha = 1.0 - Math.pow(normX, 3);
            
            // Color interpolation
            // Start: R2, G132, B199 (Geek 600)
            // End: R186, G230, B253 (Geek 200 - lighter blue)
            
            const r = 2 + (186 - 2) * normX;
            const g = 132 + (230 - 132) * normX;
            const b = 199 + (253 - 199) * normX;
            
            ctx.fillStyle = `rgba(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)}, ${alpha})`;
            ctx.fill();
          }
        }
      }

      // 3. Birds
      birds.sort((a, b) => a.scale - b.scale);

      birds.forEach(bird => {
        bird.x += bird.speed;
        
        // Reset Logic
        if (bird.x > width + 200) {
          bird.x = -200;
          bird.y = Math.random() * (height * 0.5) + (height * 0.1);
          const depthFactor = Math.random();
          bird.scale = 0.2 + (depthFactor * depthFactor) * 6.0;
          bird.speed = 0.5 + depthFactor * 3.5;
        }

        // Float logic
        const flyY = Math.sin(time * 0.05 + bird.x * 0.01) * 20;
        const wingY = Math.sin(time * 0.2 + bird.wingOffset) * (5 * bird.scale);

        ctx.save();
        ctx.translate(bird.x, bird.y + flyY);
        ctx.scale(bird.scale, bird.scale);
        
        ctx.beginPath();
        // More stylized bird shape
        ctx.moveTo(-6, -2);
        ctx.quadraticCurveTo(0, 8 + wingY, 6, -2); // Wing down
        ctx.lineTo(0, 3); // Body
        ctx.lineTo(-6, -2);
        
        // Dark Navy for contrast
        ctx.fillStyle = '#0f172a'; 
        ctx.fill();
        ctx.restore();
      });

      time += 1;
      frameId = requestAnimationFrame(draw);
    };

    frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full object-cover"
      style={{ opacity: 1 }}
    />
  );
};
