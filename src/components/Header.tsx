'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container-width flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="NuTech Fusion Logo"
            width={40}
            height={40}
            className="w-auto h-8"
            priority
          />
          <span className="font-bold text-lg text-white">NuTech Fusion</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
            Privacy
          </Link>
          <button 
            onClick={() => {
              document.querySelector('#consultation')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-blue-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container-width px-4 py-2 space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-300 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/terms"
              className="block py-2 text-gray-300 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="block py-2 text-gray-300 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy
            </Link>
            <button 
              onClick={() => {
                document.querySelector('#consultation')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="w-full btn-primary text-center"
            >
              Get Started
            </button>
          </div>
        </nav>
      )}
    </header>
  );
} 