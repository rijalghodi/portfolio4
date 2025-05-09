import { contactGithubLink, contactIgLink, contactLinkedIn } from "@/data/contact";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Button variant="ghost" size="icon-lg" asChild radius="full">
        <Link href={contactGithubLink} aria-label="Github" target="_blank" className="">
          <Github />
        </Link>
      </Button>
      <Button variant="ghost" size="icon-lg" asChild radius="full">
        <Link href={contactLinkedIn} aria-label="LinkedIn" target="_blank" className="">
          <Linkedin />
        </Link>
      </Button>
      <Button variant="ghost" size="icon-lg" asChild radius="full">
        <Link href={contactIgLink} aria-label="Instagram" target="_blank" className="">
          <Instagram />
        </Link>
      </Button>
    </div>
  );
}
