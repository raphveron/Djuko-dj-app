"use client";
import React from 'react'
import { cn } from '../utils/cn'
import { Button, ButtonProps } from './Button'
import Image from 'next/image'

export interface CardProps {
  title?: string
  description?: string
  image?: string
  footer?: React.ReactNode
  variant?: 'default' | 'elevated' | 'flat'
  className?: string
  children?: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  footer,
  variant = 'default',
  className,
  children
}) => {
  return (
    <div
      className={cn(
        'rounded-lg overflow-hidden',
        'transition-all duration-300',
        {
          'bg-white shadow-md hover:shadow-lg': variant === 'default',
          'bg-white shadow-lg hover:shadow-xl': variant === 'elevated',
          'bg-white': variant === 'flat'
        },
        className
      )}
    >
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title || 'Card image'}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6 space-y-4">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-600">
            {description}
          </p>
        )}
        
        {children}
        
        {footer && (
          <div className="pt-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

// Helper component for card actions
interface CardActionProps extends Omit<ButtonProps, 'children'> {
  label: string
}

export const CardAction: React.FC<CardActionProps> = ({ label, ...props }) => {
  return (
    <Button variant="text" size="sm" {...props}>
      {label}
    </Button>
  )
} 