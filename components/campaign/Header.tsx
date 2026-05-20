'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { campaign } from '@/config/campaign';

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { label: 'The Bike', href: '#bike' },
    { label: 'Build Plan', href: '#timeline' },
    { label: 'Artists', href: '#artists' },
    { label: 'Donate', href: '#donate' },
  ];

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='#' className='flex items-center gap-2'>
            <div className='flex items-center justify-center w-8 h-8 rounded-lg bg-accent'>
              <span className='text-white font-bold text-sm'>NWK</span>
            </div>
            <span className='font-bold text-lg text-foreground'>New World Kids</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className='flex items-center gap-4'>
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='inline-flex items-center justify-center w-9 h-9 rounded-md border border-border hover:bg-muted transition-colors'
              aria-label='Toggle theme'
            >
              {theme === 'dark' ? (
                <Sun className='w-4 h-4 text-muted-foreground' />
              ) : (
                <Moon className='w-4 h-4 text-muted-foreground' />
              )}
            </button>

            {/* CTA Button */}
            <a
              href={campaign.donationUrl}
              className='hidden sm:inline-flex items-center justify-center px-4 py-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors text-sm'
            >
              Support Build
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-border hover:bg-muted transition-colors'
              aria-label='Toggle menu'
            >
              {isMenuOpen ? (
                <X className='w-5 h-5' />
              ) : (
                <Menu className='w-5 h-5' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden pb-4 space-y-2'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={campaign.donationUrl}
              className='block w-full mt-4 px-3 py-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors text-sm text-center'
            >
              Support the Build
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
