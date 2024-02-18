import ButtonLink from "@/components/atoms/Button";
import Image from "next/image";

export default function Home() {
  return (
      <div className="relative isolate overflow-hidden">
        <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
        </svg>
        <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center py-16 gap-4">
            <div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Todo mundo tem crédito na onCar</h1>
              <p className="mt-4 text-lg leading-8 text-gray-300">Negativado ou não, aqui você pode comprar.</p>
              <div className="mt-10 flex items-center gap-x-6">
                <ButtonLink url="#">
                  Encontre um veículo
                </ButtonLink>
                <a href="#" className="leading-6 text-white">Saiba mais</a>
              </div>
            </div>
            <div>
              <Image
                src="/images/oncar-home-banner-car.png"
                alt="OnCar Logo"
                className="w-auto"
                width={920}
                height={442}
                priority
              />
            </div>
          </div>
        </div>
      </div>
  );
}
