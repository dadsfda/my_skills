const hero = document.getElementById("inkHero");
const canvas = document.getElementById("inkMask");

createInkReveal({
  container: hero,
  canvas,
  maskColor: "#fcfaf8",
});

export function createInkReveal(options) {
  const {
    container,
    canvas,
    maskColor = "#fcfaf8",
    radiusStart = 8,
    radiusEnd = 128,
    radiusVary = 0.45,
    lifetime = 520,
    stampStep = 12,
    maxStamps = 160,
  } = options;

  if (!container || !canvas) return () => {};
  if (!window.matchMedia("(hover: hover)").matches) return () => {};

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const stamps = [];
  let width = 0;
  let height = 0;
  let lastX = null;
  let lastY = null;
  let running = false;

  function resize() {
    const rect = container.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    paintMask();
  }

  function paintMask() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = maskColor;
    ctx.fillRect(0, 0, width, height);
  }

  function addStamp(x, y) {
    if (stamps.length >= maxStamps) stamps.shift();
    stamps.push({
      x,
      y,
      born: performance.now(),
      seed: Math.random() * Math.PI * 2,
      rmax: radiusEnd * (1 - radiusVary + Math.random() * radiusVary),
    });
  }

  function stampAlong(x, y) {
    if (lastX === null || lastY === null) {
      addStamp(x, y);
    } else {
      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.hypot(dx, dy);
      const steps = Math.max(1, Math.ceil(dist / stampStep));

      for (let i = 1; i <= steps; i += 1) {
        addStamp(lastX + (dx * i) / steps, lastY + (dy * i) / steps);
      }
    }

    lastX = x;
    lastY = y;
  }

  function carveInk(x, y, r, alpha, seed) {
    const gradient = ctx.createRadialGradient(x, y, r * 0.25, x, y, r);
    gradient.addColorStop(0, `rgba(0, 0, 0, ${0.95 * alpha})`);
    gradient.addColorStop(0.55, `rgba(0, 0, 0, ${0.88 * alpha})`);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();

    const segments = 32;
    for (let i = 0; i <= segments; i += 1) {
      const angle = (i / segments) * Math.PI * 2;
      const wobble =
        0.78 +
        0.14 * Math.sin(angle * 3 + seed) +
        0.08 * Math.sin(angle * 7 + seed * 2.1) +
        0.05 * Math.sin(angle * 13 + seed * 0.7);
      const rr = r * wobble;
      const px = x + Math.cos(angle) * rr;
      const py = y + Math.sin(angle) * rr;

      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }

    ctx.closePath();
    ctx.fill();
  }

  function loop() {
    const now = performance.now();
    paintMask();

    ctx.globalCompositeOperation = "destination-out";
    for (let i = stamps.length - 1; i >= 0; i -= 1) {
      const stamp = stamps[i];
      const t = (now - stamp.born) / lifetime;

      if (t >= 1) {
        stamps.splice(i, 1);
        continue;
      }

      const ease = 1 - Math.pow(1 - t, 3);
      const radius = radiusStart + (stamp.rmax - radiusStart) * ease;
      const alpha = 1 - t * t;
      carveInk(stamp.x, stamp.y, radius, alpha, stamp.seed);
    }

    if (stamps.length) {
      requestAnimationFrame(loop);
    } else {
      running = false;
    }
  }

  function start() {
    if (!running) {
      running = true;
      requestAnimationFrame(loop);
    }
  }

  function pointerMove(event) {
    const rect = container.getBoundingClientRect();
    stampAlong(event.clientX - rect.left, event.clientY - rect.top);
    start();
  }

  function pointerLeave() {
    lastX = null;
    lastY = null;
  }

  resize();
  window.addEventListener("resize", resize);
  container.addEventListener("pointerenter", pointerMove);
  container.addEventListener("pointermove", pointerMove);
  container.addEventListener("pointerleave", pointerLeave);

  return function destroy() {
    window.removeEventListener("resize", resize);
    container.removeEventListener("pointerenter", pointerMove);
    container.removeEventListener("pointermove", pointerMove);
    container.removeEventListener("pointerleave", pointerLeave);
  };
}
