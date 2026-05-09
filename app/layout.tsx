import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'New World Kids Lowrider Bike Build', description: 'Nonprofit-led Seattle-local campaign landing page.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang='en'><body className='bg-zinc-950 text-white'>{children}</body></html>; }
