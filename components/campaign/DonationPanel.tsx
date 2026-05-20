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
    <section id='donate' className='bg-blue-50 dark:bg-blue-600/5 text-foreground py-20 lg:py-28 border-t border-border'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>Help Fund New World Kids Programs</h2>
          <p className='text-lg text-muted-foreground'>
            Every contribution directly supports materials, artist compensation, and community engagement for this transformational project.
          </p>
        </div>

        {/* Campaign Target */}
        <div className='mb-12 p-8 bg-background border border-border rounded-xl'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>
            <div>
              <p className='text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2'>Campaign Target</p>
              <p className='text-4xl font-bold text-foreground'>${campaign.totalGoalUsd.toLocaleString()}</p>
            </div>
            <div>
              <p className='text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2'>Currently Raised</p>
              <p className='text-4xl font-bold text-foreground'>${campaign.currentRaisedUsd.toLocaleString()}</p>
            </div>
          </div>
          <p className='text-sm text-muted-foreground'>Campaign launch target. All funds support New World Kids youth programs.</p>
        </div>

        {/* Donation Tiers */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {DONATION_TIERS.map((tier, index) => (
            <div
              key={index}
              className='bg-background border border-border rounded-xl p-6 hover:border-blue-600 transition-all duration-300 flex flex-col'
            >
              <div className='text-4xl font-bold text-blue-600 mb-2'>${tier.amount}</div>
              <h3 className='text-xl font-semibold mb-2'>{tier.label}</h3>
              <p className='text-sm text-muted-foreground mb-6 flex-grow'>{tier.benefit}</p>
              <a
                href={campaign.donationUrl}
                className='w-full inline-flex items-center justify-center py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm'
              >
                Donate ${tier.amount}
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <p className='text-muted-foreground mb-6'>
            Want to make a custom donation or have questions?
          </p>
          <a
            href={campaign.donationUrl}
            className='inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-lg'
          >
            Support the Build
          </a>
        </div>
      </div>
    </section>
  );
}
