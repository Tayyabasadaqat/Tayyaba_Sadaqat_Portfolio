"use client";

import { useEffect, useRef } from "react";

export default function ConstellationBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let particles = [];

    const mouse = {
      x: null,
      y: null,
      radius: 140,
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;

        this.baseX = this.x;
        this.baseY = this.y;

        this.size = Math.random() * 1.5 + 0.6;

        this.vx = (Math.random() - 0.5) * 0.18;
        this.vy = (Math.random() - 0.5) * 0.18;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // bounce off edges
        if (this.x <= 0 || this.x >= window.innerWidth) {
          this.vx *= -1;
        }

        if (this.y <= 0 || this.y >= window.innerHeight) {
          this.vy *= -1;
        }

        // cursor reaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;

            const directionX = dx / distance;
            const directionY = dy / distance;

            this.x -= directionX * force * 1.2;
            this.y -= directionY * force * 1.2;
          }
        }
      }

      draw() {
        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "rgba(139, 92, 246, 0.55)";
        ctx.fill();

        // tiny glow
        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size * 3.2,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "rgba(124, 58, 237, 0.04)";
        ctx.fill();
      }
    }

    const createParticles = () => {
      particles = [];

      const density =
        window.innerWidth < 768
          ? 45
          : Math.min(
              95,
              Math.floor(window.innerWidth / 18)
            );

      for (let i = 0; i < density; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      const maxDistance = 125;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity =
              1 - distance / maxDistance;

            ctx.beginPath();

            ctx.moveTo(
              particles[i].x,
              particles[i].y
            );

            ctx.lineTo(
              particles[j].x,
              particles[j].y
            );

            ctx.strokeStyle = `rgba(124, 58, 237, ${
              opacity * 0.12
            })`;

            ctx.lineWidth = 0.6;

            ctx.stroke();
          }
        }
      }
    };

    const connectMouse = () => {
      if (mouse.x === null || mouse.y === null) return;

      const maxDistance = 165;

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity =
            1 - distance / maxDistance;

          ctx.beginPath();

          ctx.moveTo(
            mouse.x,
            mouse.y
          );

          ctx.lineTo(
            particle.x,
            particle.y
          );

          ctx.strokeStyle = `rgba(167, 139, 250, ${
            opacity * 0.28
          })`;

          ctx.lineWidth = 0.7;

          ctx.stroke();
        }
      });
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      connectMouse();

      animationFrameId =
        requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        pointer-events-none
        fixed
        inset-0
        z-[5]
      "
    />
  );
}