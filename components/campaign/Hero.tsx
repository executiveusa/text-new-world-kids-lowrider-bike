'use client';

import Image from 'next/image';
import { campaign } from '@/config/campaign';

export function Hero() {
  return (
    <section className='min-h-[100dvh] bg-background text-foreground overflow-hidden'>
      {/* Background accents */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/5 blur-3xl rounded-full' />
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full' />
      </div>

      <div className='relative mx-auto max-w-7xl px-6 py-16 lg:py-20 min-h-[100dvh] flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
        
        {/* Left: Content */}
        <div className='flex flex-col justify-center space-y-8 z-10'>
          {/* Eyebrow */}
          <div>
            <p className='text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400'>
              Seattle-local community art build
            </p>
          </div>

          {/* Headline */}
          <div>
            <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-balance'>
              {campaign.heroHeadline}
            </h1>
          </div>

          {/* Subheadline */}
          <p className='text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl'>
            {campaign.heroSubheadline}
          </p>

          {/* CTAs */}
          <div className='flex flex-col sm:flex-row gap-4 pt-4'>
            <a
              href={campaign.donationUrl}
              className='inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200'
            >
              Support the Build
            </a>
            <a
              href={campaign.artistApplicationUrl}
              className='inline-flex items-center justify-center px-8 py-4 border border-border hover:bg-muted text-foreground font-semibold rounded-lg transition-colors duration-200'
            >
              Apply as an Artist
            </a>
          </div>

          {/* Microcopy */}
          <div className='pt-8 border-t border-border'>
            <p className='text-sm text-muted-foreground'>
              Nonprofit-led. Community-powered. Not an official team or league campaign.
            </p>
          </div>

          {/* Stats */}
          <div className='flex gap-8 pt-4'>
            <div>
              <div className='text-3xl font-bold text-blue-600'>
                ${campaign.totalGoalUsd.toLocaleString()}
              </div>
              <p className='text-xs uppercase tracking-wider text-muted-foreground mt-1'>Fundraising Goal</p>
            </div>
            <div>
              <div className='text-3xl font-bold text-foreground'>100+</div>
              <p className='text-xs uppercase tracking-wider text-muted-foreground mt-1'>Artists & Supporters</p>
            </div>
          </div>
        </div>

        {/* Right: Bike Image */}
        <div className='relative h-[400px] sm:h-[500px] lg:h-[600px] w-full z-20'>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8761.JPEG-l1RA55MqwmUxyvpnIyaJiNqHzF0e3A.jpeg"
            alt="Rocky Mountain EDGE 24 lowrider bike - complete assembly view"
            fill
            priority
            quality={85}
            className='object-contain object-center drop-shadow-2xl'
          />
        </div>
      </div>
    </section>
  );
}
