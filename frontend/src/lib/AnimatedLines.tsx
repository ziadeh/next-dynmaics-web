"use client";

import React, { useEffect, useRef } from "react";
type AnimatedLinesProps = {
  className?: string;
};
const AnimatedLines: React.FC<AnimatedLinesProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles array
    const particles: Particle[] = [];
    const numParticles = 100;

    class Particle {
      x: number;
      y: number;
      radius: number;
      speed: number;
      angle: number;

      constructor(x: number, y: number, radius: number, speed: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        //@ts-ignore
        if (this.x < 0 || this.x > canvas.width)
          this.angle = Math.PI - this.angle;
        //@ts-ignore
        if (this.y < 0 || this.y > canvas.height) this.angle = -this.angle;
      }

      draw() {
        //@ts-ignore
        ctx.beginPath();
        //@ts-ignore
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        //@ts-ignore
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        //@ts-ignore
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 4 + 1,
          Math.random() * 0.5 + 0.2,
        ),
      );
    }

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dist = Math.hypot(
            //@ts-ignore
            particles[a].x - particles[b].x,
            //@ts-ignore
            particles[a].y - particles[b].y,
          );

          if (dist < 120) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 120})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            //@ts-ignore
            ctx.moveTo(particles[a].x, particles[a].y);
            //@ts-ignore
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};

export default AnimatedLines;
