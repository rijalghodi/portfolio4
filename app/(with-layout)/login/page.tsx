"use client";

import { IconLoader, IconLogin } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { mutateAsync: login, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      return res.json(); // Assuming response is in JSON format
    },
    onSuccess: (data) => {
      console.log(data);
      router.push("/dashboard");
    },
    onError: (error: Error) => {
      toast("Login failed", {
        description: JSON.stringify(error.message),
        className: "bg-destructive",
      });
    },
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on form submit
    try {
      await login({ email, password }); // Pass email and password to mutation function
    } catch (error) {
      // Error handling if needed
      console.error("Error during login submission:", error);
    }
  };

  return (
    <div className="relative w-full min-h-screen max-w-2xl flex items-center justify-center p-6 mx-auto">
      <form
        className="grid grid-cols-1 w-full max-w-md gap-4 p-8 rounded-xl border"
        onSubmit={onSubmit}
        method="POST"
      >
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? <IconLoader className="animate-spin" /> : <IconLogin />} Login
        </Button>
      </form>
    </div>
  );
}
