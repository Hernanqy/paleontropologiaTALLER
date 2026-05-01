import { useState } from "react";

export default function Bloque3Primates({ onBack, onNext }) {
  const [respuesta, setRespuesta] = useState(null);

  const opciones = [
    { texto: "Desarrollar alas", correcta: false },
    { texto: "Vivir bajo tierra", correcta: false },
    { texto: "Agarrarse y moverse entre ramas", correcta: true },
    { texto: "Ser los más grandes", correcta: false },
  ];

  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-black text-white">
      
      {/* IMAGEN */}
      <img
        src="/imagenes/primates-arboles.jpg"
        alt="Primeros primates"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* CAPAS */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />

      <div className="relative z-10 grid min-h-screen grid-cols-1 gap-8 px-8 py-10 md:grid-cols-[1fr_430px]">
        
        {/* TEXTO */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-amber-600">
            Bloque 3
          </p>

          <h2 className="font-serif text-5xl font-black uppercase leading-[0.95] tracking-[0.16em] text-stone-100 md:text-7xl">
            La vida
            <br />
            en los árboles
          </h2>

          <div className="my-8 flex items-center gap-5 text-amber-700">
            <span className="h-px w-24 bg-amber-700/70" />
            <span className="text-3xl">◇</span>
            <span className="h-px w-24 bg-amber-700/70" />
          </div>

          <p className="max-w-3xl text-2xl text-stone-200">
            Vivir en los árboles obligó a desarrollar nuevas habilidades.
          </p>
        </div>

        {/* JUEGO */}
        <aside className="flex flex-col justify-center rounded-[2rem] border border-amber-900/50 bg-stone-950/65 p-7 shadow-2xl backdrop-blur-md">
          
          <h3 className="font-serif text-3xl font-black text-white">
            ¿Qué habilidad fue clave?
          </h3>

          <div className="mt-6 grid gap-3">
            {opciones.map((opcion, index) => {
              const seleccionada = respuesta === index;
              const mostrarCorrecta = respuesta !== null && opcion.correcta;

              return (
                <button
                  key={index}
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
              <div className="mt-6 bg-black/40 p-5 rounded-2xl">
                <p className="text-amber-100 text-lg">
                  La clave fue agarrarse y moverse con precisión.
                </p>
              </div>

              {/* SIGUIENTE */}
              <button onClick={onNext} className="group boton-paleo mt-6">
                <span className="boton-overlay" />
                <span className="relative">Siguiente etapa →</span>
              </button>
            </>
          )}

          {/* VOLVER */}
          <button onClick={onBack} className="group boton-paleo mt-6">
            <span className="boton-overlay" />
            <span className="relative">← Volver</span>
          </button>
        </aside>
      </div>
    </section>
  );
}