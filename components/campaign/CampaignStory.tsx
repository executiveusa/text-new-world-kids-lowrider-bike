'use client';

import { BikeImageViewer } from './BikeImageViewer';

export function CampaignStory() {
  return (
    <section className='bg-black text-white py-20 lg:py-28'>
      {/* Three Simple Facts Strip */}
      <div className='mx-auto max-w-7xl px-6 mb-16 lg:mb-24'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8'>
            <div className='w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4'>
              <div className='text-blue-400 font-bold text-xl'>1</div>
            </div>
            <h3 className='text-lg font-semibold mb-2'>Funds Support Programs</h3>
            <p className='text-zinc-400'>All proceeds support New World Kids programs that empower youth through art and community.</p>
          </div>

          <div className='bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8'>
            <div className='w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4'>
              <div className='text-blue-400 font-bold text-xl'>2</div>
            </div>
            <h3 className='text-lg font-semibold mb-2'>Artists Can Contribute</h3>
            <p className='text-zinc-400'>Painters, fabricators, and makers can apply to shape the transformation of this bike.</p>
          </div>

          <div className='bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8'>
            <div className='w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4'>
              <div className='text-blue-400 font-bold text-xl'>3</div>
            </div>
            <h3 className='text-lg font-semibold mb-2'>Auction Direction Pending</h3>
            <p className='text-zinc-400'>Final auction details will be reviewed by nonprofit leadership before public launch.</p>
          </div>
        </div>
      </div>

      {/* The Bike Section */}
      <div className='mx-auto max-w-7xl px-6 space-y-12'>
        <div>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>Start with the bike. Build the story.</h2>
          <p className='text-lg text-zinc-300 max-w-2xl'>
            This bike is the starting point: a small mountain bike with a local Seattle story, now being prepared for a full lowrider-style transformation. Every angle tells the story of careful craftsmanship and community commitment.
          </p>
        </div>

        {/* Bike Viewer */}
        <BikeImageViewer />
      </div>
    </section>
  );
}
