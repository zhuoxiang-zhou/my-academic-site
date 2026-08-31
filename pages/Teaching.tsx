import React from 'react';
import { COURSES } from '../constants';
import { Book } from 'lucide-react';

const Teaching: React.FC = () => {
  return (
    <div className="site-page teaching-page">
      <div className="mb-8">
        <h1 className="page-heading text-4xl font-medium text-academic-900 mb-4">Teaching</h1>
        <p className="text-stone-500 text-base sm:text-lg">Current and past courses taught at Peking University.</p>
      </div>

      <div className="teaching-list">
        {COURSES.map(course => (
          <article key={course.id}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium uppercase tracking-wide text-academic-700">
                  {course.code}
                </span>
                <span className="text-stone-300">|</span>
                <span className="text-stone-500 text-sm font-medium">{course.semester}</span>
              </div>
              <h2 className="text-2xl font-medium text-academic-900 mb-2">{course.title}</h2>
              <span className="inline-block text-xs font-medium text-stone-500 mb-4">
                {course.level} Level
              </span>
              <p className="text-stone-600 leading-relaxed">
                {course.description}
              </p>
            </div>

            {course.syllabusUrl && (
              <a
                href={course.syllabusUrl}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-academic-700 hover:text-academic-900 transition-colors"
              >
                <Book size={18} /> Download Syllabus
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Teaching;
