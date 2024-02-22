import CreditFlow from "@/components/organisms/CreditFlow";

export default function CarSingle({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-auto max-w-7xl px-3 gap-4">
      <div className="inline-flex space-x-6 my-6">
        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-cyan-500 ring-1 ring-inset ring-indigo-500/20">
          Simular crédito
        </span>
      </div>
      <CreditFlow slug={params.slug} />
    </div>
  );
}


