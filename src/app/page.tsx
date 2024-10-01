import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCard, { ProductProps } from "@/components/ProductCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const products: ProductProps[] = [
  {
    productImg: "/product.png",
    productName: "Wireless Headphones",
    productPrice: 99.99,
    productRating: 4.5,
    productCategory: "Electronics",
  },
  {
    productImg: "/product.png",
    productName: "asus vivobook 14 x1400ep-",
    productPrice: 199.99,
    productRating: 4.0,
    productCategory: "Electronics",
  },
  {
    productImg: "/product.png",
    productName: "Gaming Mouse",
    productPrice: 49.99,
    productRating: 3.5,
    productCategory: "Electronics",
  },
  {
    productImg: "/product.png",
    productName: "Bluetooth Speaker",
    productPrice: 79.99,
    productRating: 5.0,
    productCategory: "Electronics",
  },
  {
    productImg: "/product.png",
    productName: "4K Monitor",
    productPrice: 399.99,
    productRating: 4.5,
    productCategory: "Electronics",
  },
  {
    productImg: "/product.png",
    productName: "asus vivobook 14 x1400ep-",
    productPrice: 199.99,
    productRating: 4.0,
    productCategory: "Electronics",
  },
  {
    productImg: "/product.png",
    productName: "Gaming Mouse",
    productPrice: 49.99,
    productRating: 3.5,
    productCategory: "Electronics",
  },
  {
    productImg: "/product.png",
    productName: "Bluetooth Speaker",
    productPrice: 79.99,
    productRating: 5.0,
    productCategory: "Electronics",
  },
  {
    productImg: "/product.png",
    productName: "4K Monitor",
    productPrice: 399.99,
    productRating: 4.5,
    productCategory: "Electronics",
  },
  {
    productImg: "/product.png",
    productName: "asus vivobook 14 x1400ep-",
    productPrice: 199.99,
    productRating: 4.0,
    productCategory: "Electronics",
  },
];

export default function Home() {
  return (
    <div className="h-auto mx-2 md:mx-14 lg:mx-24 xl:mx-44">
      <div className="h-96">
        <FeaturedProducts />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-end mb-6">
          <h1 className="text-3xl font-bold">Products</h1>
          <Link
            href="#"
            className="text-primary hover:underline flex items-center"
          >
            See all
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {products.map((value, index) => (
            <ProductCard
              key={index}
              productImg={value.productImg}
              productName={value.productName}
              productPrice={value.productPrice}
              productRating={value.productRating}
              productCategory={value.productCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
