import { useState } from "react";

export default function Bloque1Extincion({ onNext }) {
  const [respuesta, setRespuesta] = useState(null);

  const opciones = [
    { texto: "Se hicieron más grandes", correcta: false },
    { texto: "Se adaptaron a nuevos nichos", correcta: true },
    { texto: "Aprendieron a volar", correcta: false },
    { texto: "Desarrollaron fuego", correcta: false },
  ];

  return (
    <section className="pantalla-bloque">
      <img
        src="/imagenes/extincion-mamiferos.jpg"
        alt="Extinción de dinosaurios"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />

      <div className="layout-bloque">
        {/* TEXTO */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-amber-600">
            Bloque 1
          </p>

          <h2 className="titulo-bloque">
            El fin de una era
          </h2>

          <div className="my-6 flex items-center gap-4 text-amber-700 md:my-8 md:gap-5">
            <span className="h-px w-16 bg-amber-700/70 md:w-24" />
            <span className="text-2xl md:text-3xl">◇</span>
            <span className="h-px w-16 bg-amber-700/70 md:w-24" />
          </div>

          <p className="texto-bloque">
            Hace aproximadamente 66 millones de años, un evento catastrófico
            provocó la extinción de los dinosaurios.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-amber-100 md:mt-6 md:text-xl">
            Este cambio abrió nuevas oportunidades en los ecosistemas,
            permitiendo que otros grupos, como los mamíferos,
            comenzaran a expandirse.
          </p>
        </div>

        {/* PANEL JUEGO */}
        <aside className="panel-juego">
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.35em] text-amber-600">
            Juego colectivo
          </p>

          <h3 className="font-serif text-xl font-black uppercase tracking-[0.08em] text-stone-100 md:text-2xl">
            ¿Qué permitió la extinción de los dinosaurios?
          </h3>

          <div className="mt-4 grid gap-3 md:mt-5">
            {opciones.map((opcion, index) => {
              const seleccionada = respuesta === index;
              const correcta = opcion.correcta;

              return (
                <button
                  key={index}
                  onClick={() => setRespuesta(index)}
                  className={`rounded-2xl border px-4 py-3 text-left font-serif text-sm uppercase tracking-[0.12em] transition md:px-5 md:text-base ${
                    respuesta !== null && correcta
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
                  La clave fue la adaptación.
                </p>
                <p className="mt-2 text-sm text-stone-300">
                  La desaparición de los dinosaurios liberó nichos ecológicos,
                  permitiendo que otros organismos se desarrollaran.
                </p>
              </div>

              <button
                onClick={onNext}
                className="group boton-paleo mt-4 md:mt-5"
              >
                <span className="boton-overlay" />
                <span className="relative">Siguiente etapa →</span>
              </button>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}