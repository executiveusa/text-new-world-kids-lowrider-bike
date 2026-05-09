import { existsSync } from 'node:fs';
const paths=['public/assets/bike/story/current-bike.jpg','public/assets/bike/concepts/concept-01.jpg'];
for(const p of paths) if(!existsSync(p)) console.warn('Missing',p);
console.log('Asset check complete');
