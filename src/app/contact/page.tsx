import React from 'react';
import Contact from '@/contact/contact';

export const metadata = {
  title: 'Contact - Auri',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-between">
      <Contact />
      <div className="w-full">
      </div>
    </main>
  );
}
