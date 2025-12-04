import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

import { contactGithubLink, contactIgLink, contactLinkedIn } from "@/data/contact";

import { Button } from "../ui/button";
export function SocialLinks() {
  return (
    <div className="flex gap-2">
      <Button variant="plain" size="icon-lg" asChild radius="full" className="hover:text-primary">
        <Link href={contactGithubLink} aria-label="Github" target="_blank" className="">
          <Github />
        </Link>
      </Button>
      <Button variant="plain" size="icon-lg" asChild radius="full" className="hover:text-primary">
        <Link href={contactLinkedIn} aria-label="LinkedIn" target="_blank" className="">
          <Linkedin />
        </Link>
      </Button>
      <Button variant="ghost" size="icon-lg" asChild radius="full" className="hover:text-primary">
        <Link href={contactIgLink} aria-label="Instagram" target="_blank" className="">
          <Instagram />
        </Link>
      </Button>
    </div>
  );
}
