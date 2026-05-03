export default function PresentacionEspecie({ titulo, subtitulo, imagen, onNext }) {
  return (
    <section
      onClick={onNext}
      className="fixed inset-0 cursor-pointer bg-white overflow-hidden"
    >
      {/* IMAGEN CON ZOOM */}
      <img
        src={imagen}
        alt={titulo}
        className="zoom-lento absolute inset-0 h-full w-full object-contain"
      />

      {/* TEXTO */}
      <div className="absolute bottom-10 left-0 right-0 text-center text-black">
        <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-[0.2em]">
          {titulo}
        </h2>
        <p className="mt-3 text-sm md:text-lg tracking-[0.3em] text-gray-700 uppercase">
          {subtitulo}
        </p>

        <p className="mt-6 text-xs tracking-[0.4em] text-gray-500 uppercase">
          Click para continuar
        </p>
      </div>
    </section>
  );
}