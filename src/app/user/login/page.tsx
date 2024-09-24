import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"
import { LoginForm } from "@/components/layouts/Login"

const page = () => {

  return (
    <div className='h-screen flex flex-col gap-y-6  md:mx-[75px]'>
      <Header/>
      <div className=" flex max-md:flex-col">
        <div className="lg:flex-1  bg-slate-500 max-md:h-36">
        </div>
        <div className="lg:w-1/2 p-12 max-md:p-6 flex  bg-black"> 
          <LoginForm/> 
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page
