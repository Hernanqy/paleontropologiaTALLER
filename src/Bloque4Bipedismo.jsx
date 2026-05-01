import { useState } from "react";

export default function Bloque4Bipedismo({ onBack, onNext }) {
  const [respuesta, setRespuesta] = useState(null);

  const opciones = [
    { texto: "Para liberar las manos", correcta: false },
    { texto: "Para ver por encima de la vegetación", correcta: false },
    { texto: "Para caminar de forma más eficiente", correcta: false },
    { texto: "Todas las anteriores", correcta: true },
  ];

  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-black text-white">
      <img
        src="/imagenes/bipedismo-africa.jpg"
        alt="Primeros homínidos caminando en África"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />

      <div className="relative z-10 grid min-h-screen grid-cols-1 gap-8 px-8 py-10 md:grid-cols-[1fr_430px]">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-amber-600">
            Bloque 4
          </p>

          <h2 className="font-serif text-5xl font-black uppercase leading-[0.95] tracking-[0.16em] text-stone-100 md:text-7xl">
            Bajamos
            <br />
            al suelo
          </h2>

          <div className="my-8 flex items-center gap-5 text-amber-700">
            <span className="h-px w-24 bg-amber-700/70" />
            <span className="text-3xl">◇</span>
            <span className="h-px w-24 bg-amber-700/70" />
          </div>

          <p className="max-w-3xl text-2xl leading-relaxed text-stone-200">
            En África, los cambios ambientales transformaron bosques cerrados en
            paisajes más abiertos. Algunos homínidos comenzaron a pasar más tiempo
            en el suelo.
          </p>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-amber-100">
            Caminar en dos piernas fue una revolución silenciosa: liberó las manos,
            cambió la mirada y abrió un nuevo modo de moverse por el mundo.
          </p>

          <div className="mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-5 backdrop-blur-md">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-amber-600">
                Manos libres
              </p>
              <p className="mt-2 text-stone-200">
                Permitió transportar alimentos, crías y objetos.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-5 backdrop-blur-md">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-amber-600">
                Nueva mirada
              </p>
              <p className="mt-2 text-stone-200">
                Ver más lejos ayudó a detectar recursos y peligros.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-5 backdrop-blur-md">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-amber-600">
                Costo
              </p>
              <p className="mt-2 text-stone-200">
                También trajo dolores de espalda, partos más difíciles y vulnerabilidad.
              </p>
            </div>
          </div>
        </div>

        <aside className="flex flex-col justify-center rounded-[2rem] border border-amber-900/50 bg-stone-950/65 p-7 shadow-2xl backdrop-blur-md">
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.35em] text-amber-600">
            Juego colectivo
          </p>

          <h3 className="font-serif text-3xl font-black uppercase tracking-[0.08em] text-stone-100">
            ¿Por qué fue importante caminar en dos piernas?
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
              <div className="mt-6 rounded-2xl border border-amber-900/50 bg-black/40 p-5">
                <p className="text-xl text-amber-100">
                  La respuesta más completa es: todas.
                </p>
                <p className="mt-3 text-stone-300">
                  El bipedismo no apareció por una sola razón. Fue una combinación
                  de ventajas y costos en un ambiente cambiante.
                </p>
              </div>

              <button onClick={onNext} className="group boton-paleo mt-6">
                <span className="boton-overlay" />
                <span className="relative">Siguiente etapa →</span>
              </button>
            </>
          )}

          <button onClick={onBack} className="group boton-paleo mt-6">
            <span className="boton-overlay" />
            <span className="relative">← Volver</span>
          </button>
        </aside>
      </div>

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