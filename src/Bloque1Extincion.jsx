import { useState } from "react";

export default function Bloque1Extincion({ onNext }) {
  const [fase, setFase] = useState("video");
  const [respuesta, setRespuesta] = useState(null);

  const opciones = [
    { texto: "Un meteorito", correcta: false },
    { texto: "Volcanes gigantes", correcta: false },
    { texto: "Cambio climático extremo", correcta: false },
    { texto: "Una combinación de eventos", correcta: true },
  ];

  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-black text-white">
      {fase === "video" ? (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/video/extincion.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.85)_100%)]" />

          <div className="relative z-10 flex h-screen flex-col items-center justify-center px-8 text-center">
            <div className="mb-8 flex gap-8 text-3xl text-amber-700/80">
              <span>☄</span>
              <span>𐂂</span>
              <span>◎</span>
              <span>◇</span>
              <span>𐌗</span>
            </div>

            <h1 className="font-serif text-5xl font-black uppercase leading-[0.95] tracking-[0.18em] text-stone-100 drop-shadow-2xl md:text-7xl">
              Cuando los gigantes
              <br />
              desaparecieron
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-stone-200 md:text-2xl">
              Hace 66 millones de años, la Tierra cambió para siempre.
              Los dinosaurios desaparecieron… y el mundo quedó abierto para otros sobrevivientes.
            </p>

            <button
              onClick={() => setFase("imagen")}
              className="group relative mt-16 min-w-[330px] overflow-hidden rounded-[2.5rem]
              border border-amber-900/70 bg-gradient-to-b from-stone-700 via-stone-800 to-stone-900
              px-10 py-5 font-serif text-2xl uppercase tracking-[0.3em] text-amber-100
              shadow-[inset_0_2px_8px_rgba(255,255,255,0.15),inset_0_-6px_12px_rgba(0,0,0,0.8),0_15px_40px_rgba(0,0,0,0.9)]
              transition duration-300 hover:scale-105 hover:brightness-110"
            >
              <span className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/60" />
              <span className="relative">Continuar</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <img
            src="/imagenes/extincion-mamiferos.jpg"
            alt="Extinción de dinosaurios y oportunidad de los mamíferos"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />

          <button
            onClick={onNext}
            className="fixed left-6 top-6 z-30 rounded-full border border-amber-900 bg-stone-900/75 px-5 py-3 font-serif text-sm uppercase tracking-[0.2em] text-amber-200 backdrop-blur-md transition hover:scale-105"
          >
            ← Inicio
          </button>

          <div className="relative z-10 grid min-h-screen grid-cols-1 gap-8 px-8 py-10 md:grid-cols-[1fr_420px]">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-[0.45em] text-amber-600">
                Bloque 1
              </p>

              <h2 className="font-serif text-5xl font-black uppercase leading-[0.95] tracking-[0.16em] text-stone-100 md:text-7xl">
                Extinción
                <br />
                y oportunidad
              </h2>

              <div className="my-8 flex items-center gap-5 text-amber-700">
                <span className="h-px w-24 bg-amber-700/70" />
                <span className="text-3xl">◇</span>
                <span className="h-px w-24 bg-amber-700/70" />
              </div>

              <p className="max-w-3xl text-2xl leading-relaxed text-stone-200">
                La desaparición de los dinosaurios dejó espacios libres:
                nuevos refugios, nuevos alimentos y menos competencia.
                Allí, los pequeños mamíferos tuvieron una oportunidad.
              </p>

              <p className="mt-6 max-w-2xl text-xl italic text-amber-100">
                “La evolución no premia siempre al más fuerte: premia al que logra adaptarse.”
              </p>
            </div>

            <aside className="flex flex-col justify-center rounded-[2rem] border border-amber-900/50 bg-stone-950/65 p-7 shadow-2xl backdrop-blur-md">
              <p className="mb-3 font-serif text-sm uppercase tracking-[0.35em] text-amber-600">
                Juego colectivo
              </p>

              <h3 className="font-serif text-3xl font-black uppercase tracking-[0.08em] text-stone-100">
                ¿Qué causó la gran extinción?
              </h3>

              <div className="mt-6 grid gap-3">
                {opciones.map((opcion, index) => {
                  const seleccionada = respuesta === index;
                  const mostrarCorrecta = respuesta !== null && opcion.correcta;

                  return (
                    <button
                      key={opcion.texto}
                      onClick={() => setRespuesta(index)}
                      className={`rounded-2xl border px-5 py-4 text-left font-serif text-lg uppercase tracking-[0.12em] transition ${
                        mostrarCorrecta
                          ? "border-emerald-500 bg-emerald-900/50 text-emerald-100"
                          : seleccionada
                          ? "border-red-500 bg-red-900/40 text-red-100"
                          : "border-amber-900/50 bg-stone-900/70 text-stone-200 hover:border-amber-500 hover:bg-stone-800"
                      }`}
                    >
                      {opcion.texto}
                    </button>
                  );
                })}
              </div>

            {respuesta !== null && (
  <>
    <div className="mt-6 rounded-2xl border border-amber-900/50 bg-black/35 p-5">
      <p className="font-serif text-xl text-amber-100">
        La respuesta más completa es:
      </p>
      <p className="mt-2 text-2xl font-bold text-white">
        una combinación de eventos.
      </p>
      <p className="mt-3 text-stone-300">
        El impacto del meteorito fue clave, pero también hubo cambios ambientales extremos.
        La vida no terminó: se reorganizó.
      </p>
    </div>

    <button
      onClick={onNext}
      className="group relative mt-6 w-full overflow-hidden rounded-[2rem] border border-amber-900/70 bg-gradient-to-b from-stone-700 via-stone-800 to-stone-900 px-8 py-5 font-serif text-xl uppercase tracking-[0.25em] text-amber-100 shadow-[inset_0_2px_8px_rgba(255,255,255,0.15),inset_0_-6px_12px_rgba(0,0,0,0.8),0_15px_40px_rgba(0,0,0,0.9)] transition duration-300 hover:scale-105 hover:brightness-110"
    >
      <span className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/60" />
      <span className="relative">Siguiente etapa →</span>
    </button>
  </>
)}
            </aside>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20 flex h-14 items-center justify-center gap-9 border-t border-amber-900/25 bg-black/40 text-2xl text-amber-900/60 backdrop-blur-sm">
            <span>☄</span>
            <span>𐂂</span>
            <span>◎</span>
            <span>◇</span>
            <span>𐌗</span>
            <span>☽</span>
            <span>𐂃</span>
          </div>
        </>
      )}
    </section>
  );
}