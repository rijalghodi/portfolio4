import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';
type Props = {
  name: string;
  shortDesc: string;
  demoLink?: string;
  sourceLink?: string;
  slug?: string;
};
export function ProjectCard(props: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-mono">{props.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        {props.shortDesc}
      </CardContent>
      <CardFooter className="flex gap-2 flex-wrap">
        {/* {props.slug && (
          <Button variant="outline" size="sm" radius="full" asChild>
            <Link href={`/projects/${props.slug}`} target="_blank">
              <div className="flex gap-2 items-center">
                <IconFile />
                Article
              </div>
            </Link>
          </Button>
        )} */}
        {props.demoLink && (
          <Button variant="outline" size="sm" radius="full" asChild>
            <Link href={props.demoLink} target="_blank">
              <IconExternalLink />
              Demo
            </Link>
          </Button>
        )}
        {props.sourceLink && (
          <Button variant="outline" size="sm" radius="full" asChild>
            <Link href={props.sourceLink} target="_blank">
              <IconBrandGithub /> Source
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
