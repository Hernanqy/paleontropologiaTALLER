import { useRef, useState } from "react";

export default function PantallaInicio({ onStart }) {
  const videoRef = useRef(null);
  const [activado, setActivado] = useState(false);

  const activarVideo = async () => {
  const video = videoRef.current;
  video.muted = false;
  video.volume = 0.45;

  try {
    await video.play();
    setActivado(true);
  } catch (error) {
    console.log("El navegador bloqueó el audio:", error);
  }
};

  return (
    <section className="fixed inset-0 h-screen w-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/video/fondo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.85)_100%)]" />

      {!activado ? (
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <button
            onClick={activarVideo}
            className="rounded-[2rem] border border-amber-900/80 bg-stone-900/75 px-12 py-6 font-serif text-2xl uppercase tracking-[0.3em] text-stone-200 shadow-[0_18px_50px_rgba(0,0,0,0.85)] backdrop-blur-sm transition hover:scale-105 hover:bg-stone-800"
          >
            Activar experiencia
          </button>
        </div>
      ) : (
        <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 text-center text-white">
          <div className="mb-8 flex gap-8 text-3xl text-amber-700/80">
            <span>𐌗</span>
            <span>𐂂</span>
            <span>◎</span>
            <span>☉</span>
            <span>𐂃</span>
          </div>

          <h1 className="font-serif text-6xl font-black uppercase leading-[0.92] tracking-[0.2em] text-stone-100 drop-shadow-[0_8px_25px_rgba(0,0,0,0.95)] md:text-8xl">
            De la nada
            <br />
            a nosotros
          </h1>

          <button
  onClick={onStart}
  className="group relative mt-16 min-w-[340px] overflow-hidden rounded-[2.5rem]
  border border-amber-900/70
  bg-gradient-to-b from-stone-700 via-stone-800 to-stone-900
  px-12 py-6
  font-serif text-3xl uppercase tracking-[0.35em]
  text-amber-100
  shadow-[inset_0_2px_8px_rgba(255,255,255,0.15),inset_0_-6px_12px_rgba(0,0,0,0.8),0_15px_40px_rgba(0,0,0,0.9)]
  transition duration-300
  hover:scale-105 hover:brightness-110"
>
  {/* textura tipo piedra */}
  <span className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />

  {/* brillo superior */}
  <span className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/60 rounded-[2.5rem]" />

  {/* borde interno */}
  <span className="absolute inset-0 rounded-[2.5rem] border border-stone-400/20" />

  {/* contenido */}
  <span className="relative flex items-center justify-center gap-6">
    <span className="text-amber-600 text-xl">◎</span>
    Iniciar
    <span className="text-amber-600 text-xl">◇</span>
  </span>
</button>
        </div>
      )}
    </section>
  );
}