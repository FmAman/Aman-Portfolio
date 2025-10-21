import { useEffect, useRef } from 'react';

const PARTICLE_COLOR_LIGHT = 'rgba(99, 102, 241, 0.35)';
const PARTICLE_COLOR_DARK = 'rgba(129, 140, 248, 0.55)';

function createParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 1 + Math.random() * 2.8,
    speedX: -0.3 + Math.random() * 0.6,
    speedY: -0.2 + Math.random() * 0.4,
  };
}

function ParticleBackground({ className = '' }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    const particleCount = window.innerWidth < 640 ? 35 : 60;
    let particles = [];
    let width = 0;
    let height = 0;

    const drawParticle = (particle, color) => {
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = color;
      context.fill();
    };

    const updateParticle = (particle) => {
      const newParticle = particle;
      newParticle.x += newParticle.speedX;
      newParticle.y += newParticle.speedY;

      if (newParticle.x < -10) newParticle.x = width + 10;
      if (newParticle.x > width + 10) newParticle.x = -10;
      if (newParticle.y < -10) newParticle.y = height + 10;
      if (newParticle.y > height + 10) newParticle.y = -10;
    };

    const setCanvasSize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;

      canvas.width = width * ratio;
      canvas.height = height * ratio;

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(ratio, ratio);

      particles = Array.from({ length: particleCount }, () => createParticle(width, height));
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      const color =
        document.documentElement.getAttribute('data-theme') === 'dark'
          ? PARTICLE_COLOR_DARK
          : PARTICLE_COLOR_LIGHT;

      particles.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle, color);
      });

      animationRef.current = requestAnimationFrame(render);
    };

    setCanvasSize();
    render();

    const handleResize = () => {
      cancelAnimationFrame(animationRef.current);
      setCanvasSize();
      render();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={`particle-background ${className}`.trim()} aria-hidden="true" />;
}

export default ParticleBackground;
