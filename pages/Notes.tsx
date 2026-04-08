import React from 'react';
import { NOTES } from '../constants';
import { Calendar, Tag } from 'lucide-react';

const Notes: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-16 text-center sm:text-left">
        <h1 className="text-4xl font-serif font-bold text-academic-900 mb-4">Notes</h1>
        <p className="text-stone-500 text-xl">Informal thoughts on code, data, and economics.</p>
      </div>

      <div className="space-y-16">
        {NOTES.map(note => (
          <article key={note.id} className="flex flex-col gap-3 group">
            <div className="flex items-center gap-3 text-sm text-stone-400 mb-1">
              <div className="flex items-center gap-1.5 font-medium">
                <Calendar size={14} /> {note.date}
              </div>
              <span className="text-stone-300">•</span>
              <div className="flex items-center gap-2">
                {note.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 bg-stone-100 px-2 py-0.5 rounded text-stone-600 text-xs uppercase tracking-wide font-medium">
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-3xl font-serif font-bold text-academic-800 group-hover:text-academic-600 transition-colors cursor-pointer">
              {note.title}
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg text-justify">
              {note.preview}
            </p>
            <div className="mt-2">
              <button className="text-academic-600 font-semibold text-sm hover:text-academic-800 hover:underline underline-offset-4 flex items-center gap-1">
                Read full note &rarr;
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Notes;