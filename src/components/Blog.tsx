import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog post cards */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Coding on laptop" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Getting Started with Web Development</h3>
              <p className="text-gray-600 mb-4">Learn the fundamentals of modern web development and start building your first website.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">5 min read</span>
                <button className="text-blue-600 hover:text-blue-800">Read More →</button>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
              alt="Code on screen" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Modern JavaScript Practices</h3>
              <p className="text-gray-600 mb-4">Explore the latest JavaScript features and best practices for modern web applications.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">7 min read</span>
                <button className="text-blue-600 hover:text-blue-800">Read More →</button>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" 
              alt="Laptop workspace" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Responsive Design Tips</h3>
              <p className="text-gray-600 mb-4">Master the art of creating responsive websites that work seamlessly across all devices.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">6 min read</span>
                <button className="text-blue-600 hover:text-blue-800">Read More →</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;