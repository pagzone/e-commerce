import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Header from "@/components/Header";

const products = [
  {
    productImg: "/product.png",
    productName: "Wireless Headphones",
    productType : 'ek382ws indie black',
    productPrice: "$99.99",
  },
  {
    productImg: "/product.png",
    productName: "asus vivobook 14 x1400ep-",
    productType : 'ek382ws indie black',
    productPrice: "$199.99",
  },
  {
    productImg: "/product.png",
    productName: "Gaming Mouse",
    productType : 'ek382ws indie black',
    productPrice: "$49.99",
  },
  {
    productImg: "/product.png",
    productName: "Bluetooth Speaker",
    productType : 'ek382ws indie black',
    productPrice: "$79.99",
  },
  {
    productImg: "/product.png",
    productName: "4K Monitor",
    productType : 'ek382ws indie black',
    productPrice: "$399.99",
  },
  {
    productImg: "/product.png",
    productName: "asus vivobook 14 x1400ep-",
    productType : 'ek382ws indie black',
    productPrice: "$199.99",
  },
];



export default function Home() {
  return (
     <div className="h-screen flex flex-col gap-y-12 md:mx-[75px] px-6">
        <Header/>
        <div className="h-96">
          <FeaturedProducts />
        </div>

        <div className="h-96 px-2 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Products</h1>
             <Link href='/' className="hover:underline">See all</Link>
          </div>
           
            <div className="flex flex-wrap gap-y-6 gap-x-12  max-md:gap-x-2 py-2 max-sm::justify-center">
              {products.map((value, index) => (
                  <ProductCard
                    key={index}
                    productImg={value.productImg}
                    productName={value.productName}
                    productPrice={value.productPrice}
                    productType={value.productType}
                  />
              ))}
            </div>
        </div>

     </div>
  );
}
