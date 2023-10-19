'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  return (
    <nav className="bg-gray-200 py-2 px-4">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/">
            <h1 className="text-gray-500 hover:text-gray-700">Inicio</h1>
          </Link>
          <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M313.02 225.37L94.63 7.51C86.98-.14 76.48-.14 68.83 7.51L6.98 69.36C-.14 77.01-.14 87.51 6.98 95.16L225.37 313.02 6.98 530.87C-.14 538.52-.14 549.02 6.98 556.67L68.83 618.51C76.48 626.16 86.98 626.16 94.63 618.51L313.02 400.65C320.67 392.99 320.67 382.49 313.02 374.84z"/></svg>
        </li>
        {pathSegments.map((segment, index) => {
          const isLastSegment = index === pathSegments.length - 1;
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;

          return (
            <li key={segment} className="flex items-center">
              <Link href={href}>
                <h1 className={`text-gray-500 hover:text-gray-700 ${isLastSegment ? 'font-bold' : ''}`}>{segment}</h1>
              </Link>
              {!isLastSegment && <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M313.02 225.37L94.63 7.51C86.98-.14 76.48-.14 68.83 7.51L6.98 69.36C-.14 77.01-.14 87.51 6.98 95.16L225.37 313.02 6.98 530.87C-.14 538.52-.14 549.02 6.98 556.67L68.83 618.51C76.48 626.16 86.98 626.16 94.63 618.51L313.02 400.65C320.67 392.99 320.67 382.49 313.02 374.84z"/></svg>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}