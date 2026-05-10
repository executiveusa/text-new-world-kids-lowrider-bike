import { Bike360Viewer } from './Bike360Viewer';
import { Bike3D } from './Bike3D';
import { campaign } from '@/config/campaign';

export function Hero() {
  return (
    <section className='min-h-[100dvh] bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-hidden'>
      {/* Background accent */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 right-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full' />
        <div className='absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full' />
      </div>

      <div className='relative flex flex-col lg:grid lg:grid-cols-2 gap-8 px-6 py-16 min-h-[100dvh] items-center'>
        {/* Content Side */}
        <div className='flex flex-col justify-center space-y-6 w-full'>
          <div>
            <p className='text-sm font-medium text-blue-400 uppercase tracking-wider'>
              {campaign.nonprofitName} Campaign
            </p>
            <h1 className='text-5xl lg:text-6xl font-bold mt-3 leading-tight'>
              {campaign.heroHeadline}
            </h1>
          </div>

          <p className='text-lg text-zinc-300 max-w-md leading-relaxed'>
            {campaign.heroSubheadline}
          </p>

          <div className='flex flex-col sm:flex-row gap-4 pt-4'>
            <a
              href={campaign.donationUrl}
              className='inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold text-white transition-colors'
            >
              Support the Build
            </a>
            <a
              href={campaign.artistApplicationUrl}
              className='inline-flex items-center justify-center rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 px-6 py-3 font-semibold transition-colors'
            >
              Apply as an Artist
            </a>
          </div>

          {/* Stats */}
          <div className='flex gap-8 pt-8 border-t border-white/10'>
            <div>
              <div className='text-2xl font-bold text-blue-400'>
                ${campaign.totalGoalUsd.toLocaleString()}
              </div>
              <p className='text-sm text-zinc-400'>Fundraising Goal</p>
            </div>
            <div>
              <div className='text-2xl font-bold text-zinc-300'>100+</div>
              <p className='text-sm text-zinc-400'>Artists & Supporters</p>
            </div>
          </div>
        </div>

        {/* 3D Bike Display */}
        <div className='w-full h-[400px] sm:h-[500px] lg:h-[600px]'>
          <Bike3D />
        </div>
      </div>
    </section>
  );
}
