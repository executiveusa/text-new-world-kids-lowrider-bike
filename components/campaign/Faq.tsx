'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: 'Is this an official team or league campaign?',
    answer: 'No. This is a nonprofit-led, community-powered initiative. It&apos;s not affiliated with any professional sports team or league.',
  },
  {
    question: 'Where does the money go?',
    answer: 'Donations fund materials, artist compensation, documentation, and the final reveal event. After the auction, 100% of proceeds support New World Kids youth programs.',
  },
  {
    question: 'Can I see the build process?',
    answer: 'Yes! We&apos;ll share behind-the-scenes content, artist stories, and process videos throughout the build on our social channels.',
  },
  {
    question: 'How are artists selected?',
    answer: 'We welcome applications from artists of all experience levels and disciplines. We prioritize those whose vision aligns with the project&apos;s community values.',
  },
  {
    question: 'What happens to the bike after the auction?',
    answer: 'The bike goes to the auction winner. The finished bike will be documented and celebrated as a permanent record of this community collaboration.',
  },
  {
    question: 'How can I stay updated?',
    answer: 'Follow us on social media and subscribe to our newsletter for project updates, artist spotlights, and event announcements.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className='bg-muted text-foreground py-20 lg:py-28'>
      <div className='mx-auto max-w-3xl px-6'>
        <div className='mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>Frequently Asked Questions</h2>
          <p className='text-lg text-muted-foreground'>
            Have a question not listed? Reach out to us directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className='space-y-4'>
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className='border border-border rounded-lg overflow-hidden hover:border-blue-600 transition-colors duration-300'
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className='w-full flex items-center justify-between p-6 bg-background hover:bg-muted transition-colors duration-300'
              >
                <h3 className='text-lg font-semibold text-left'>{item.question}</h3>
                <span
                  className={`ml-4 flex-shrink-0 text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className='px-6 py-4 bg-muted border-t border-border'>
                  <p className='text-muted-foreground leading-relaxed'>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
