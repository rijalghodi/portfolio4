"use client";

import AOS from "aos";
import React, { useEffect } from "react";
type Props = { children: React.ReactNode };
export function AOSInit(props: Props) {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
  }, []);
  return props.children;
}
