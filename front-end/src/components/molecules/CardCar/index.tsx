import Image from "next/image";

import ButtonLink from "@/components/atoms/ButtonLink";
import { CardCarPropType } from "./types";

const CardCar = ({ id, title, model, thumbnail, brand, km_age, model_year, price }: CardCarPropType) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <div className="max-w-xs bg-gray-800 font-semibold rounded-3xl shadow-xl">
            <div className="h-52 bg-gray-600 overflow-hidden rounded-t-3xl">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                    width={920}
                    height={442}
                    priority
                />
            </div>
            <div className="flex flex-col text-white p-5 gap-4">
                <div className="flex flex-col gap-2">
                    <div className="tracking-tight">
                        <h5 className="uppercase text-xs text-gray-200 tracking-widest mb-2">
                            {brand}
                        </h5>
                        <h3 className="font-semibold text-2xl">
                            {title}
                        </h3>
                        <h4 className="text-sm font-light text-gray-300 tracking-wide">
                            {model}
                        </h4>
                    </div>
                    <div className="flex flex-row items-center text-xs text-gray-100 font-semibold gap-1">
                        <span className="px-2.5 py-0.5 border rounded">
                            {km_age} km
                        </span>
                        <span className="px-2.5 py-0.5 border rounded">
                            {model_year}
                        </span>
                    </div>
                </div>
                <span className="text-3xl font-bold text-white">
                    {formatter.format(Number(price))}
                </span>
                <ButtonLink url={`/car/${id}`}>
                    Simular crédito
                </ButtonLink>
			</div>
        </div>
    )
}

export default CardCar;