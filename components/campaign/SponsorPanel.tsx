'use client';

const SPONSOR_BENEFITS = [
  {
    tier: 'Presenting Sponsor',
    investment: '$15,000+',
    benefits: [
      'Prominent logo placement on all materials',
      'VIP event access for 4 guests',
      'Dedicated social media recognition',
      'Custom thank you video from artists',
      'First-look at finished bike',
    ],
  },
  {
    tier: 'Featured Sponsor',
    investment: '$7,500+',
    benefits: [
      'Logo on website and social',
      'Event access for 2 guests',
      'Recognition at launch event',
      'Behind-the-scenes content',
    ],
  },
  {
    tier: 'Partner',
    investment: '$2,500+',
    benefits: [
      'Logo on website',
      'Social media mentions',
      'Event access for 1 guest',
    ],
  },
];

export function SponsorPanel() {
  return (
    <section className='bg-zinc-950 text-white py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>Sponsorship Opportunities</h2>
          <p className='text-lg text-zinc-300'>
            Partner with us to amplify your brand while supporting a transformational community project.
          </p>
        </div>

        {/* Sponsor Tiers */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {SPONSOR_BENEFITS.map((sponsor, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300'
            >
              <h3 className='text-2xl font-bold mb-2'>{sponsor.tier}</h3>
              <p className='text-3xl font-bold text-blue-400 mb-6'>{sponsor.investment}</p>
              
              <ul className='space-y-3'>
                {sponsor.benefits.map((benefit, i) => (
                  <li key={i} className='flex gap-3 text-zinc-300'>
                    <span className='text-blue-400 flex-shrink-0'>✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href='mailto:info@newworldkids.org'
                className='mt-8 w-full inline-flex items-center justify-center py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200'
              >
                Get in Touch
              </a>
            </div>
          ))}
        </div>

        {/* Custom Sponsorship */}
        <div className='mt-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-xl p-8'>
          <p className='text-zinc-300'>
            Have a creative idea for partnership? We&apos;re open to custom sponsorship structures that align with your brand values and goals.{' '}
            <a href='mailto:info@newworldkids.org' className='text-blue-400 hover:text-blue-300 font-semibold'>
              Let&apos;s talk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
