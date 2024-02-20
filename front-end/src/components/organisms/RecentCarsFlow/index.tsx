import CardCar from "@/components/molecules/CardCar";

const RecentCarsFlow = () => {
    return (
        <section className="flex flex-col py-10 gap-12">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl">
                Adicionados recentemente
              </h2>
              <p className="leading-8 text-gray-300">Confira as novidades do nosso estoque.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-4">
                <CardCar />
            </div>
        </section>
    )
}

export default RecentCarsFlow;