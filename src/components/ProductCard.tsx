"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

export type ProductProps = {
  productImg: string;
  productName: string;
  productPrice: number;
  productRating: number;
  productCategory: string;
};

const ProductCard = ({
  productImg,
  productName,
  productPrice,
  productRating,
  productCategory,
}: ProductProps) => {
  return (
    <Card
      className={cn(
        "container max-w-[11rem] md:max-w-[12rem] border border-border shadow-sm overflow-hidden cursor-pointer",
        "hover:scale-[1.01] hover:shadow-md transition-all duration-150 ease-in-out shadow-sm"
      )}
    >
      <CardHeader>
        <Image
          src={productImg}
          alt={productName}
          width={200}
          height={200}
          className={cn(
            "w-full max-h-24 h-24 p-2 object-cover rounded-t-lg shadow-sm",
            "bg-gradient-to-b from-gray-100 to-gray-200"
          )}
        />
      </CardHeader>

      <CardContent className="py-2 px-4 max-md:p-2 flex flex-col justify-evenly h-32 max-md:h-24 ">
        <Badge className="w-fit mb-2">{productCategory}</Badge>
        <CardTitle className="text-base font-medium max-md:text-sm leading-tight truncate">
          {productName}
        </CardTitle>
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-3 h-3 ${
                index < Math.floor(productRating)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">{productRating}</span>
        </div>
        <p className="text-lg font-semibold">${productPrice.toFixed(2)}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
