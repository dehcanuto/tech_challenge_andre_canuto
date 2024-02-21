"use client";
import { useEffect, useState } from "react";

import api from "@/services/api";

import { CarsFlowContentPropType } from "./types";
import { SkeletonCardCar } from "@/components/molecules/Skeletons";
import CardCar from "@/components/molecules/CardCar";
import { CardCarPropType } from "@/components/molecules/CardCar/types";

const RecentCarsFlow = ({ title, description, request }: CarsFlowContentPropType) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cars, setCars] = useState([]);
    
  useEffect(() => {
    async function getCarsFlow() {
      const { data } = await api.get(request);
      setCars(data);
      setLoading(false);
    }
    getCarsFlow();
  }, [request]);

  return (
    <section className="flex flex-col py-6 gap-12">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <p className="leading-8 text-gray-300">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-4">
      {loading ? [1,2,3,4].map((key) => (<SkeletonCardCar key={key} />)) :
        cars.length > 0 ?
          cars.map((item: CardCarPropType, index) => (<CardCar key={index} {...item} />)) :
          <span>Sem Resultados</span>}
      </div>
    </section>
  )
}

export default RecentCarsFlow;