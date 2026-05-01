import { useState } from "react";

export default function Bloque10Sapiens({ onBack, onNext }) {
  const [respuesta, setRespuesta] = useState(null);

  const opciones = [
    { texto: "Tener cuernos más grandes", correcta: false },
    { texto: "Vivir siempre en cuevas", correcta: false },
    { texto: "Lenguaje, cultura y cooperación", correcta: true },
    { texto: "Ser más rápidos que todos", correcta: false },
  ];

  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-black text-white">
      <img
        src="/imagenes/homo-sapiens.jpg"
        alt="Homo sapiens, lenguaje, arte y cooperación"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />

      <div className="relative z-10 grid min-h-screen grid-cols-1 gap-8 px-8 py-8 md:grid-cols-[1fr_430px]">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-amber-600">
            Bloque 10
          </p>

          <h2 className="font-serif text-5xl font-black uppercase leading-[0.95] tracking-[0.16em] text-stone-100 md:text-7xl">
            El nacimiento
            <br />
            de lo humano
          </h2>

          <div className="my-8 flex items-center gap-5 text-amber-700">
            <span className="h-px w-24 bg-amber-700/70" />
            <span className="text-3xl">◇</span>
            <span className="h-px w-24 bg-amber-700/70" />
          </div>

          <p className="max-w-3xl text-2xl leading-relaxed text-stone-200">
            Con <span className="font-bold italic">Homo sapiens</span>, la historia cambió para siempre.
            Desarrollamos lenguaje complejo, pensamiento simbólico, arte y redes de cooperación.
          </p>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-amber-100">
            No fuimos los más fuertes, pero sí los que mejor aprendimos a comunicarnos,
            imaginar juntos y colaborar.
          </p>

          <div className="mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-5 backdrop-blur-md">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-amber-600">
                Lenguaje
              </p>
              <p className="mt-2 text-stone-200">
                Compartimos ideas, historias, acuerdos y conocimientos.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-5 backdrop-blur-md">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-amber-600">
                Símbolos
              </p>
              <p className="mt-2 text-stone-200">
                Arte rupestre, adornos, rituales y formas de identidad.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-5 backdrop-blur-md">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-amber-600">
                Cooperación
              </p>
              <p className="mt-2 text-stone-200">
                Trabajamos en grupo, enseñamos y cuidamos a otros.
              </p>
            </div>
          </div>
        </div>

        <aside className="flex max-h-[calc(100vh-4rem)] flex-col justify-center rounded-[2rem] border border-amber-900/50 bg-stone-950/65 p-6 shadow-2xl backdrop-blur-md">
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.35em] text-amber-600">
            Juego colectivo
          </p>

          <h3 className="font-serif text-2xl font-black uppercase tracking-[0.08em] text-stone-100">
            ¿Qué hizo posible el gran salto de Homo sapiens?
          </h3>

          <div className="mt-5 grid gap-3">
            {opciones.map((opcion, index) => {
              const seleccionada = respuesta === index;
              const mostrarCorrecta = respuesta !== null && opcion.correcta;

              return (
                <button
                  key={index}
                  onClick={() => setRespuesta(index)}
                  className={`rounded-2xl border px-5 py-3 text-left font-serif text-base uppercase tracking-[0.12em] transition ${
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
              <div className="mt-5 rounded-2xl border border-amber-900/50 bg-black/40 p-4">
                <p className="text-lg text-amber-100">
                  La clave fue imaginar y cooperar.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-300">
                  El lenguaje y la cultura nos permitieron compartir relatos, aprender,
                  transmitir conocimiento y colaborar con personas que no conocíamos.
                </p>
              </div>

              <button onClick={onNext} className="group boton-paleo mt-5">
                <span className="boton-overlay" />
                <span className="relative">Siguiente etapa →</span>
              </button>
            </>
          )}

          <button onClick={onBack} className="group boton-paleo mt-5">
            <span className="boton-overlay" />
            <span className="relative">← Volver</span>
          </button>
        </aside>
      </div>
    </section>
  );
}