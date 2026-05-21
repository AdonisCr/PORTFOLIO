import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const trailPosRef = useRef({ x: 0, y: 0 });
  const hoveringRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const main = mainRef.current;
    const trail = trailRef.current;
    if (!main || !trail) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      main.style.left = `${e.clientX}px`;
      main.style.top = `${e.clientY}px`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer');

      hoveringRef.current = !!isInteractive;
      main.classList.toggle('hovering', !!isInteractive);
      trail.classList.toggle('hovering', !!isInteractive);
    };

    const animate = () => {
      trailPosRef.current.x += (mouseRef.current.x - trailPosRef.current.x) * 0.15;
      trailPosRef.current.y += (mouseRef.current.y - trailPosRef.current.y) * 0.15;
      trail.style.left = `${trailPosRef.current.x}px`;
      trail.style.top = `${trailPosRef.current.y}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={mainRef} className="cursor-main" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
};

export default CustomCursor;
