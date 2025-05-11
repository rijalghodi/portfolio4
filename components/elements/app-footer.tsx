"use client";

import { useTheme } from "@/contexts/theme-context";

import { useContactMe } from "@/components/elements/contact-form-context";
import { contactEmail } from "@/data/contact";
import LogoDark from "@/public/logo-dark.svg";
import LogoLight from "@/public/logo-light.svg";
import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { CopyButton } from "../ui/copy-button";
import { SocialLinks } from "./social-links";

export function Footer() {
  const { theme } = useTheme();
  const { open } = useContactMe();
  return (
    <footer className="pt-16 pb-12 px-4 rounded-t-xl">
      <div className="flex flex-col items-center space-y-5">
        {theme === "dark" ? <LogoDark width={40} height={40} /> : <LogoLight width={40} height={40} />}

        <div className="text-lg font-semibold">Let&apos;s Work Together</div>
        <div className="flex gap-4">
          <Button radius="full" onClick={open}>
            <Send />
            Contact Me
          </Button>
          <CopyButton
            value={contactEmail}
            labelDefault="Copy Email"
            labelCopied="Email Copied"
            variant="secondary"
            radius="full"
          />
        </div>
        <div className="flex gap-8 items-center">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
