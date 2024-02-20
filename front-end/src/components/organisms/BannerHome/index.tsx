import Image from "next/image";
import ButtonLink from "@/components/atoms/ButtonLink";

const BannerHome = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 justify-center py-16 gap-4">
            <div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Todo mundo tem crédito na <span className="text-primary">onCar</span></h1>
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
                className="w-full"
                width={920}
                height={442}
                priority
              />
            </div>
        </section>
    )
}

export default BannerHome;