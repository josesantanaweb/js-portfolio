'use client'

import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps = React.ComponentProps<'button'> & {
  variant?: ButtonVariant
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white',
  secondary: 'bg-surface border-stroke text-ink border',
}

export const Button = ({
  className,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'flex h-14 cursor-pointer items-center justify-center gap-3 rounded-full px-6 font-semibold uppercase',
        variantClass[variant],
        className,
      )}
      {...props}
    />
  )
}
