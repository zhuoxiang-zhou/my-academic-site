import React from 'react';
import { COURSES } from '../constants';

const Teaching: React.FC = () => {
  return (
    <div className="site-page teaching-page">
      <h1 className="sr-only">Teaching</h1>
      <section className="teaching-section" aria-labelledby="courses-heading">
        <h2 id="courses-heading">Courses</h2>
        <ul className="teaching-list" role="list">
          {COURSES.map(course => (
            <li key={course.id} className="teaching-entry">
              <h3 className="teaching-course-title">{course.title}</h3>
              <p className="teaching-meta">
                {course.code} · {course.semester} · {course.level} Level
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
    </div>
  );
};

export default Teaching;
