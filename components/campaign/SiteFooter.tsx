'use client';

import { campaign } from '@/config/campaign';

export function SiteFooter() {
  return (
    <footer className='bg-black border-t border-white/10 text-white'>
      <div className='mx-auto max-w-7xl px-6 py-16'>
        {/* Footer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
          {/* Brand */}
          <div>
            <h3 className='font-bold text-lg mb-4'>{campaign.nonprofitName}</h3>
            <p className='text-sm text-zinc-400 leading-relaxed'>
              Community-powered nonprofit supporting youth art education through collaborative, public projects.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className='font-semibold mb-4 text-sm uppercase tracking-wide'>Campaign</h4>
            <ul className='space-y-2 text-sm text-zinc-400'>
              <li><a href='#' className='hover:text-white transition-colors'>About the Project</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Artist Guidelines</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Sponsorship Info</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Updates & News</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className='font-semibold mb-4 text-sm uppercase tracking-wide'>Connect</h4>
            <ul className='space-y-2 text-sm text-zinc-400'>
              <li><a href='#' className='hover:text-white transition-colors'>Instagram</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Twitter</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Facebook</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Email</a></li>
            </ul>
          </div>

          {/* Actions */}
          <div>
            <h4 className='font-semibold mb-4 text-sm uppercase tracking-wide'>Get Involved</h4>
            <div className='space-y-3'>
              <a
                href={campaign.donationUrl}
                className='block text-center py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors text-sm'
              >
                Donate Now
              </a>
              <a
                href={campaign.artistApplicationUrl}
                className='block text-center py-2 px-4 border border-white/20 hover:border-white/40 rounded-lg transition-colors text-sm'
              >
                Apply as Artist
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-white/10 pt-8'>
          {/* Bottom Info */}
          <div className='flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 gap-4'>
            <p>© 2025 {campaign.nonprofitName}. All rights reserved.</p>
            <div className='flex gap-6'>
              <a href='#' className='hover:text-white transition-colors'>Privacy Policy</a>
              <a href='#' className='hover:text-white transition-colors'>Terms of Service</a>
              <a href='#' className='hover:text-white transition-colors'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
