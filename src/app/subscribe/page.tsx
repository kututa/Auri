import React from 'react';
import Subscribe from '@/components/subscribe/Subscribe';

export const metadata = {
  title: 'Subscribe - Auri',
};

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-20">
      <Subscribe />
      <div className="w-full mt-12">
      </div>
    </main>
  );
}
