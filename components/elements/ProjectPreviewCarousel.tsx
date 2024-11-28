'use client';

import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

type Props = {
  previews: { imageUrl: string; imageAlt?: string }[];
};

export function ProjectPreviewCarousel({ previews }: Props) {
  return (
    <Carousel
      className="w-full max-w-2xl shadow-lg rounded-lg"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent className="rounded-lg">
        {previews.map((preview, index) => (
          <CarouselItem key={index} className="rounded-lg">
            <Card>
              <CardContent className="flex aspect-video items-center justify-center p-0 relative rounded-md">
                <Image
                  src={preview.imageUrl}
                  alt={preview.imageAlt ?? 'Preview' + index + 1}
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
