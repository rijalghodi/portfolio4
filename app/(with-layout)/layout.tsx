import { Footer } from "@/components/elements/app-footer";
import { Header } from "@/components/elements/app-header";
import { RevalidateAffix } from "@/components/elements/revalidate-affix";
import React from "react";
type Props = {
  children: React.ReactNode;
};
export default function WithLayout(props: Props) {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main className="pt-14 py-4 px-6 sm:px-12 overflow-clip">{props.children}</main>
      <Footer />
      <RevalidateAffix />
    </div>
  );
}
