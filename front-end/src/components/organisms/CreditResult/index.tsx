import Card from "@/components/atoms/Card";
import { CreditResultPropType } from "./type";
import { moneyFormatter } from "@/utils";

const CreditResult = ({ aproved, entry_value, installments_time, installments_value }: CreditResultPropType) => {
    return (
        <Card>
            {aproved ? (
                <div>
                    <div className="p-5 -mt-14 mb-6 bg-success font-semibold space-y-2 rounded-3xl shadow-xl">
                        <h2 className="text-3xl text-white font-bold tracking-tight">Parabéns! 🎉</h2>
                        <p className="text-sm font-medium text-gray-100">
                            Temos uma oferta de crédito incrível disponível para você!
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-300 font-medium">Encontramos uma oferta perfeita para o seu bolso sem comprometer sua renda.</p>
                        <div className="flex flex-col p-4 bg-gray-700 rounded-3xl gap-2">
                            <div>
                                <h3 className="text-sm uppercase tracking-wildest">Entrada de:</h3>
                                <p className="text-3xl text-success">{moneyFormatter(entry_value)}</p>
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-wildest">Mais parcelas em:</h3>
                                <p className="text-lg">{installments_time}x de {moneyFormatter(installments_value)}</p>
                                <p className="text-xs text-medium text-gray-400">Para mais parcelas consulte um de nossos especialistas.</p>
                            </div>
                        </div>
                        <button type="submit" className="w-full py-3 px-8 bg-green-500 text-white text-sm font-semibold text-center uppercase tracking-wide outline-none rounded-lg">
                            Aceitar oferta 
                        </button>
                    </div>
                </div>
            ): (
                <div>
                    <div className="p-5 -mt-14 mb-6 bg-error font-semibold space-y-2 rounded-3xl shadow-xl">
                        <h2 className="text-3xl text-white font-bold tracking-tight">Desculpe</h2>
                        <p className="text-sm font-medium text-gray-100">
                            Ainda não temos crédito disponível para o seu momento.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-300 font-medium">
                            Calma, isso não é um adeus. Você poderá tentar novamente após 3 meses.<br/>
                            Estaremos aqui para ajudar a realizar o seu sonho.</p>                        
                    </div>
                </div>
            )}
        </Card>
    )
}

export default CreditResult;
