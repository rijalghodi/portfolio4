import {
  contactGithubLink,
  contactIgLink,
  contactLinkedIn,
} from '@/data/contact';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link
        href={contactGithubLink}
        aria-label="Github"
        target="_blank"
        className="hover:text-primary"
      >
        <IconBrandGithub />
      </Link>
      <Link
        href={contactLinkedIn}
        aria-label="LinkedIn"
        target="_blank"
        className="hover:text-primary"
      >
        <IconBrandLinkedin />
      </Link>
      <Link
        href={contactIgLink}
        aria-label="Instagram"
        target="_blank"
        className="hover:text-primary"
      >
        <IconBrandInstagram />
      </Link>
    </div>
  );
}
