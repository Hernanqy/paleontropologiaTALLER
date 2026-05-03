import { useState } from "react";

export default function Bloque10Sapiens({ onBack, onNext }) {
  const [respuesta, setRespuesta] = useState(null);

  const opciones = [
    { texto: "Ser físicamente más fuertes", correcta: false },
    { texto: "Crear cultura y simbolismo", correcta: true },
    { texto: "Vivir aislados", correcta: false },
    { texto: "No usar herramientas", correcta: false },
  ];

  return (
    <section className="pantalla-bloque">
      <img
        src="/imagenes/homo-sapiens.jpg"
        alt="Homo sapiens y cultura"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />

      <div className="layout-bloque">
        {/* TEXTO */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-amber-600">
            Bloque 11
          </p>

          <h2 className="titulo-bloque">
            El mundo
            <br />
            simbólico
          </h2>

          <div className="my-6 flex items-center gap-4 text-amber-700 md:my-8 md:gap-5">
            <span className="h-px w-16 bg-amber-700/70 md:w-24" />
            <span className="text-2xl md:text-3xl">◇</span>
            <span className="h-px w-16 bg-amber-700/70 md:w-24" />
          </div>

          <p className="texto-bloque">
            Con Homo sapiens aparece una nueva dimensión en la evolución.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-amber-100 md:mt-6 md:text-xl">
            El pensamiento simbólico permitió crear arte, lenguaje complejo
            y formas de organización social más amplias.
          </p>

          <div className="mt-6 grid max-w-4xl gap-3 md:grid-cols-3 md:gap-4">
            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-4 backdrop-blur-md">
              <p className="font-serif text-xs uppercase tracking-[0.25em] text-amber-600 md:text-sm">
                Arte
              </p>
              <p className="mt-1 text-sm text-stone-200 md:text-base">
                Pinturas, símbolos y expresión.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-4 backdrop-blur-md">
              <p className="font-serif text-xs uppercase tracking-[0.25em] text-amber-600 md:text-sm">
                Lenguaje
              </p>
              <p className="mt-1 text-sm text-stone-200 md:text-base">
                Comunicación compleja.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-4 backdrop-blur-md">
              <p className="font-serif text-xs uppercase tracking-[0.25em] text-amber-600 md:text-sm">
                Sociedad
              </p>
              <p className="mt-1 text-sm text-stone-200 md:text-base">
                Organización cultural.
              </p>
            </div>
          </div>
        </div>

        {/* PANEL */}
        <aside className="panel-juego">
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.35em] text-amber-600">
            Juego colectivo
          </p>

          <h3 className="font-serif text-xl font-black uppercase tracking-[0.08em] text-stone-100 md:text-2xl">
            ¿Qué nos caracteriza como especie?
          </h3>

          <div className="mt-4 grid gap-3 md:mt-5">
            {opciones.map((opcion, index) => {
              const seleccionada = respuesta === index;
              const mostrarCorrecta = respuesta !== null && opcion.correcta;

              return (
                <button
                  key={index}
                  onClick={() => setRespuesta(index)}
                  className={`rounded-2xl border px-4 py-3 text-left font-serif text-sm uppercase tracking-[0.12em] transition md:px-5 md:text-base ${
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
              <div className="mt-4 rounded-2xl border border-amber-900/50 bg-black/40 p-4 md:mt-5">
                <p className="text-amber-100">
                  La clave fue la cultura.
                </p>
                <p className="mt-2 text-sm text-stone-300">
                  Homo sapiens no solo se adapta: crea significados, comparte ideas
                  y construye realidades colectivas.
                </p>
              </div>

              <button onClick={onNext} className="group boton-paleo mt-4 md:mt-5">
                <span className="boton-overlay" />
                <span className="relative">Ir al cierre →</span>
              </button>
            </>
          )}

          <button onClick={onBack} className="group boton-paleo mt-4 md:mt-5">
            <span className="boton-overlay" />
            <span className="relative">← Volver</span>
          </button>
        </aside>
      </div>
    </section>
  );
}