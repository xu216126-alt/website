import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 max-w-5xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-slate-900 tracking-tight">
              {title}
              <span className="text-geek-500">.</span>
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-slate-500 font-mono text-sm uppercase tracking-wider">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};