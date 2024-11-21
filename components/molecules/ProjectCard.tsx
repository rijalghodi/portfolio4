import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import {
  IconBrandGithub,
  IconExternalLink,
  IconFile,
} from '@tabler/icons-react';
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
        <CardTitle className="tracking-wide">{props.name}</CardTitle>
      </CardHeader>
      <CardContent>{props.shortDesc}</CardContent>
      <CardFooter className="flex gap-2">
        {props.slug && (
          <Button variant="secondary" size="sm" radius="full" asChild>
            <Link href={`/projects/${props.slug}`}>
              <div className="flex gap-2 items-center">
                <IconFile />
                Article
              </div>
            </Link>
          </Button>
        )}

        <Button variant="secondary" size="sm" radius="full">
          <IconExternalLink />
          Demo
        </Button>
        <Button variant="secondary" size="sm" radius="full">
          <IconBrandGithub /> Code
        </Button>
      </CardFooter>
    </Card>
  );
}
