import React from 'react';
import { Code, Zap, Shield, Smartphone, Globe, Cpu } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-lg mb-6 mx-auto">
        <div className="text-indigo-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: "Clean Code",
      description: "Write maintainable, scalable code with modern best practices and industry standards."
    },
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technologies for blazing fast user experiences."
    },
    {
      icon: <Shield size={32} />,
      title: "Secure by Design",
      description: "Built-in security features and best practices to protect your applications and data."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile First",
      description: "Responsive design that works perfectly across all devices and screen sizes."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Ready",
      description: "Internationalization support and CDN integration for worldwide accessibility."
    },
    {
      icon: <Cpu size={32} />,
      title: "AI Powered",
      description: "Leverage artificial intelligence to enhance development workflow and user experience."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build exceptional web applications with confidence and efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
