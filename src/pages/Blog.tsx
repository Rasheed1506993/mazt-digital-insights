import React from 'react';
import { motion } from 'framer-motion';
import { TEXTS } from '../constants/texts';


// A single function to replace the Lucide icons with inline SVGs
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    Calendar: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    ),
    User: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="5"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></svg>
    ),
    ArrowLeft: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
    ),
  };
  return icons[iconName] || null;
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#004A99] to-[#003A7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{TEXTS.blog.title}</h1>
            <p className="text-xl text-[#F9FAFB] max-w-3xl mx-auto">
              {TEXTS.blog.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEXTS.blog.posts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                whileHover={{ translateY: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#6B7280] mb-3">
                    <LucideIcon iconName="Calendar" className="h-4 w-4 ml-2" />
                    <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                    <span className="mx-2">•</span>
                    <LucideIcon iconName="User" className="h-4 w-4 ml-1" />
                    <span>{post.author}</span>
                  </div>

                  <div className="inline-block bg-[#EDC870] text-[#004A99] text-xs px-2 py-1 rounded-full mb-3">
                    {post.category}
                  </div>

                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-[#6B7280] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <button className="flex items-center text-[#004A99] hover:text-[#003A7A] font-medium transition-colors">
                    <span>{TEXTS.blog.readMore}</span>
                    <LucideIcon iconName="ArrowLeft" className="h-4 w-4 mr-2" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">
            {TEXTS.blog.newsletter.title}
          </h2>
          <p className="text-lg text-[#6B7280] mb-8">
            {TEXTS.blog.newsletter.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={TEXTS.blog.newsletter.placeholder}
              className="flex-1 px-4 py-3 border border-[#6B7280]/30 rounded-lg focus:ring-2 focus:ring-[#004A99] focus:border-[#004A99] text-[#1C1C1C]"
            />
            <button className="bg-[#004A99] hover:bg-[#003A7A] text-white font-medium py-3 px-6 rounded-lg transition-colors">
              {TEXTS.blog.newsletter.button}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
