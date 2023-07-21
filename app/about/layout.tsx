import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'About',
    description: 'About Next.js',
  }

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
        <nav>About NavBar</nav>
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            {children}
        </main>
    </>
  )
}
