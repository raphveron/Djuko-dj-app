"use client";
import React from 'react'
import { cn } from '../utils/cn'

export type TextAlignment = 'left' | 'center' | 'right'

interface SectionHeaderProps {
  subtitle?: string
  title: string
  description?: string
  align?: TextAlignment
  className?: string
}

const alignmentStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  className,
}) => {
  return (
    <div className={cn(
      'max-w-3xl mx-auto',
      alignmentStyles[align],
      className
    )}>
      {subtitle && (
        <p className={cn(
          'text-sm md:text-base text-secondary-text font-medium',
          'mb-2'
        )}>
          {subtitle}
        </p>
      )}

      <h2 className={cn(
        'text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
        'font-bold text-primary-text',
        'mb-4'
      )}>
        {title}
      </h2>

      {description && (
        <p className={cn(
          'text-base md:text-lg text-secondary-text',
          'max-w-2xl',
          align === 'center' ? 'mx-auto' : '',
          align === 'right' ? 'ml-auto' : ''
        )}>
          {description}
        </p>
      )}
    </div>
  )
} 