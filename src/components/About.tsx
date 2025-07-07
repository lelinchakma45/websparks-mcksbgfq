import React from 'react';
import { Users, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About WebSparks AI
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a cutting-edge technology company dedicated to revolutionizing web development 
              through artificial intelligence. Our mission is to empower developers and businesses 
              to create exceptional digital experiences with unprecedented ease and efficiency.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of expertise in AI and web technologies, we've built a platform that 
              combines the power of machine learning with intuitive design to deliver solutions 
              that exceed expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-3 mx-auto">
                  <Users className="text-indigo-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-3 mx-auto">
                  <Award className="text-indigo-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Awards Won</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-3 mx-auto">
                  <Target className="text-indigo-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-xl mb-6"
                crossOrigin="anonymous"
              />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-indigo-100 leading-relaxed">
                To democratize advanced web development by making AI-powered tools accessible 
                to everyone, from individual developers to enterprise teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
