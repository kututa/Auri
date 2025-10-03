import React from 'react';
import UIUXDesign from '@/components/UIUXDesign';

export const metadata = {
  title: 'UI/UX Design - AURI',
  description: 'UI and UX design showcase',
};

export default function Page() {
  return (
    <main className="min-h-screen py-12">
      <UIUXDesign title="UI / UX Design" description="Thoughtful interfaces and user experiences." />
    </main>
  );
}
