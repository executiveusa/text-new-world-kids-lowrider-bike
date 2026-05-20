'use client';

import Image from 'next/image';

export function AuctionPreview() {
  return (
    <section className='bg-black text-white py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>After the Build: Collector&apos;s Auction</h2>
          <p className='text-lg text-zinc-300 max-w-2xl'>
            The finished lowrider will be auctioned to support ongoing New World Kids programming. 100% of proceeds go directly to community art education.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>
          {/* Large Featured Image */}
          <div className='lg:col-span-2 lg:row-span-2 relative h-96 lg:h-full min-h-96 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-colors duration-300 bg-zinc-900'>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8782.JPEG-bwOZh2u7VXHGcHUs791bxr7vMC45F5.jpeg"
              alt="Final lowrider bike showcase"
              fill
              quality={85}
              className='object-cover'
            />
          </div>

          {/* Side Images */}
          <div className='space-y-6'>
            <div className='relative h-48 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-colors duration-300 bg-zinc-900'>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8770.JPEG-hmiSgeOTZ7wWh5KtoMWAJSMGta4Gbw.jpeg"
                alt="Crankset detail"
                fill
                quality={85}
                className='object-cover'
              />
            </div>
            <div className='relative h-48 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-colors duration-300 bg-zinc-900'>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8769.JPEG-CnCcE7N7WiWQ9cDUSJPxOxLX0FKxDT.jpeg"
                alt="Wheel assembly"
                fill
                quality={85}
                className='object-cover'
              />
            </div>
          </div>
        </div>

        {/* Auction Details */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8'>
            <h3 className='text-lg font-semibold mb-3'>Auction Timeline</h3>
            <ul className='space-y-2 text-sm text-zinc-300'>
              <li><span className='text-blue-400 font-semibold'>Build Phase:</span> Q2 2025</li>
              <li><span className='text-blue-400 font-semibold'>Reveal Event:</span> Q3 2025</li>
              <li><span className='text-blue-400 font-semibold'>Auction:</span> Q3 2025</li>
            </ul>
          </div>

          <div className='bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8'>
            <h3 className='text-lg font-semibold mb-3'>What&apos;s Included</h3>
            <ul className='space-y-2 text-sm text-zinc-300'>
              <li className='flex gap-2'>
                <span className='text-blue-400'>✓</span>
                <span>Complete custom lowrider bike</span>
              </li>
              <li className='flex gap-2'>
                <span className='text-blue-400'>✓</span>
                <span>Artist signatures and documentation</span>
              </li>
              <li className='flex gap-2'>
                <span className='text-blue-400'>✓</span>
                <span>Certificate of authenticity</span>
              </li>
            </ul>
          </div>

          <div className='bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-xl p-8'>
            <h3 className='text-lg font-semibold mb-3 text-blue-300'>Impact</h3>
            <p className='text-sm text-zinc-300 leading-relaxed'>
              100% of auction proceeds support New World Kids youth art programs, providing free creative education to Seattle-area youth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
