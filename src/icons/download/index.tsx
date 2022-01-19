import React from 'react';

export default function Download({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 14h16v2h-16v-2z"></path>
      <path d="M8 13l5-5h-3v-8h-4v8h-3z"></path>
    </svg>
  );
}
