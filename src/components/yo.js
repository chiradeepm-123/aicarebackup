import { useEffect, useRef } from 'react';

export function useHeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const hero = canvas.parentElement;

    let W, H;
    let nodes = [], edges = [], pulses = [];
    let animId;

    function buildGrid() {
      nodes = []; edges = []; pulses = [];
      const GRID_COLS = 22;
      const colW = W / GRID_COLS;
      const rows = Math.ceil(H / colW) + 1;

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= GRID_COLS; c++) {
          nodes.push({
            x: c * colW,
            y: r * colW,
            r: Math.random() < 0.12 ? 3.5 : Math.random() < 0.3 ? 2 : 1.2,
            pulse: Math.random() < 0.15,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.8,
            alpha: 0.08 + Math.random() * 0.22,
          });
        }
      }

      const cols1 = GRID_COLS + 1;
      for (let i = 0; i < nodes.length; i++) {
        [i + 1, i + cols1, i + cols1 + 1, i + cols1 - 1].forEach(j => {
          if (j < nodes.length && Math.random() < 0.45) {
            edges.push({ a: i, b: j, alpha: 0.05 + Math.random() * 0.12, elbow: Math.random() < 0.8 });
          }
        });
      }

      for (let i = 0; i < 6; i++) spawnPulse();
    }

    function spawnPulse() {
      if (!edges.length) return;
      const e = edges[Math.floor(Math.random() * edges.length)];
      pulses.push({ edge: e, t: 0, speed: 0.004 + Math.random() * 0.008, gold: Math.random() < 0.25 });
    }

    function resize() {
      W = canvas.width = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
      buildGrid();
    }

    let time = 0;
    function draw() {
      time += 0.012;
      ctx.clearRect(0, 0, W, H);

      edges.forEach(e => {
        const a = nodes[e.a], b = nodes[e.b];
        ctx.beginPath();
        if (e.elbow) {
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, a.y);
          ctx.lineTo(b.x, b.y);
        } else {
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
        }
        ctx.strokeStyle = `rgba(0,162,255,${e.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      nodes.forEach(n => {
        let alpha = n.alpha;
        if (n.pulse) {
          alpha = n.alpha * (0.5 + 0.5 * Math.sin(time * n.speed + n.phase));
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,162,255,${alpha * 0.15})`;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100,200,255,${alpha})`;
        ctx.fill();
      });

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        const e = p.edge;
        const a = nodes[e.a], b = nodes[e.b];
        p.t += p.speed;
        if (p.t > 1) { pulses.splice(i, 1); spawnPulse(); continue; }

        let px, py;
        if (e.elbow) {
          if (p.t < 0.5) { px = a.x + (b.x - a.x) * (p.t * 2); py = a.y; }
          else { px = b.x; py = a.y + (b.y - a.y) * ((p.t - 0.5) * 2); }
        } else {
          px = a.x + (b.x - a.x) * p.t;
          py = a.y + (b.y - a.y) * p.t;
        }

        const col = p.gold ? '232,160,32' : '0,200,255';
        const glow = ctx.createRadialGradient(px, py, 0, px, py, 7);
        glow.addColorStop(0, `rgba(${col},0.90)`);
        glow.addColorStop(0.4, `rgba(${col},0.30)`);
        glow.addColorStop(1, `rgba(${col},0)`);
        ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = glow; ctx.fill();
        ctx.beginPath(); ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},1)`; ctx.fill();
      }

      if (pulses.length < 8 && Math.random() < 0.04) spawnPulse();
      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return canvasRef;
}
