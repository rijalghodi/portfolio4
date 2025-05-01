"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Props = {
  previews: { imageUrl: string; imageAlt?: string }[];
};

export function ProjectPreviewCarousel({ previews }: Props) {
  return (
    <Carousel
      className="w-full shadow-lg rounded-lg"
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      <CarouselContent>
        {previews.map((preview, index) => (
          <CarouselItem key={index}>
            <Card className="rounded-xl overflow-hidden">
              <CardContent className="flex aspect-[5/4] sm:aspect-video items-center justify-center p-0 relative">
                <Image
                  src={preview.imageUrl}
                  alt={preview.imageAlt ?? `Preview${index}${1}`}
                  fill
                  className="object-cover object-top"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
