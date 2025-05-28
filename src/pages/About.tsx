
import React from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';
import { TEXTS } from '../constants/texts';

const About = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{TEXTS.about.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {TEXTS.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{TEXTS.about.sectionTitle}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {TEXTS.about.description1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {TEXTS.about.description2}
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{TEXTS.about.statsTitle}</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{TEXTS.about.stats.clients.number}</div>
                  <div className="text-gray-600">{TEXTS.about.stats.clients.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{TEXTS.about.stats.experience.number}</div>
                  <div className="text-gray-600">{TEXTS.about.stats.experience.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{TEXTS.about.stats.quality.number}</div>
                  <div className="text-gray-600">{TEXTS.about.stats.quality.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{TEXTS.about.stats.support.number}</div>
                  <div className="text-gray-600">{TEXTS.about.stats.support.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-lg ml-4">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{TEXTS.about.vision.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {TEXTS.about.vision.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-lg ml-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{TEXTS.about.mission.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {TEXTS.about.mission.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{TEXTS.about.valuesTitle}</h2>
            <p className="text-lg text-gray-600">{TEXTS.about.valuesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{TEXTS.about.values.excellence.title}</h3>
              <p className="text-gray-600">
                {TEXTS.about.values.excellence.description}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{TEXTS.about.values.collaboration.title}</h3>
              <p className="text-gray-600">
                {TEXTS.about.values.collaboration.description}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{TEXTS.about.values.commitment.title}</h3>
              <p className="text-gray-600">
                {TEXTS.about.values.commitment.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
