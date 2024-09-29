import { Home, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="h-68 flex flex-col">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="space-y-3">
              <Image src="/pagzone-ecommerce-logo.png" alt="logo" width={60} height={60} />
              <h3 className="text-lg font-bold text-gray-800">Contact Info</h3>

              <div className="flex items-center space-x-2 text-gray-700">
                <Home size={20} />
                <p className="text-sm font-medium font-raleway">78 2nd House RD Montauk, NY, 11954</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone size={20} /> 
                <p className="text-sm font-medium font-raleway">Or call 1-800-123-45-67</p>
              </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-800">Company</h3>
                <ul className="space-y-1">
                    <li><Link href="/our-story" className="text-sm text-gray-600 hover:underline">Our Story</Link></li>
                    <li><Link href="/careers" className="text-sm text-gray-600 hover:underline">Career Opportunities</Link></li>
                    <li><Link href="/newsroom" className="text-sm text-gray-600 hover:underline">Newsroom</Link></li>
                    <li><Link href="/contact" className="text-sm text-gray-600 hover:underline">Contact Us</Link></li>
                </ul>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-800">Find It Fast</h3>
                <ul className="space-y-1">
                    <li><Link href="/computers" className="text-sm text-gray-600 hover:underline">Computer &amp; Tablet</Link></li>
                    <li><Link href="/cellphones" className="text-sm text-gray-600 hover:underline">Cellphones &amp; Accessories</Link></li>
                    <li><Link href="/audio-video" className="text-sm text-gray-600 hover:underline">Audio &amp; Video</Link></li>
                    <li><Link href="/cameras" className="text-sm text-gray-600 hover:underline">Cameras, Camcorders</Link></li>
                </ul>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-800">Make Money with Us</h3>
                <ul className="space-y-1">
                    <li><Link href="/sell" className="text-sm text-gray-600 hover:underline">Sell on PagZone</Link></li>
                    <li><Link href="/affiliate" className="text-sm text-gray-600 hover:underline">Become an Affiliate</Link></li>
                    <li><Link href="/advertise" className="text-sm text-gray-600 hover:underline">Advertise Your Products</Link></li>
                    <li><Link href="/vendor" className="text-sm text-gray-600 hover:underline">Become a Vendor</Link></li>
                </ul>
            </div>
          </div>
        </div>
        <div className="h-16 flex items-center justify-center w-full bg-slate-50 ">
         <p className="text-sm text-gray-700">
            &copy; 2024 Powered by <span className="font-semibold text-purple-600">PagZone</span>
         </p>
       </div>
    </div>
  )
}

export default Footer;