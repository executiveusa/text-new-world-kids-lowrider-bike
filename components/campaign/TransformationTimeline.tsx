'use client';

import { CheckCircle2 } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    title: 'Document the Current Bike',
    description: 'Document every detail of the bike as it exists today',
    icon: '📸',
  },
  {
    title: 'Invite Artists & Builders',
    description: 'Call for painters, fabricators, and makers to contribute',
    icon: '🎨',
  },
  {
    title: 'Choose Lowrider Direction',
    description: 'Community selects the aesthetic and design direction',
    icon: '🎯',
  },
  {
    title: 'Custom Build Phase',
    description: 'Paint, chrome, wheels, seat, and artistic details',
    icon: '🔧',
  },
  {
    title: 'Reveal the Finished Bike',
    description: 'Showcase the completed lowrider art piece to the community',
    icon: '🌟',
  },
  {
    title: 'Auction & Celebration',
    description: 'Auction proceeds support New World Kids programs',
    icon: '🏆',
  },
];

export function TransformationTimeline() {
  return (
    <section className='bg-zinc-950 text-white py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>The build plan</h2>
          <p className='text-lg text-zinc-300 max-w-2xl'>
            A clear path from concept to finished lowrider art piece, supporting New World Kids programs every step of the way.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {TIMELINE_STEPS.map((step, index) => (
            <div
              key={index}
              className='group relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300'
            >
              {/* Number Badge */}
              <div className='absolute -top-4 -right-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg'>
                {index + 1}
              </div>

              {/* Icon */}
              <div className='text-4xl mb-4'>{step.icon}</div>

              {/* Content */}
              <h3 className='text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors'>
                {step.title}
              </h3>
              <p className='text-zinc-400 text-sm leading-relaxed'>{step.description}</p>

              {/* Bottom Accent */}
              <div className='mt-6 pt-6 border-t border-white/5'>
                <div className='flex items-center gap-2 text-xs text-zinc-500'>
                  <CheckCircle2 className='w-4 h-4 text-blue-500' />
                  <span>Community milestone</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Connector Info */}
        <div className='mt-16 p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl'>
          <h3 className='text-lg font-semibold mb-2 text-blue-300'>Timeline Estimate</h3>
          <p className='text-zinc-300'>
            Working target: approximately three months from launch, depending on artist availability, build scope, and community input.
          </p>
        </div>
      </div>
    </section>
  );
}
