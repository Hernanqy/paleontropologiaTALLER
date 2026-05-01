import { useState } from "react";

export default function Bloque12CierreColectivo({ onBack, onRestart }) {
  const [respuesta, setRespuesta] = useState(null);
  const [mostrarFinal, setMostrarFinal] = useState(false);

  const opciones = [
    { texto: "La fuerza", correcta: false },
    { texto: "La inteligencia individual", correcta: false },
    { texto: "La cooperación", correcta: true },
    { texto: "La suerte", correcta: false },
  ];

  const elegirRespuesta = (index) => {
    setRespuesta(index);

    if (opciones[index].correcta) {
      setTimeout(() => {
        setMostrarFinal(true);
      }, 900);
    }
  };

  if (mostrarFinal) {
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

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="font-serif text-sm uppercase tracking-[0.35em] text-amber-100/80">
            Click para reiniciar
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-black text-white">
      <img
        src="/imagenes/cierre-colectivo.jpg"
        alt="Cierre colectivo de la experiencia humana"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.92)_100%)]" />

      <div className="relative z-10 grid min-h-screen grid-cols-1 gap-8 px-8 py-8 md:grid-cols-[1fr_430px]">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-amber-600">
            Cierre
          </p>

          <h2 className="font-serif text-5xl font-black uppercase leading-[0.95] tracking-[0.16em] text-stone-100 md:text-7xl">
            Ninguno llegó
            <br />
            solo
          </h2>

          <div className="my-8 flex items-center gap-5 text-amber-700">
            <span className="h-px w-24 bg-amber-700/70" />
            <span className="text-3xl">◇</span>
            <span className="h-px w-24 bg-amber-700/70" />
          </div>

          <p className="max-w-3xl text-2xl leading-relaxed text-stone-200">
            Durante millones de años, ningún ser humano sobrevivió solo.
          </p>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-amber-100">
            Compartimos comida, aprendimos unos de otros, cuidamos a los más vulnerables
            y construimos comunidades.
          </p>

          <p className="mt-6 max-w-3xl text-2xl font-semibold leading-relaxed text-stone-100">
            Nuestro mayor logro no fue solo el fuego, ni las herramientas, ni el lenguaje:
            fue aprender a vivir juntos.
          </p>
        </div>

        <aside className="flex max-h-[calc(100vh-4rem)] flex-col justify-center rounded-[2rem] border border-amber-900/50 bg-stone-950/70 p-6 shadow-2xl backdrop-blur-md">
          <p className="mb-3 font-serif text-sm uppercase tracking-[0.35em] text-amber-600">
            Pregunta final
          </p>

          <h3 className="font-serif text-2xl font-black uppercase tracking-[0.08em] text-stone-100">
            ¿Qué nos permitió llegar hasta acá como especie?
          </h3>

          <div className="mt-5 grid gap-3">
            {opciones.map((opcion, index) => {
              const seleccionada = respuesta === index;
              const mostrarCorrecta = respuesta !== null && opcion.correcta;

              return (
                <button
                  key={index}
                  onClick={() => elegirRespuesta(index)}
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

          {respuesta !== null && respuesta !== 2 && (
            <div className="mt-5 rounded-2xl border border-amber-900/50 bg-black/40 p-4">
              <p className="text-lg text-amber-100">
                Pensemos otra vez.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                La fuerza y la inteligencia importan, pero ninguna especie humana
                llegó sola hasta acá.
              </p>
            </div>
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