import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} />
              <span>Powered by Advanced AI Technology</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Amazing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Applications</span>
            <br />
            with WebSparks AI
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of web development with our AI-powered platform. 
            Create stunning, responsive applications with cutting-edge technology and intuitive design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>Start Building</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-16">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern web development workspace"
                className="w-full h-64 md:h-80 object-cover rounded-xl"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
