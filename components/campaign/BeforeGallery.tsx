'use client';

import Image from 'next/image';

const BEFORE_IMAGES = [
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8761.JPEG-l1RA55MqwmUxyvpnIyaJiNqHzF0e3A.jpeg',
    caption: 'Complete bike assembly',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8762.JPEG-VjwGSYZer9kcby0qLUhpFLCLcJ0c1Z.jpeg',
    caption: 'Profile view on stand',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8764.JPEG-7XTvjYwqasYQI9pzA1c2oIYMTjsIbo.jpeg',
    caption: 'Front assembly detail',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8780.JPEG-lxlhImWxPPaTLj2xLEq9GmwWQ6mrZW.jpeg',
    caption: 'Fork and fork blade',
  },
];

export function BeforeGallery() {
  return (
    <section className='bg-background text-foreground py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>Before: The Story Begins</h2>
          <p className='text-lg text-muted-foreground max-w-2xl'>
            A mountain bike with local Seattle roots. Now it's the canvas for an extraordinary community transformation. Every detail is documented, every angle tells part of the story.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {BEFORE_IMAGES.map((image, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-xl border border-border hover:border-accent transition-all duration-300 bg-muted'
            >
              <div className='relative aspect-square overflow-hidden'>
                <Image
                  src={image.url}
                  alt={image.caption}
                  fill
                  quality={85}
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                <p className='text-white font-semibold text-sm'>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className='mt-12 p-6 bg-muted border border-border rounded-xl'>
          <p className='text-muted-foreground text-sm'>
            <span className='font-semibold text-foreground'>Rocky Mountain EDGE 24:</span> A compact mountain bike with a familiar Seattle presence, now being prepared for a complete lowrider-style transformation into collectible art.
          </p>
        </div>
      </div>
    </section>
  );
}
