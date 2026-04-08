import React from 'react';
import { COURSES } from '../constants';
import { Book } from 'lucide-react';

const Teaching: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-academic-900 mb-4">Teaching</h1>
        <p className="text-stone-500 text-xl">Current and past courses taught at Peking University.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {COURSES.map(course => (
          <div key={course.id} className="bg-white rounded-lg border border-stone-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-academic-100 text-academic-800 text-xs font-bold uppercase rounded tracking-wide">
                  {course.code}
                </span>
                <span className="text-stone-300">|</span>
                <span className="text-stone-500 text-sm font-medium">{course.semester}</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-academic-900 mb-2">{course.title}</h2>
              <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-stone-100 text-stone-500 mb-4">
                {course.level} Level
              </span>
              <p className="text-stone-600 leading-relaxed">
                {course.description}
              </p>
            </div>
            
            <div className="mt-auto pt-6 border-t border-stone-100">
              {course.syllabusUrl ? (
                <a 
                  href={course.syllabusUrl} 
                  className="inline-flex items-center gap-2 text-sm font-medium text-academic-700 hover:text-academic-900 transition-colors"
                >
                  <Book size={18} /> Download Syllabus
                </a>
              ) : (
                <span className="text-stone-400 text-sm italic">Syllabus available soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teaching;