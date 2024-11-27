'use client';

import React, { useState } from 'react';
import { Button, ButtonProps } from '@/components/ui/button'; // Adjust import as needed
import { IconCheck, IconCopy } from '@tabler/icons-react';

interface CopyButtonProps extends ButtonProps {
  value: string; // Text to copy
  labelDefault?: string;
  labelCopied?: string;
}

export function CopyButton({
  value,
  labelCopied,
  labelDefault,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <Button
      onClick={handleCopy}
      {...props} // Spread additional props
    >
      {copied ? (
        <>
          <IconCheck className="w-4 h-4 text-primary" />
          {labelCopied}
        </>
      ) : (
        <>
          <IconCopy className="w-4 h-4" />
          {labelDefault}
        </>
      )}
    </Button>
  );
}
