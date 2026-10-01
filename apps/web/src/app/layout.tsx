import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CareerOS | Student career workspace',
  description: 'Build evidence for your next opportunity.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
