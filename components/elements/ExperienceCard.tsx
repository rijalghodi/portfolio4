import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Image from 'next/image';
type Props = {
  position: string;
  company: string;
  companyLink?: string;
  experienceCategory: string;
  startDate: string;
  endDate: string;
  logo?: string;
  shortDesc: string;
  tasks?: string[];
};

export function ExperienceCard(props: Props) {
  return (
    <Card className="w-full" data-aos="fade-up">
      <CardHeader>
        <CardTitle className="flex flex-col gap-3">
          {props.logo && (
            <Image
              src={props.logo}
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
          <div className="text-xl font-semibold">{props.position}</div>
        </CardTitle>
        <CardDescription>
          <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="flex items-center space-x-1 flex-wrap">
              <span>{props.company}</span>
              <span className="before:content-['•'] before:mx-2">
                {props.experienceCategory}
              </span>
            </div>
            <div>
              {props.startDate} - {props.endDate}
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{props.shortDesc}</p>
        <ul className="list-disc pl-6">
          {props.tasks?.map((task, i) => (
            <li className="py-1" key={i}>
              {task}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
