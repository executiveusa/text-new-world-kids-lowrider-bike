'use client';

const CONCEPT_DIRECTIONS = [
  {
    title: 'Chrome & Candy',
    description: 'Polished chrome accents with vibrant candy paint finish',
    colors: ['#1a1a2e', '#0066ff', '#00d4ff'],
  },
  {
    title: 'Emerald Night',
    description: 'Deep emerald frame with gold pinstriping and custom details',
    colors: ['#0a2c1a', '#00d46a', '#ffd700'],
  },
  {
    title: 'Northwest Blue',
    description: 'Bold Seattle-inspired blue with chrome and pearl accents',
    colors: ['#001a4d', '#0066ff', '#c0c0c0'],
  },
  {
    title: 'Collector\'s Edition',
    description: 'Premium matte finish with art gallery presentation details',
    colors: ['#0f0f0f', '#ffffff', '#666666'],
  },
];

export function ConceptGallery() {
  return (
    <section className='bg-black text-white py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>After: the lowrider direction</h2>
          <p className='text-lg text-zinc-300 max-w-2xl'>
            Concept directions showing the potential aesthetic paths for the transformed bike.
          </p>
        </div>

        {/* Concept Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          {CONCEPT_DIRECTIONS.map((concept, index) => (
            <div
              key={index}
              className='group relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300'
            >
              {/* Color Preview */}
              <div className='h-32 bg-gradient-to-r flex items-center justify-center' style={{
                backgroundImage: `linear-gradient(135deg, ${concept.colors.join(', ')})`,
              }}>
              </div>

              {/* Content */}
              <div className='p-8'>
                <h3 className='text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors'>
                  {concept.title}
                </h3>
                <p className='text-zinc-400 leading-relaxed mb-6'>{concept.description}</p>
                <div className='text-xs font-semibold text-zinc-500 uppercase tracking-wider'>
                  Concept direction, not final artwork
                </div>
              </div>

              {/* Accent Line */}
              <div className='absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-transparent w-full' />
            </div>
          ))}
        </div>

        {/* Community Input Note */}
        <div className='p-8 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-xl'>
          <p className='text-zinc-300'>
            Final direction will be shaped by community feedback, artist input, and New World Kids program vision.
          </p>
        </div>
      </div>
    </section>
  );
}
