import React from 'react';

interface Statistic {
  value: string;
  label: string;
}

interface StatisticsSectionProps {
  title: string;
  description: string;
  statistics: Statistic[];
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  title,
  description,
  statistics
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{title}</h2>
          <p className="text-lg text-secondary-text">{description}</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <div key={index} className="stat_card">
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <p className="mt-2 text-secondary-text">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 