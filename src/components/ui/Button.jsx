import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'group inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-cyan-300 text-slate-950 shadow-[0_18px_50px_rgba(103,232,249,0.28)] hover:bg-cyan-200',
        secondary:
          'border border-white/12 bg-white/[0.06] text-slate-100 backdrop-blur hover:border-cyan-300/60 hover:bg-cyan-300/10',
        ghost: 'text-slate-200 hover:bg-white/[0.06] hover:text-white',
        purple:
          'bg-violet-500 text-white shadow-[0_18px_50px_rgba(124,58,237,0.34)] hover:bg-violet-400',
      },
      size: {
        default: 'px-5 py-3',
        sm: 'min-h-9 px-3 py-2 text-xs',
        icon: 'h-11 w-11 min-h-0 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export const Button = forwardRef(
  ({ className, variant, size, as: Component = 'button', children, showArrow = false, ...props }, ref) => (
    <Component ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </Component>
  ),
)

Button.displayName = 'Button'
