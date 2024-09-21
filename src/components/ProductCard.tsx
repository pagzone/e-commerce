"use client"

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { cn } from "@/lib/utils"

type ProductProps = {
  productImg: string;
  productName: string;
  productPrice: string;
  productType: string;
}

const ProductCard = ({ productImg, productName, productPrice, productType }: ProductProps) => {

  return (
    <Card
      className={cn(
        "w-[190px] h-[250px] rounded-md shadow-md overflow-hidden cursor-pointer",
        "transition-transform duration-300 hover:scale-105 hover:shadow-xl",
        "max-md:w-[150px] max-md:h-[220px]"
      )}
    >
      <CardHeader className="h-36 max-md:h-28 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
        <Image
          src={productImg}
          alt={productName}
          width={220}
          height={300}
          className="object-cover rounded-lg shadow-sm transition-all duration-300 hover:scale-110"
        />
      </CardHeader>

      <CardContent className="py-2 px-4 max-md:p-2 flex flex-col justify-evenly h-[100px] max-md:h-24 ">
        <div>
          <CardTitle className="text-base max-md:text-sm font-semibold text-gray-800 leading-tight truncate">
            {productName}
          </CardTitle>
          <p className="text-xs max-md:text-[0.70rem] text-gray-500">
            {productType}
          </p>
        </div>
        <CardDescription className="text-base max-md:text-sm font-bold text-emerald-500 ">
          {productPrice}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
