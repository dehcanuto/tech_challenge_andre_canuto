import Image from "next/image";

import Card from "@/components/atoms/Card";
import CreditSimulator from "@/components/organisms/CreditSimulator";

export default function CarSingle({ params }: { params: { slug: string } }) {

  return (
    <div className="mx-auto max-w-7xl px-6 gap-4">
      <div className="inline-flex space-x-6 my-6">
        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-cyan-500 ring-1 ring-inset ring-indigo-500/20">
          Simular crédito
        </span>
        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
          <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>  
          <span>Onix Plus ({params.slug})</span>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="h-52 bg-gray-600 overflow-hidden rounded-3xl">
            <Image
                src="https://www.globoveiculos.com/lua4auto/lua4auto/application/libs/generate_thumb.php?img=/lua4auto/public/uploads/seminovos/veiculo_1209_65988e314b9d8.jpeg&w=360&h=230"
                alt="OnCar Logo"
                className="w-full h-full object-cover"
                width={920}
                height={442}
                priority
            />
          </div>
          <div className="flex flex-col text-white pt-5 gap-4">
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
          </div>
        </Card>
        <CreditSimulator />
      </div>
    </div>
  );
}


