"use client";
import React from 'react'
import { cn } from '../utils/cn'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  logo?: React.ReactNode
  description?: string
  columns?: FooterColumn[]
  socialLinks?: { icon: React.ReactNode; href: string }[]
  copyright?: string
  className?: string
}

export const Footer: React.FC<FooterProps> = ({
  logo = <span className="text-2xl font-bold">Logo</span>,
  description = "Your company description goes here. Tell your visitors about your company and what you do.",
  columns = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Documentation", href: "/docs" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ],
  socialLinks = [
    { icon: "Twitter", href: "#" },
    { icon: "Facebook", href: "#" },
    { icon: "LinkedIn", href: "#" },
    { icon: "Instagram", href: "#" },
  ],
  copyright = "© 2024 Your Company. All rights reserved.",
  className,
}) => {
  return (
    <footer className={cn(
      'w-full bg-white border-t border-gray-100',
      'padding-global padding-section-medium',
      className
    )}>
      <div className="container-large">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            {logo}
            <p className="text-sm text-secondary-text">
              {description}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-secondary-text hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-primary-text">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        'text-sm text-secondary-text',
                        'hover:text-primary transition-colors'
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-100">
          <p className="text-sm text-center text-secondary-text">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  )
} 