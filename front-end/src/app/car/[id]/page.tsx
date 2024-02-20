export default function CarSingle() {
  return (
    <div className="mx-auto max-w-7xl px-6 gap-4">
      <div className="inline-flex space-x-6 my-6">
        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-cyan-500 ring-1 ring-inset ring-indigo-500/20">
          Simular crédito
        </span>
        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
          <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>  
          <span>Onix Plus</span>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 p-5 bg-gray-800 font-semibold rounded-3xl shadow-xl">
          <p>Teste</p>
        </div>
        <div className="p-5 bg-primary font-semibold rounded-3xl shadow-xl">
          <form>
            <div className="mb-5">
              <label htmlFor="email" className="mb-3 block text-white text-base font-medium">
                Email
              </label>
              <input type="email" name="email" id="email" placeholder="example@domain.com" className="w-full py-3 px-6 bg-white text-base font-medium outline-none focus:border-white shadow rounded-md" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


