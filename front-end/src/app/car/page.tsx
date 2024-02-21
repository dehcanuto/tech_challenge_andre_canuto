import CarsFlowContent from "@/components/organisms/CarsFlowContent";

export default function CarsForSale() {
  return (
    <div className="mx-auto max-w-7xl px-3 gap-4">
      <div className="inline-flex space-x-6 my-6">
        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-cyan-500 ring-1 ring-inset ring-indigo-500/20">
          Comprar Carro
        </span>
        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
          <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>  
          <span>Todos os modelos</span>
        </span>
      </div>
      <CarsFlowContent
        title="Todos os veículos disponíveis"
        description="Encontre aqui o seu próximo carro."
        request="/cars"
      />
    </div>
  );
}
