"use client";

import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="relative w-full min-h-screen max-w-2xl flex items-center justify-center p-6 mx-auto">
      <Button
        onClick={() => {
          Cookies.remove("rijalghodi.dev.token");
          router.push("/");
        }}
      >
        Logout
      </Button>
    </div>
  );
}
