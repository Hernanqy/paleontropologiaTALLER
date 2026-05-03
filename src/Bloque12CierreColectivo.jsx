import { useState } from "react";

export default function Bloque12CierreColectivo({ onBack, onRestart }) {
  const [respuesta, setRespuesta] = useState(null);
  const [finalActivo, setFinalActivo] = useState(false);

  const opciones = [
    { texto: "La fuerza", correcta: false },
    { texto: "La inteligencia individual", correcta: false },
    { texto: "La cooperación", correcta: true },
    { texto: "La suerte", correcta: false },
  ];

  const seleccionar = (index) => {
    setRespuesta(index);

    if (opciones[index].correcta) {
      setTimeout(() => {
        setFinalActivo(true);
      }, 900);
    }
  };

  // 🔥 PANTALLA FINAL (imagen sola)
  if (finalActivo) {
    return (
      <section
        onClick={onRestart}
        className="fixed inset-0 cursor-pointer overflow-hidden bg-black"
      >
        <img
          src="/imagenes/cierre-colectivo.jpg"
          alt="Nadie evoluciona solo"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-amber-100/70 md:text-sm">
            Click para reiniciar
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="pantalla-bloque">
      <img
        src="/imagenes/cierre-colectivo.jpg"
        alt="Cierre colectivo"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.95)_100%)]" />

      <div className="layout-bloque">
        {/* TEXTO */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-amber-600">
            Cierre
          </p>

          <h2 className="titulo-bloque">
            Ninguno llegó
            <br />
            solo
          </h2>

          <div className="my-6 flex items-center gap-4 text-amber-700 md:my-8 md:gap-5">
            <span className="h-px w-16 bg-amber-700/70 md:w-24" />
            <span className="text-2xl md:text-3xl">◇</span>
            <span className="h-px w-16 bg-amber-700/70 md:w-24" />
          </div>

          <p className="texto-bloque">
            Durante millones de años, ningún ser humano sobrevivió solo.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-amber-100 md:mt-6 md:text-xl">
            Compartimos, aprendimos, cuidamos… y construimos comunidades.
          </p>

          <p className="mt-4 max-w-3xl text-lg font-semibold text-stone-100 md:text-2xl">
            Nuestro mayor logro fue vivir juntos.
          </p>
        </div>

        {/* PANEL */}
        <aside className="panel-juego">
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.35em] text-amber-600">
            Pregunta final
          </p>

          <h3 className="font-serif text-xl font-black uppercase tracking-[0.08em] text-stone-100 md:text-2xl">
            ¿Qué nos permitió llegar hasta acá?
          </h3>

          <div className="mt-4 grid gap-3 md:mt-5">
            {opciones.map((opcion, index) => {
              const seleccionada = respuesta === index;
              const mostrarCorrecta = respuesta !== null && opcion.correcta;

              return (
                <button
                  key={index}
                  onClick={() => seleccionar(index)}
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

          {respuesta !== null && respuesta !== 2 && (
            <div className="mt-4 rounded-2xl border border-amber-900/50 bg-black/40 p-4">
              <p className="text-amber-100">
                Pensemos otra vez.
              </p>
              <p className="mt-2 text-sm text-stone-300">
                Ninguna especie humana llegó sola hasta acá.
              </p>
            </div>
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