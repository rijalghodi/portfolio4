import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Image from 'next/image';
import { PortableTextBlock } from 'next-sanity';
import { PortableTextRenderer } from '../ui/portable-text-renderer/PortableTextRenderer';
import AccessibleDiv from '../ui/accessible-div';
import { cn, dateToMMYYYY } from '@/lib/utils';

export type ExperienceView = {
  position: string;
  company: string;
  companyLink?: string;
  category?: string;
  startDate: string;
  endDate?: string;
  stillWorking?: boolean;
  iconUrl?: string;
  description?: string[] | Array<PortableTextBlock>;
  shortDesc?: string;
};

type ExperienceCardProps = ExperienceView & {
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
};

export function ExperienceCard(props: ExperienceCardProps) {
  return (
    <Card className={cn('w-full', props.className)} data-aos="fade-up">
      <CardHeader>
        <CardTitle className="flex flex-col gap-3">
          {props.iconUrl && (
            <Image
              src={props.iconUrl}
              alt="company logo"
              width={40}
              height={40}
              style={{
                borderRadius: '50%',
                overflow: 'hidden',
                objectFit: 'contain',
              }}
            />
          )}
          <AccessibleDiv tag={props.titleTag} className="text-xl font-semibold">
            {props.position}
          </AccessibleDiv>
        </CardTitle>
        <CardDescription className="flex justify-between items-center flex-wrap gap-3">
          <p className="flex items-center space-x-1 flex-wrap">
            <span>{props.company}</span>
            <span className="before:content-['•'] before:mx-2">
              {props.category}
            </span>
          </p>
          {props.startDate && (props.stillWorking || props.endDate) && (
            <p>
              {dateToMMYYYY(props.startDate)} -{' '}
              {props.stillWorking ? 'Now' : dateToMMYYYY(props.endDate ?? '')}
            </p>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {props.shortDesc && <p>{props.shortDesc}</p>}
        {props.description && (
          <PortableTextRenderer value={props.description} />
        )}
      </CardContent>
    </Card>
  );
}
