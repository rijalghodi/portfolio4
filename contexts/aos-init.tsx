"use client";

import React, { useEffect } from "react";

import AOS from "aos";
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
