import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
              A professional who specializes in developing and deploying AI-driven solutions and algorithms that allow systems and machines to simulate human intelligence and learn from data. These engineers typically work with a wide range of techniques, from traditional rule-based systems to advanced machine learning models and deep learning networks, to solve complex real-world problems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in tech has led me to work with various technologies and frameworks, 
                always staying at the forefront of AI trends and best practices.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="Developer workspace with laptop and coffee"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;