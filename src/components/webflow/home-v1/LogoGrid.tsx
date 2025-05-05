import React from 'react';
import Image from 'next/image';

interface LogoGridProps {
  logos: {
    src: string;
    alt: string;
  }[];
}

export const LogoGrid: React.FC<LogoGridProps> = ({ logos }) => {
  // Utiliser des images existantes au lieu des SVG
  const existingLogos = [
    '/images/Group-1321319633_1Group 1321319633.webp',
    '/images/Group-1321319632_1-p-130x130q80.png',
    '/images/Group-1321319633_2Group 1321319633.webp'
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="logos_wrap">
          <div className="logos_flex">
            <div className="logos_group">
              {existingLogos.map((src, index) => (
                <div key={index} className="logos">
                  <Image
                    src={src}
                    alt={`Logo ${index + 1}`}
                    width={120}
                    height={120}
                    sizes="(max-width: 768px) 50vw, 120px"
                    loading="lazy"
                    className="logo w-auto h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 