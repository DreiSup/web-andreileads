type Props = { antes: string; enfasis: string };

/**
 * h1 con la expresión en cursiva subrayada en acento. No se anima (LCP); solo el subrayado se dibuja.
 * El tamaño se ajusta al ancho para que la cursiva (≈ 8,6 em) quepa en una línea sin desbordar.
 * Por debajo de 360 px (p. ej. zoom al 200 %) vuelve a 42 px y la cursiva puede partirse:
 * el subrayado pasa a text-decoration.
 */
export function Titular({ antes, enfasis }: Props) {
  return (
    <h1 className="mt-6 font-serif text-[length:min(42px,calc((100vw_-_48px)/8.6))] leading-[1.02] tracking-[-0.02em] text-balance max-[359px]:text-[42px] md:mt-10 md:text-[length:min(84px,calc((100vw_-_96px)/8.6))]">
      {antes}{" "}
      <em className="relative whitespace-nowrap decoration-acento decoration-2 underline-offset-[0.12em] max-[359px]:whitespace-normal max-[359px]:underline">
        {enfasis}
        <span
          aria-hidden
          className="absolute right-[0.02em] bottom-[0.02em] left-0 h-0.5 origin-left bg-acento motion-safe:animate-subraya max-[359px]:hidden md:h-[3px]"
        />
      </em>
      .
    </h1>
  );
}
