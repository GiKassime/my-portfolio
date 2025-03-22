import { useEffect, useRef } from "react";

const FallingLetters = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dropsRef = useRef<number[]>([]);
  const fontSizeRef = useRef<number>(20); // fontSize dinâmico
  const letters = "K A S S I M E ♥".split("");
  const colors = ["#441752", "#8174A0", "#A888B5", "#EFB6C8"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Ajusta tamanho "visual" (CSS)
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      // Ajusta tamanho real para renderização (retina)
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      // Calcula o fontSize dinamicamente (ajuste como quiser)
      fontSizeRef.current = Math.max(20, Math.floor(w / 50));
      // Reinicia as colunas, baseadas no novo fontSize
      dropsRef.current = new Array(Math.floor(w / fontSizeRef.current)).fill(1);

      // Preenche o canvsas com um fundo escuro inicial
      ctx.fillStyle = "#181818"; // Cor de fundo escura
      ctx.fillRect(0, 0, w, h);
    };

    // Chama uma vez ao montar e toda vez que a tela for redimensionada
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawMatrix = () => {
      // Fundo levemente transparente (efeito "rastro")
      ctx.fillStyle = "rgba(24, 24, 24, 0.4)";
      const w = parseInt(canvas.style.width);
      const h = parseInt(canvas.style.height);
      ctx.fillRect(0, 0, w, h);

      // Usa o fontSize calculado
      const fs = fontSizeRef.current;
      ctx.font = `${fs}px monospace`;

      dropsRef.current.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;

        const x = i * fs;
        ctx.fillText(text, x, y * fs);

        // Se passou do final da tela, chance de resetar
        if (y * fs > h && Math.random() > 0.7) {
          dropsRef.current[i] = 0;
        }
        dropsRef.current[i]++;
      });
    };

    const interval = setInterval(drawMatrix, 75);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};

export default FallingLetters;