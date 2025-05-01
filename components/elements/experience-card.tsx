import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { cn, dateToMMYYYY } from "@/lib/utils";
import { PortableTextBlock } from "next-sanity";
import Image from "next/image";
import AccessibleDiv from "../ui/accessible-div";
import { PortableTextRenderer } from "../ui/portable-text-renderer/PortableTextRenderer";

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
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
};

export function ExperienceCard(props: ExperienceCardProps) {
  return (
    <Card className={cn("w-full", props.className)} data-aos="fade-up">
      <CardHeader>
        <CardTitle className="flex flex-col gap-3">
          {props.iconUrl && (
            <Image
              src={props.iconUrl}
              alt="Company logo"
              width={50}
              height={50}
              className="rounded-full h-10 w-10 overflow-clip object-fill"
            />
          )}
          <AccessibleDiv tag={props.titleTag} className="text-xl font-semibold">
            {props.position}
          </AccessibleDiv>
        </CardTitle>
        <CardDescription className="flex justify-between items-center flex-wrap gap-3">
          <p className="flex items-center space-x-1 flex-wrap">
            <span>{props.company}</span>
            <span className="before:content-['•'] before:mx-2">{props.category}</span>
          </p>
          {props.startDate && (props.stillWorking || props.endDate) && (
            <p>
              {dateToMMYYYY(props.startDate)} - {props.stillWorking ? "Now" : dateToMMYYYY(props.endDate ?? "")}
            </p>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {props.shortDesc && <p>{props.shortDesc}</p>}
        {props.description && <PortableTextRenderer value={props.description} />}
      </CardContent>
    </Card>
  );
}
