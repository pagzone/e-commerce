import { LoginForm } from "@/components/layouts/Login"

const page = () => {

  return (
    <div className='h-[26rem] flex flex-col gap-y-6'>
      <div className="flex max-md:flex-col">
        <div className="lg:flex-1 max-md:h-36 flex items-center justify-center max-md:hidden">
          <div className="px-8 text-center lg:text-left max-md:hidden">
            <h1 className="text-5xl font-bold text-gray-800 ">Welcome to PagZone</h1>
            <p className="text-gray-500 mt-4">PagZone is your one-stop shop for the latest technology products, offering a wide range of computers, accessories, and more to keep you ahead in the tech game.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 p-12 max-md:p-6 flex flex-col justify-center items-center"> 
          <LoginForm/> 
        </div>
      </div>
    </div>
  )
}

export default page
