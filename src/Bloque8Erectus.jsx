import { useState } from "react";

export default function Bloque8Erectus({ onBack, onNext }) {
  const [respuesta, setRespuesta] = useState(null);

  const opciones = [
    { texto: "Fue el primero en usar celulares", correcta: false },
    { texto: "Dominó el fuego y viajó fuera de África", correcta: true },
    { texto: "Vivió solamente en los árboles", correcta: false },
    { texto: "No usaba herramientas", correcta: false },
  ];

  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-black text-white">
      <img
        src="/imagenes/homo-erectus.jpg"
        alt="Homo erectus y el fuego"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />

      <div className="relative z-10 grid min-h-screen grid-cols-1 gap-8 px-8 py-8 md:grid-cols-[1fr_430px]">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-amber-600">
            Bloque 8
          </p>

          <h2 className="font-serif text-5xl font-black uppercase leading-[0.95] tracking-[0.16em] text-stone-100 md:text-7xl">
            El fuego
            <br />
            lo cambió todo
          </h2>

          <div className="my-8 flex items-center gap-5 text-amber-700">
            <span className="h-px w-24 bg-amber-700/70" />
            <span className="text-3xl">◇</span>
            <span className="h-px w-24 bg-amber-700/70" />
          </div>

          <p className="max-w-3xl text-2xl leading-relaxed text-stone-200">
            Con <span className="font-bold italic">Homo erectus</span>, la historia humana dio
            un salto enorme: cuerpos más altos, caminatas largas, herramientas más elaboradas
            y la expansión fuera de África.
          </p>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-amber-100">
            El fuego permitió cocinar, protegerse, reunirse y habitar nuevos ambientes.
            No solo calentó el cuerpo: también reunió al grupo.
          </p>

          <div className="mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-5 backdrop-blur-md">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-amber-600">
                Viaje
              </p>
              <p className="mt-2 text-stone-200">
                Fue uno de los primeros homínidos en salir de África.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-5 backdrop-blur-md">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-amber-600">
                Fuego
              </p>
              <p className="mt-2 text-stone-200">
                Cocinar dio más energía y ayudó a sobrevivir.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/50 bg-stone-950/55 p-5 backdrop-blur-md">
              <p className="font-serif text-sm uppercase tracking-[0.25em] text-amber-600">
                Grupo
              </p>
              <p className="mt-2 text-stone-200">
                Alrededor del fuego se fortalecieron los vínculos.
              </p>
            </div>
          </div>
        </div>

        <aside className="flex max-h-[calc(100vh-4rem)] flex-col justify-center rounded-[2rem] border border-amber-900/50 bg-stone-950/65 p-6 shadow-2xl backdrop-blur-md">
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.35em] text-amber-600">
            Juego colectivo
          </p>

          <h3 className="font-serif text-2xl font-black uppercase tracking-[0.08em] text-stone-100">
            ¿Qué hizo especial a Homo erectus?
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
                  La clave fue el fuego y la expansión.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-300">
                  Homo erectus pudo cocinar, protegerse, viajar y adaptarse a distintos
                  ambientes. Fue una de las especies humanas más exitosas.
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