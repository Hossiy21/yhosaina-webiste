'use client'

import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="w-full">
      <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-end">
        <ThemeToggle />
      </div>
    </header>
  )
}
