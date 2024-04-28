import { Products } from "@/pages";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { type ProductsResponse } from "@/utilis";
import { useLoaderData } from "react-router-dom";
const HeroCarousel = () => {
  const { products } = useLoaderData() as ProductsResponse;
  const images = products.map((item) => item.image).slice(0, 4);

  console.log(images);
  return (
    <Carousel className="mx-6 sm:m-0">
      <CarouselContent>
        {images.map((item, idx) => {
          return (
            <CarouselItem key={idx}>
              <Card>
                <CardContent className="p-0">
                  <img
                    src={item}
                    alt=""
                    className="rounded-sm h-[24rem] w-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCarousel;
