'use client';

import { campaign } from '@/config/campaign';

const DONATION_TIERS = [
  { amount: 25, label: 'Supporter', benefit: 'Digital thank you + recognition' },
  { amount: 100, label: 'Sponsor', benefit: 'All above + official merchandise' },
  { amount: 500, label: 'Major Sponsor', benefit: 'All above + custom recognition' },
  { amount: 2500, label: 'Premier', benefit: 'VIP event access + limited edition item' },
];

export function DonationPanel() {
  return (
    <section className='bg-black text-white py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>Support the Build</h2>
          <p className='text-lg text-zinc-300'>
            Direct donation helps fund materials, artist compensation, and community engagement.
          </p>
        </div>

        {/* Donation Tiers */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {DONATION_TIERS.map((tier, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300'
            >
              <div className='text-4xl font-bold text-blue-400 mb-2'>${tier.amount}</div>
              <h3 className='text-xl font-semibold mb-2'>{tier.label}</h3>
              <p className='text-sm text-zinc-400 mb-6'>{tier.benefit}</p>
              <a
                href={campaign.donationUrl}
                className='w-full inline-flex items-center justify-center py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200 text-sm'
              >
                Donate ${tier.amount}
              </a>
            </div>
          ))}
        </div>

        {/* Fundraising Progress */}
        <div className='bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8'>
          <div className='mb-4'>
            <div className='flex justify-between items-center mb-2'>
              <span className='font-semibold'>Fundraising Progress</span>
              <span className='text-sm text-zinc-400'>$45,000 of $50,000</span>
            </div>
            <div className='w-full bg-zinc-700 rounded-full h-3 overflow-hidden'>
              <div className='bg-gradient-to-r from-blue-600 to-purple-600 h-full' style={{ width: '90%' }} />
            </div>
          </div>
          <p className='text-sm text-zinc-400'>
            90% funded. Every contribution gets us closer to breaking ground on this project.
          </p>
        </div>
      </div>
    </section>
  );
}
