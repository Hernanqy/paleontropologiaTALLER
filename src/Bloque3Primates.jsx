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
    <section className="pantalla-bloque">
      <img
        src="/imagenes/primates-arboles.jpg"
        alt="Primeros primates"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />

      <div className="layout-bloque">
        {/* TEXTO */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-amber-600">
            Bloque 3
          </p>

          <h2 className="titulo-bloque">
            La vida
            <br />
            en los árboles
          </h2>

          <div className="my-6 flex items-center gap-4 text-amber-700 md:my-8 md:gap-5">
            <span className="h-px w-16 bg-amber-700/70 md:w-24" />
            <span className="text-2xl md:text-3xl">◇</span>
            <span className="h-px w-16 bg-amber-700/70 md:w-24" />
          </div>

          <p className="texto-bloque">
            Vivir en los árboles obligó a desarrollar nuevas habilidades.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-amber-100 md:mt-6 md:text-xl">
            La coordinación, la visión y la capacidad de agarrarse fueron claves
            para moverse con seguridad entre las ramas.
          </p>
        </div>

        {/* PANEL JUEGO */}
        <aside className="panel-juego">
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.35em] text-amber-600">
            Juego colectivo
          </p>

          <h3 className="font-serif text-xl font-black uppercase tracking-[0.08em] text-stone-100 md:text-2xl">
            ¿Qué habilidad fue clave?
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
                  La clave fue agarrarse y moverse con precisión.
                </p>
                <p className="mt-2 text-sm text-stone-300">
                  Esta habilidad permitió explorar nuevos espacios, evitar
                  depredadores y acceder a alimentos en altura.
                </p>
              </div>

              <button onClick={onNext} className="group boton-paleo mt-4 md:mt-5">
                <span className="boton-overlay" />
                <span className="relative">Siguiente etapa →</span>
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