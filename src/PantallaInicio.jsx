import { useRef, useState } from "react";

export default function PantallaInicio({ onStart }) {
  const videoRef = useRef(null);
  const [activado, setActivado] = useState(false);

  const activarVideo = async () => {
    const video = videoRef.current;

    setActivado(true);

    try {
      video.muted = false;
      video.volume = 0.45;
      await video.play();
    } catch (error) {
      console.log("El navegador bloqueó el audio:", error);
    }
  };

  return (
    <section className="fixed inset-0 h-screen w-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        muted
        autoPlay
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
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-5 text-center text-white">
          <button
            onClick={activarVideo}
            className="group boton-paleo max-w-[360px]"
          >
            <span className="boton-overlay" />
            <span className="relative">Activar experiencia</span>
          </button>
        </div>
      ) : (
        <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-5 text-center text-white">
          <div className="mb-6 flex gap-5 text-2xl text-amber-700/80 md:mb-8 md:gap-8 md:text-3xl">
            <span>𐌗</span>
            <span>𐂂</span>
            <span>◎</span>
            <span>☉</span>
            <span>𐂃</span>
          </div>

          <h1 className="font-serif text-4xl font-black uppercase leading-[0.95] tracking-[0.14em] text-stone-100 drop-shadow-[0_8px_25px_rgba(0,0,0,0.95)] sm:text-5xl md:text-7xl lg:text-8xl lg:tracking-[0.2em]">
            De la nada
            <br />
            a nosotros
          </h1>

          <button
            onClick={onStart}
            className="group boton-paleo mt-12 max-w-[340px] md:mt-16"
          >
            <span className="boton-overlay" />
            <span className="absolute inset-0 rounded-[2rem] border border-stone-400/20" />
            <span className="relative flex items-center justify-center gap-4 md:gap-6">
              <span className="text-amber-600">◎</span>
              Iniciar
              <span className="text-amber-600">◇</span>
            </span>
          </button>
        </div>
      )}
    </section>
  );
}