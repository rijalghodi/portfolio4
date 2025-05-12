"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { contactEmail } from "@/data/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Send, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { StarHeading } from "../sections/star-heading";
import { Button } from "../ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const contactFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(1, "Name is required"),
  email: z.string({ required_error: "Email is required" }).email("Please enter a valid email address"),
  message: z.string({ required_error: "Message is required" }).min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }
    },
    onSuccess: () => {
      form.reset();
      setSubmitError(null);
      toast.success("Message sent!", {
        description: "Thank you for reaching out. I'll get back to you as soon as possible.",
        duration: 15000,
      });
    },
    onError: () => {
      toast.error("Failed to send.", {
        duration: 5000,
      });
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setSubmitError(null);
      await mutateAsync(data);
    } catch (error) {
      setSubmitError((error as Error).message);
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[100%] lg:h-[500px]">
        <DrawerClose asChild className="block sm:hidden">
          <Button variant="ghost" size="icon-lg" className="absolute top-4 right-4">
            <X />
          </Button>
        </DrawerClose>
        <div className="relative z-50 flex flex-col gap-2 w-full max-w-screen-sm mx-auto pb-6 overflow-y-auto">
          <DrawerHeader className="px-6">
            <DrawerTitle className="mt-4">
              <StarHeading title="Contact Me" className="text-center sm:text-left" />
            </DrawerTitle>
            {submitError && <p className="text-red-500 mt-2">{submitError}</p>}
          </DrawerHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Your name" className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your email" className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="What would you like to discuss?" className="w-full" rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="col-span-2 py-2">
                <div className="flex gap-4 gap-y-3 flex-col-reverse sm:flex-row">
                  <DrawerClose asChild>
                    <Button variant="secondary" size="lg" radius="full" className="w-full">
                      Cancel
                    </Button>
                  </DrawerClose>
                  <Button size="lg" radius="full" className="w-full" type="submit" disabled={isPending}>
                    {isPending ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2" />}
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </Form>
          <p className="col-span-2 text-sm text-muted-foreground text-center">
            Or kindly send an email to{" "}
            <a className="hover:underline underline-offset-2" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
