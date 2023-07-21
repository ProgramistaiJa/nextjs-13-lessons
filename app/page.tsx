import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>Hello World!</h1>
      <Link href="/about">Go to About Page</Link>
    </main>
  )
}
