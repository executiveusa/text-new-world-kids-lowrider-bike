'use client';

import { campaign } from '@/config/campaign';
import { Palette, Zap, Wrench, Camera, Box, Image, Square, Cog } from 'lucide-react';

const ARTIST_ROLES = [
  { icon: Palette, title: 'Painters', description: 'Custom paint and design' },
  { icon: Zap, title: 'Pinstripers', description: 'Detailed line work' },
  { icon: Wrench, title: 'Fabricators', description: 'Metal and structural work' },
  { icon: Camera, title: 'Photographers', description: 'Documentation and showcasing' },
  { icon: Box, title: '3D Artists', description: 'Digital modeling and visualization' },
  { icon: Image, title: 'Muralists', description: 'Large-scale artistic vision' },
  { icon: Square, title: 'Upholsterers', description: 'Seat and detail crafting' },
  { icon: Cog, title: 'Fabricators', description: 'Custom parts and components' },
];

export function ArtistCall() {
  return (
    <section id='artists' className='bg-muted text-foreground py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          
          {/* Left: Content */}
          <div>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>Artists can help turn the bike into the artwork</h2>
            
            <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
              We are looking for collaborators who can contribute to the build, documentation, reveal, or final collector presentation. Every artist brings a unique perspective that elevates the project.
            </p>

            {/* Artist Types Grid */}
            <div className='grid grid-cols-2 gap-4 mb-10'>
              {ARTIST_ROLES.map((role, index) => {
                const IconComponent = role.icon;
                return (
                  <div key={index} className='flex items-start gap-3'>
                    <IconComponent className='w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5' />
                    <div>
                      <p className='font-semibold text-foreground'>{role.title}</p>
                      <p className='text-sm text-muted-foreground'>{role.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <a
              href={campaign.artistApplicationUrl}
              className='inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200'
            >
              Apply as an Artist
            </a>
          </div>

          {/* Right: Info Box */}
          <div className='space-y-6'>
            <div className='bg-blue-100 dark:bg-blue-600/20 border border-blue-200 dark:border-blue-500/20 rounded-xl p-8'>
              <h3 className='text-2xl font-semibold mb-4 text-blue-900 dark:text-blue-300'>Why Participate?</h3>
              <ul className='space-y-3 text-foreground'>
                <li className='flex gap-3'>
                  <span className='text-blue-600 font-bold'>✓</span>
                  <span>Contribute to a Seattle community project</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-blue-600 font-bold'>✓</span>
                  <span>Support New World Kids programs</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-blue-600 font-bold'>✓</span>
                  <span>Gain exposure and recognition</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-blue-600 font-bold'>✓</span>
                  <span>Collaborate with other talented makers</span>
                </li>
              </ul>
            </div>

            <div className='bg-background border border-border rounded-xl p-8'>
              <h3 className='text-lg font-semibold mb-3'>What We Need</h3>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Submit your portfolio, describe your specialty, and let us know how you&apos;d like to contribute. No experience level is off limits—we welcome passionate creators at all stages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
