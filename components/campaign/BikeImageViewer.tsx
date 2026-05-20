'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BIKE_IMAGES = [
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8761.JPEG-l1RA55MqwmUxyvpnIyaJiNqHzF0e3A.jpeg',
    caption: 'Complete Side View',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8762.JPEG-VjwGSYZer9kcby0qLUhpFLCLcJ0c1Z.jpeg',
    caption: 'Bike Stand Profile',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8764.JPEG-7XTvjYwqasYQI9pzA1c2oIYMTjsIbo.jpeg',
    caption: 'Front Assembly Detail',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8765.JPEG-9WKzrZVi5FFlEWU0oghy886q8f8Uk6.jpeg',
    caption: 'Wheel Assembly Close-up',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8766.JPEG-bClCJDV8HPQhgMVksl8NC6RmLMBJL4.jpeg',
    caption: 'Rear Wheel Detail',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8767.JPEG-3ih0T56AEZrdlpvCM3KBCB3zZFNRTw.jpeg',
    caption: 'Wheel Hub Spokes',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8769.JPEG-CnCcE7N7WiWQ9cDUSJPxOxLX0FKxDT.jpeg',
    caption: 'Rear Wheel Profile',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8770.JPEG-hmiSgeOTZ7wWh5KtoMWAJSMGta4Gbw.jpeg',
    caption: 'Frame & Crankset Detail',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8771.JPEG-VCGyxbWzWjSSbOOrqriBxzX6n4mBID.jpeg',
    caption: 'Rear Dropout Detail',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8772.JPEG-y1Ucqbk5v4ITPliQQwMnmQEMfDGmn1.jpeg',
    caption: 'Crankset Assembly',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8773.JPEG-bx9eyRg1BDKAas4LrFDbHOcIRI32II.jpeg',
    caption: 'Frame Joint Close-up',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8780.JPEG-lxlhImWxPPaTLj2xLEq9GmwWQ6mrZW.jpeg',
    caption: 'Fork Blade Detail',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8782.JPEG-bwOZh2u7VXHGcHUs791bxr7vMC45F5.jpeg',
    caption: 'Handlebar Assembly',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8783.JPEG-zbjVuLUcV1LqrDORUGmbPnyA018oRh.jpeg',
    caption: 'Frame Structure',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8787.JPEG-vfIS1gehuQequ1L6BQTSS4iToqSjYF.jpeg',
    caption: 'Headtube & Branding',
  },
];

export function BikeImageViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? BIKE_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === BIKE_IMAGES.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className='w-full space-y-6'>
      {/* Main Display */}
      <div className='relative aspect-square lg:aspect-video bg-muted rounded-xl overflow-hidden border border-border'>
        <Image
          src={BIKE_IMAGES[currentIndex].url}
          alt={BIKE_IMAGES[currentIndex].caption}
          fill
          quality={90}
          priority
          className='object-contain p-4 md:p-8'
        />

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className='absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full transition-colors'
          aria-label='Previous image'
        >
          <ChevronLeft className='w-6 h-6 text-foreground' />
        </button>

        <button
          onClick={goToNext}
          className='absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full transition-colors'
          aria-label='Next image'
        >
          <ChevronRight className='w-6 h-6 text-foreground' />
        </button>

        {/* Caption */}
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/50 to-transparent p-6'>
          <p className='text-foreground font-semibold text-lg'>
            {BIKE_IMAGES[currentIndex].caption}
          </p>
          <p className='text-muted-foreground text-sm mt-1'>
            {currentIndex + 1} of {BIKE_IMAGES.length}
          </p>
        </div>
      </div>

      {/* Helper Text */}
      <div className='text-center'>
        <p className='text-sm text-muted-foreground'>
          Use arrows or swipe to explore different angles
        </p>
      </div>

      {/* Thumbnail Grid */}
      <div className='grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2'>
        {BIKE_IMAGES.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? 'border-blue-600 ring-2 ring-blue-600'
                : 'border-border hover:border-foreground/30 dark:hover:border-foreground/20'
            }`}
            aria-label={`View ${image.caption}`}
          >
            <Image
              src={image.url}
              alt={image.caption}
              fill
              quality={75}
              className='object-cover'
            />
          </button>
        ))}
      </div>

      {/* 3D Model Coming Soon Card */}
      <div className='mt-12 p-6 bg-muted border border-border rounded-xl'>
        <h3 className='text-lg font-semibold text-foreground mb-2'>Interactive Concept Model</h3>
        <p className='text-muted-foreground'>
          This is a placeholder concept viewer. A true 3D scan can be added after the finished build is complete.
        </p>
      </div>
    </div>
  );
}
