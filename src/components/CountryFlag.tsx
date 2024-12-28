import { memo } from 'react';

interface CountryFlagProps {
  country: 'france' | 'canada';
}

export const CountryFlag = memo(function CountryFlag({ country }: CountryFlagProps) {
  const flagUrl = country === 'france'
    ? 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=100'  // Paris/Tour Eiffel
    : 'https://images.unsplash.com/photo-1519832979-6fa011b87667?auto=format&fit=crop&q=80&w=100';    // Montréal

  return (
    <div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm">
      <img 
        src={flagUrl} 
        alt={country === 'france' ? 'France' : 'Canada'} 
        className="w-full h-full object-cover"
      />
    </div>
  );
});