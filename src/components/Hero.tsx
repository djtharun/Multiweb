import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          D J Tharun
        </h1>
        <h2 className="text-xl md:text-3xl mb-8 animate-fade-in-delay">
          AI and ML Engineer
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto px-4 animate-fade-in-delay-2">
          Creating innovative AI solutions that make a difference
        </p>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;