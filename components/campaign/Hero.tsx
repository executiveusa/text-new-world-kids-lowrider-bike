import { Bike3D } from './Bike3D';
import { campaign } from '@/config/campaign';
import { MeshGradient } from '@/components/cinematic/MeshGradient';
import { SpotlightCard } from '@/components/cinematic/SpotlightCard';
import { OdometerValue } from '@/components/cinematic/OdometerValue';

export function Hero() {
  return (
    <section className='min-h-[100dvh] bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-hidden'>
      <div className='relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-14 lg:grid-cols-2 lg:items-center'>
        <MeshGradient>
          <div className='space-y-6 p-6 lg:p-8'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-blue-300'>{campaign.nonprofitName} Campaign</p>
            <h1 className='text-4xl font-bold leading-tight lg:text-6xl'>{campaign.heroHeadline}</h1>
            <p className='max-w-xl text-base leading-relaxed text-zinc-300 lg:text-lg'>{campaign.heroSubheadline}</p>

            <div className='flex flex-wrap gap-3'>
              <a href={campaign.donationUrl} className='rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500'>Donate now</a>
              <a href={campaign.artistApplicationUrl} className='rounded-lg border border-white/25 px-6 py-3 font-semibold transition hover:border-white/50 hover:bg-white/5'>Apply as artist</a>
            </div>

            <div className='grid grid-cols-2 gap-3'>
              <SpotlightCard>
                <p className='text-xs uppercase tracking-wider text-zinc-400'>Fundraising Goal</p>
                <OdometerValue>${campaign.totalGoalUsd.toLocaleString()}</OdometerValue>
              </SpotlightCard>
              <SpotlightCard>
                <p className='text-xs uppercase tracking-wider text-zinc-400'>Community</p>
                <OdometerValue>100+</OdometerValue>
              </SpotlightCard>
            </div>
          </div>
        </MeshGradient>

        <div className='h-[400px] sm:h-[500px] lg:h-[620px]'>
          <Bike3D />
        </div>
      </div>
    </section>
  );
}
