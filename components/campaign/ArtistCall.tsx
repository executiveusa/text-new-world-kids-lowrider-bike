'use client';

import { campaign } from '@/config/campaign';

const ARTIST_ROLES = [
  { emoji: '🎨', title: 'Painters', description: 'Custom paint and design' },
  { emoji: '✨', title: 'Pinstripers', description: 'Detailed line work' },
  { emoji: '🔧', title: 'Fabricators', description: 'Metal and structural work' },
  { emoji: '📸', title: 'Photographers', description: 'Documentation and showcasing' },
  { emoji: '🎭', title: '3D Artists', description: 'Digital modeling and visualization' },
  { emoji: '🖼️', title: 'Muralists', description: 'Large-scale artistic vision' },
  { emoji: '🪑', title: 'Upholsterers', description: 'Seat and detail crafting' },
  { emoji: '⚙️', title: 'Fabricators', description: 'Custom parts and components' },
];

export function ArtistCall() {
  return (
    <section className='bg-zinc-950 text-white py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          
          {/* Left: Content */}
          <div>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>Artists can help turn the bike into the artwork</h2>
            
            <p className='text-lg text-zinc-300 mb-8 leading-relaxed'>
              We are looking for collaborators who can contribute to the build, documentation, reveal, or final collector presentation. Every artist brings a unique perspective that elevates the project.
            </p>

            {/* Artist Types Grid */}
            <div className='grid grid-cols-2 gap-4 mb-10'>
              {ARTIST_ROLES.map((role, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <span className='text-2xl'>{role.emoji}</span>
                  <div>
                    <p className='font-semibold text-white'>{role.title}</p>
                    <p className='text-sm text-zinc-400'>{role.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={campaign.artistApplicationUrl}
              className='inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200'
            >
              Apply as an Artist
            </a>
          </div>

          {/* Right: Info Box */}
          <div className='space-y-6'>
            <div className='bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-xl p-8'>
              <h3 className='text-2xl font-semibold mb-4 text-blue-300'>Why Participate?</h3>
              <ul className='space-y-3 text-zinc-300'>
                <li className='flex gap-3'>
                  <span className='text-blue-400'>✓</span>
                  <span>Contribute to a Seattle community project</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-blue-400'>✓</span>
                  <span>Support New World Kids programs</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-blue-400'>✓</span>
                  <span>Gain exposure and recognition</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-blue-400'>✓</span>
                  <span>Collaborate with other talented makers</span>
                </li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8'>
              <h3 className='text-lg font-semibold mb-3'>What We Need</h3>
              <p className='text-zinc-400 text-sm leading-relaxed'>
                Submit your portfolio, describe your specialty, and let us know how you'd like to contribute. No experience level is off limits—we welcome passionate creators at all stages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
