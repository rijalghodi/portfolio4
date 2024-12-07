'use client';

import React from 'react';
import { NextStudio } from 'next-sanity/studio';
import { sanityConfig } from '@/sanity.config';
export default function AdminPage() {
  return <NextStudio config={sanityConfig} />;
}
