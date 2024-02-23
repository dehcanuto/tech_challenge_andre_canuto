"use client"
import { useEffect, useState } from "react";

import api from "@/services/api";
import CreditSimulator from "@/components/organisms/CreditSimulator";
import CardCar from "@/components/molecules/CardCar";
import { SkeletonCardCar } from "@/components/molecules/Skeletons";
import { CardCarPropType } from "@/components/molecules/CardCar/types";

const CreditFlow = ({ slug }: { slug: string }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [cars, setCars] = useState<CardCarPropType>();
    
    useEffect(() => {
        async function getCarsFlow() {
            const { data } = await api.get(`/cars/${slug}`);
            console.log('data', data)
            setCars(data);
            setLoading(false);
        }
        getCarsFlow();
    }, [slug]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading ? <SkeletonCardCar /> : cars && <CardCar {...cars} disabled />}
        <CreditSimulator uuid={slug} />
      </div>
    )
}

export default CreditFlow;
