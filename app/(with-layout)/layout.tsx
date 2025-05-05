import { Footer } from "@/components/elements/footer";
import { Header } from "@/components/elements/app-header";
import { RevalidateAffix } from "@/components/elements/revalidate-affix";
import React from "react";
type Props = {
  children: React.ReactNode;
};
export default function WithLayout(props: Props) {
  return (
    <div className="w-full">
      <Header />
      <main className="mt-14 py-4 px-5">{props.children}</main>
      <Footer />
      <RevalidateAffix />
    </div>
  );
}
