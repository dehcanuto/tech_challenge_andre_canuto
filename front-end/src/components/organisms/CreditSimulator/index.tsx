"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import api from "@/services/api";
import Card from "@/components/atoms/Card";
import FieldForm from "@/components/atoms/FieldForm";

const CreditSimulator = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
        const response = await api.post('/credit', data);
        return response.data
    }

    return (
        <Card>
          <div className="p-5 -mt-14 mb-6 bg-primary font-semibold space-y-2 rounded-3xl shadow-xl">
            <h2 className="text-3xl text-white font-bold tracking-tight">Gostou? 😍</h2>
            <p className="text-sm font-medium text-gray-100">
              Faça uma simulação de crédito, sem compromisso, agora mesmo.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col my-4 gap-4">
            <FieldForm register={register} name="name" label="Nome" placeholder="Fulano de Tal" required />
            <FieldForm register={register} name="phone" label="Celular" placeholder="(xx) xxxxx-xxxx" required />
            <FieldForm register={register} name="email" type="email" label="Email" placeholder="nome@email.com" required />
            <FieldForm register={register} name="cpf" label="CPF" placeholder="xxx.xxx.xxx-xx" />
            <p className="text-xs text-gray-300">
                Solicitamos seu CPF para adiantar nossa pré-análise para que você tenha as melhores opções.
            </p>
            <button type="submit" className="w-full py-3 px-8 bg-primary text-white text-sm font-semibold text-center uppercase tracking-wide outline-none rounded-lg">
                Simular crédito
            </button>
          </form>
        </Card>
    )
}

export default CreditSimulator;