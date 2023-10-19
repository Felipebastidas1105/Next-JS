import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-center">
      <h1 className="text-white font-bold px-4 py-2">Adso</h1>
      <ul className="flex justify-center space-x-4 p-4">
        <li><Link href="/" className="text-white font-bold px-4 py-2 rounded hover:bg-gray-700">Inicio</Link></li>
        <li><Link href="/about" className="text-white font-bold px-4 py-2 rounded hover:bg-gray-700">Acerca de</Link></li>
        <li><Link href="/contacto" className="text-white font-bold px-4 py-2 rounded hover:bg-gray-700">Contacto</Link></li>
        <li><Link href="/tareas" className="text-white font-bold px-4 py-2 rounded hover:bg-gray-700">Tareas</Link></li>
        <li><Link href="/calendario" className="text-white font-bold px-4 py-2 rounded hover:bg-gray-700">calendario</Link></li>
      </ul>
    </nav>
  );
}