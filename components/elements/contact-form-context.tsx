"use client";

import { cn } from "@/lib/utils";
import { createContext, useContext, useState } from "react";
import { ContactForm } from "./contact-form";

type ContactFormContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export function ContactFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ContactFormContext.Provider value={{ isOpen, open, close }}>
      <div className={cn("transition-transform duration-300 overflow-hidden", isOpen ? "scale-[0.99]" : "scale-100")}>
        {children}
      </div>
      <ContactForm isOpen={isOpen} onOpenChange={setIsOpen} />
    </ContactFormContext.Provider>
  );
}

export const useContactMe = () => {
  const context = useContext(ContactFormContext);
  if (!context) throw new Error("useContactMe must be used within ContactFormProvider");
  return context;
};
