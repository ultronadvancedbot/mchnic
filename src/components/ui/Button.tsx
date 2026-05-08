import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'white' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#454ADE] text-white hover:bg-[#3A3FB8] border-transparent',
  outline:
    'bg-transparent text-[#454ADE] border-[#454ADE] hover:bg-[#454ADE] hover:text-white',
  white:
    'bg-white text-[#454ADE] border-white hover:bg-white/90',
  ghost:
    'bg-transparent text-[#0D0D0D] border-transparent hover:bg-[#F8F8FF]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, children, className, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 font-semibold border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer',
      variantStyles[variant],
      sizeStyles[size],
      className
    )

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
