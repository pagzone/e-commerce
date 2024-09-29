"use client"

import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"


const featuredProduct = [
  { 
    productImage : '/laptop.png',  
    title : 'Student Education Laptop 14',
    description : '6GB RAM 1.1 GHz Windows 10 128GB SSD Notebook',
  },
  {
    productImage : '/iphone.jpg',  
    title : 'Student Education iPhone 15',
    description : '6GB RAM 1.1 GHz Windows 10 128GB SSD Notebook',
  }   
];

 const FeaturedProducts = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000,  })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="size-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent> 
        {featuredProduct.map((value,index) => (
          <CarouselItem key={index} className="h-96">
            <Card className={`relative h-full flex justify-end items-center md:bg-right bg-fit bg-no-repeat rounded-md`}
              style={{ backgroundImage: `url(${value.productImage})` }} 
            >
              <CardContent className="absolute left-0 flex flex-col gap-y-4 p-4">
                <h1 className="text-3xl font-extrabold text-gray-900 max-md:text-2xl">
                    {value.title}
                </h1>
                <p className="text-slate-500 text-sm leading-relaxed max-md:text-xs">
                   {value.description}
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-lg w-32 font-semibold text-white
                max-md:py-2
                "> Shop now
                </button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>   
    </Carousel>
  )
}

export default FeaturedProducts;
