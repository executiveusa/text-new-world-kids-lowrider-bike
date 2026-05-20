'use client';

export function LegalNotice() {
  return (
    <section className='bg-black text-white py-16 lg:py-20 border-t border-white/10'>
      <div className='mx-auto max-w-4xl px-6'>
        <div className='space-y-8'>
          <div>
            <h3 className='text-lg font-semibold mb-3'>Legal Disclaimer</h3>
            <p className='text-sm text-zinc-400 leading-relaxed'>
              This campaign is organized by New World Kids, a 501(c)(3) nonprofit organization. This is not an official campaign affiliated with any professional sports team, league, or government entity. All donations are voluntary contributions to support community art education programs.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-3'>Donation Policy</h3>
            <p className='text-sm text-zinc-400 leading-relaxed'>
              All donations are tax-deductible contributions to New World Kids. Donors will receive a receipt for tax purposes. Donations are non-refundable except where required by law.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-3'>Auction Terms</h3>
            <p className='text-sm text-zinc-400 leading-relaxed'>
              The finished bike will be auctioned to a qualified buyer. Auction proceeds benefit New World Kids youth programs. The auction is subject to applicable state and local laws. Terms and conditions will be provided at the time of auction.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-3'>Privacy & Data</h3>
            <p className='text-sm text-zinc-400 leading-relaxed'>
              We respect your privacy. Any personal information collected through donations or artist applications will be used solely for campaign-related purposes and will never be shared with third parties without consent.
            </p>
          </div>

          <div className='pt-8 border-t border-white/10'>
            <p className='text-xs text-zinc-500'>
              New World Kids is a registered 501(c)(3) nonprofit organization (EIN: XX-XXXXXXX). This campaign is conducted in accordance with all applicable federal, state, and local laws and regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
