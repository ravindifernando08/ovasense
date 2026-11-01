
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
}

export default function Button({
  children,
  href,
  variant = 'primary',
}: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-plum text-white hover:bg-[#604257] shadow-lg shadow-plum/15'
      : 'border border-plum/30 text-plum hover:bg-blush'

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum ${styles}`}
    >
      {children}
    </a>
  )
}
