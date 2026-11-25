import React, { useEffect, useRef } from "react";

interface AmbientCanvas3DProps {
  mode: "hero" | "impact" | "cta";
  className?: string;
}

/**
 * Instalação visual tecnológica em Canvas 2D com projeção 3D em tempo real.
 * Representa expansão, profundidade e precisão estratégica com respeito a prefers-reduced-motion.
 */
export const AmbientCanvas3D: React.FC<AmbientCanvas3DProps> = ({
  mode,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect ? rect.width : window.innerWidth;
      height = rect ? rect.height : window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Generate 3D architectural lattice points (nested octahedron / ascending prism rings)
    interface Point3D {
      x: number;
      y: number;
      z: number;
      ring: number;
    }

    const points: Point3D[] = [];
    const rings = mode === "impact" ? 5 : 6;
    const segments = 16;

    for (let r = 0; r < rings; r++) {
      const radius = 110 + r * 52;
      const yOffset = (r - rings / 2) * 38;
      for (let s = 0; s < segments; s++) {
        const angle = (s / segments) * Math.PI * 2 + r * 0.22;
        points.push({
          x: Math.cos(angle) * radius,
          y: yOffset + Math.sin(angle * 2) * 18,
          z: Math.sin(angle) * radius,
          ring: r,
        });
      }
    }

    // Subtle floating architectural particles
    const particles = Array.from({ length: 42 }, (_, i) => ({
      x: ((i * 73) % 100) / 100 - 0.5,
      y: ((i * 41) % 100) / 100 - 0.5,
      z: ((i * 29) % 100) / 100,
      size: (i % 3) * 0.7 + 0.8,
      speed: 0.00018 + (i % 4) * 0.00008,
    }));

    let time = 0;

    const project = (
      px: number,
      py: number,
      pz: number,
      rotY: number,
      rotX: number,
      cx: number,
      cy: number
    ) => {
      // Rotate Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = px * cosY - pz * sinY;
      const z1 = pz * cosY + px * sinY;

      // Rotate X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = py * cosX - z1 * sinX;
      const z2 = z1 * cosX + py * sinX;

      const fov = 720;
      const scale = fov / (fov + z2 + 340);
      return {
        x: cx + x1 * scale,
        y: cy + y2 * scale,
        scale,
        z: z2,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const centerX =
        mode === "hero"
          ? width > 1024
            ? width * 0.7
            : width * 0.5
          : width * 0.5;
      const centerY = height * 0.5;

      // Ambient crimson volumetric light glow
      const glowRadius = Math.max(width, height) * (mode === "impact" ? 0.6 : 0.52);
      const grad = ctx.createRadialGradient(
        centerX + mouseX * 35,
        centerY + mouseY * 25,
        10,
        centerX,
        centerY,
        glowRadius
      );

      if (mode === "hero") {
        grad.addColorStop(0, "rgba(255, 18, 18, 0.24)");
        grad.addColorStop(0.35, "rgba(194, 1, 0, 0.14)");
        grad.addColorStop(0.75, "rgba(101, 0, 0, 0.05)");
        grad.addColorStop(1, "rgba(5, 5, 5, 0)");
      } else if (mode === "impact") {
        grad.addColorStop(0, "rgba(5, 5, 5, 0.72)");
        grad.addColorStop(0.45, "rgba(101, 0, 0, 0.35)");
        grad.addColorStop(1, "rgba(194, 1, 0, 0)");
      } else {
        grad.addColorStop(0, "rgba(255, 18, 18, 0.3)");
        grad.addColorStop(0.45, "rgba(194, 1, 0, 0.16)");
        grad.addColorStop(1, "rgba(5, 5, 5, 0)");
      }

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const rotY = time * 0.28 + mouseX * 0.22;
      const rotX = 0.38 + Math.sin(time * 0.18) * 0.1 + mouseY * 0.16;

      // Project all points
      const projected = points.map((p) =>
        project(p.x, p.y, p.z, rotY, rotX, centerX, centerY)
      );

      // Draw architectural rings & diagonal cross-struts
      ctx.lineWidth = 1;
      for (let r = 0; r < rings; r++) {
        const ringAlpha = mode === "impact" ? 0.28 - r * 0.03 : 0.34 - r * 0.04;
        for (let s = 0; s < segments; s++) {
          const currIdx = r * segments + s;
          const nextIdx = r * segments + ((s + 1) % segments);
          const p1 = projected[currIdx];
          const p2 = projected[nextIdx];

          ctx.strokeStyle =
            mode === "impact"
              ? `rgba(10, 10, 10, ${Math.max(0.12, ringAlpha + 0.15)})`
              : `rgba(255, 18, 18, ${Math.max(0.06, ringAlpha)})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();

          if (r < rings - 1) {
            const outerIdx = (r + 1) * segments + s;
            const p3 = projected[outerIdx];
            ctx.strokeStyle =
              mode === "impact"
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(255, 255, 255, 0.07)";
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.stroke();
          }
        }
      }

      // Draw crisp nodes on outer vertices
      for (let i = 0; i < projected.length; i += 2) {
        const pt = projected[i];
        if (pt.scale <= 0) continue;
        const alpha = Math.min(0.85, Math.max(0.15, pt.scale * 0.55));
        ctx.fillStyle =
          mode === "impact"
            ? `rgba(255, 255, 255, ${alpha * 0.5})`
            : `rgba(255, 18, 18, ${alpha})`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.scale * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Subtle architectural light streaks / particles
      particles.forEach((pt, idx) => {
        const yDrift = ((pt.y + time * pt.speed * 180 + 0.5) % 1) - 0.5;
        const px = width * (0.5 + pt.x) + mouseX * (15 + idx * 0.2);
        const py = height * (0.5 + yDrift) + mouseY * 12;
        ctx.fillStyle =
          idx % 3 === 0
            ? "rgba(255, 18, 18, 0.35)"
            : "rgba(255, 255, 255, 0.16)";
        ctx.beginPath();
        ctx.arc(px, py, pt.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        time += 0.008;
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
};
