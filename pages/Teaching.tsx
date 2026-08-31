import React from 'react';
import { COURSES } from '../constants';
import type { Course } from '../types';

const TEACHING_SECTIONS: Array<{
  id: string;
  level: Course['level'];
  title: string;
}> = [
  { id: 'phd-level', level: 'PhD', title: 'PhD Level' },
  { id: 'graduate-level', level: 'Graduate', title: 'Graduate Level' },
  { id: 'undergraduate-level', level: 'Undergraduate', title: 'Undergraduate Level' },
];

const Teaching: React.FC = () => {
  return (
    <div className="site-page teaching-page">
      <h1 className="sr-only">Teaching</h1>
      <div className="teaching-sections">
        {TEACHING_SECTIONS.map(section => {
          const courses = COURSES.filter(course => course.level === section.level);
          if (courses.length === 0) return null;

          return (
            <section key={section.id} className="teaching-section" aria-labelledby={`${section.id}-heading`}>
              <h2 id={`${section.id}-heading`}>{section.title}</h2>
              <ul className="teaching-list" role="list">
                {courses.map(course => (
                  <li key={course.id} className="teaching-entry">
                    <h3 className="teaching-course-title">{course.title}</h3>
                    <p className="teaching-meta">
                      {course.code} · {course.semester} · Peking University
                    </p>
                    <p className="teaching-description">{course.description}</p>
                    {course.syllabusUrl && (
                      <p className="teaching-download">
                        <a href={course.syllabusUrl} aria-label={`Download syllabus: ${course.title}`}>
                          [Syllabus]
                        </a>
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Teaching;
