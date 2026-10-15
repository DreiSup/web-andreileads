import Image from "next/image";

type Props = {
  /** Sin src: monograma «AL». Con src: foto en el mismo hueco, sin mover nada. */
  src?: string;
  alt: string;
};

export function Avatar({ src, alt }: Props) {
  return (
    <div className="relative size-14 shrink-0 overflow-hidden rounded-full motion-safe:animate-asoma md:size-[72px]">
      {src ? (
        <Image src={src} alt={alt} fill sizes="72px" className="object-cover" priority />
      ) : (
        <div
          aria-hidden
          className="flex size-full items-center justify-center bg-tinta font-serif text-2xl leading-none tracking-[0.01em] text-papel md:text-[30px]"
        >
          A<i>L</i>
        </div>
      )}
    </div>
  );
}
