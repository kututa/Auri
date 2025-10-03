import React from 'react'
import ProductDesign from '@/components/ProductDesign/ProductDesign'

export const metadata = {
  title: 'Product — Auri',
}

export default function ProductPage() {
  return (
    <main className="px-8 py-12 max-w-6xl mx-auto">
      <ProductDesign />
    </main>
  )
}
