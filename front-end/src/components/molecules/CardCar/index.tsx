import ButtonLink from "@/components/atoms/ButtonLink";
import Image from "next/image";

const CardCar = () => {
    return (
        <div className="max-w-xs bg-gray-800 font-semibold rounded-3xl shadow-xl">
            <div className="h-52 bg-gray-600 overflow-hidden rounded-t-3xl">
                <Image
                    src="https://www.globoveiculos.com/lua4auto/lua4auto/application/libs/generate_thumb.php?img=/lua4auto/public/uploads/seminovos/veiculo_1209_65988e314b9d8.jpeg&w=360&h=230"
                    alt="OnCar Logo"
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
                            Chevrolet
                        </h5>
                        <h3 className="font-semibold text-2xl">
                            Onix Plus
                        </h3>
                        <h4 className="text-sm font-light text-gray-300 tracking-wide">
                            1.0 TURBO FLEX LT MANUAL
                        </h4>
                    </div>
                    <div className="flex flex-row items-center text-xs text-gray-100 font-semibold gap-1">
                        <span className="px-2.5 py-0.5 border rounded">
                            13.764 Km
                        </span>
                        <span className="px-2.5 py-0.5 border rounded">
                            2022/2023
                        </span>
                    </div>
                </div>
                <span className="text-3xl font-bold text-white">
                    R$ 81.590
                </span>
                <ButtonLink url="/car/1">
                    Simular crédito
                </ButtonLink>
			</div>
        </div>
    )
}

export default CardCar;