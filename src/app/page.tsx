
export default function Home() {
  return (
     <div className="relative h-96 md:mx-[75px] px-6 ">

          <div className="relative size-full flex justify-end items-center h-full bg-[url('/featured.png')] md:bg-right bg-fit bg-no-repeat ">
            <div className="absolute left-0 flex flex-col gap-y-4 p-4">
              <h1 className="text-3xl font-extrabold text-gray-900 max-md:text-2xl">
                Student Education Laptop 14
              </h1>
              <p className="text-slate-500 text-sm leading-relaxed max-md:text-xs">
                6GB RAM 1.1 GHz Windows 10 128GB SSD Notebook
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-lg w-32 font-semibold text-white
               max-md:py-2
              "> Shop now
              </button>
            </div>
          </div>


      </div>
  );
}
