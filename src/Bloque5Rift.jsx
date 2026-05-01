import { useState } from "react";

export default function Bloque5Rift({ onBack, onNext }) {
  const [respuesta, setRespuesta] = useState(null);

  const opciones = [
    { texto: "Aparecieron más bosques", correcta: false },
    { texto: "África se volvió más fría", correcta: false },
    { texto: "Se expandieron las sabanas", correcta: true },
    { texto: "Se cubrió de hielo", correcta: false },
  ];

  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-black text-white">
      
      {/* IMAGEN */}
      <img
        src="/imagenes/valle-rift.jpg"
        alt="Valle del Rift en África"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* CAPAS */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />

      <div className="relative z-10 grid min-h-screen grid-cols-1 gap-8 px-8 py-10 md:grid-cols-[1fr_430px]">
        
        {/* TEXTO */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-amber-600">
            Bloque 5
          </p>

          <h2 className="font-serif text-5xl font-black uppercase leading-[0.95] tracking-[0.16em] text-stone-100 md:text-7xl">
            África
            <br />
            se transforma
          </h2>

          <div className="my-8 flex items-center gap-5 text-amber-700">
            <span className="h-px w-24 bg-amber-700/70" />
            <span className="text-3xl">◇</span>
            <span className="h-px w-24 bg-amber-700/70" />
          </div>

          <p className="max-w-3xl text-2xl leading-relaxed text-stone-200">
            Hace millones de años, África comenzó a partirse lentamente.
            Este proceso geológico formó lo que hoy conocemos como el Valle del Rift.
          </p>

          <p className="mt-6 max-w-3xl text-xl text-amber-100">
            Este cambio alteró los patrones de lluvia y transformó el paisaje:
            donde antes había selva, comenzaron a expandirse las sabanas.
          </p>

          <p className="mt-6 max-w-2xl text-xl italic text-stone-300">
            “El mundo cambió… y nosotros tuvimos que cambiar con él.”
          </p>

          {/* DATOS */}
          <div className="mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-5 backdrop-blur-md">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-amber-600">
                Rift
              </p>
              <p className="mt-2 text-stone-200">
                Una grieta tectónica que divide África en dos regiones.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-5 backdrop-blur-md">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-amber-600">
                Clima
              </p>
              <p className="mt-2 text-stone-200">
                Un lado más húmedo, otro más seco.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-5 backdrop-blur-md">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-amber-600">
                Impacto
              </p>
              <p className="mt-2 text-stone-200">
                Menos árboles, más espacios abiertos: nace la sabana.
              </p>
            </div>
          </div>
        </div>

        {/* JUEGO */}
        <aside className="flex flex-col justify-center rounded-[2rem] border border-amber-900/50 bg-stone-950/65 p-7 shadow-2xl backdrop-blur-md">
          
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.35em] text-amber-600">
            Juego colectivo
          </p>

          <h3 className="font-serif text-3xl font-black uppercase tracking-[0.08em] text-stone-100">
            ¿Qué cambió en el ambiente?
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

          {/* RESPUESTA */}
          {respuesta !== null && (
            <>
              <div className="mt-6 rounded-2xl border border-amber-900/50 bg-black/40 p-5">
                <p className="text-xl text-amber-100">
                  La respuesta correcta es: expansión de las sabanas.
                </p>
                <p className="mt-3 text-stone-300">
                  Este cambio obligó a nuestros antepasados a adaptarse a un entorno
                  más abierto, favoreciendo el bipedismo.
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

      {/* DECORACIÓN */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex h-14 items-center justify-center gap-9 border-t border-amber-900/25 bg-black/40 text-2xl text-amber-900/60 backdrop-blur-sm">
        <span>𐌗</span>
        <span>◎</span>
        <span>◇</span>
        <span>☉</span>
        <span>𐂂</span>
      </div>
    </section>
  );
}