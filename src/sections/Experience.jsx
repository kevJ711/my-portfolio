import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLaptopCode, FaGraduationCap, FaCode, FaBriefcase, FaMicroscope } from 'react-icons/fa';
import { experiences } from '../constants/experiences';

const Experience = () => {
  // Icon mapping - safe way to use icons from data
  const iconMap = {
    laptop: <FaLaptopCode />,
    graduation: <FaGraduationCap />,
    code: <FaCode />,
    briefcase: <FaBriefcase />,
    microscope: <FaMicroscope />,
  };

  return (
    <section id="experience" className="min-h-screen text-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4">Experience</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
            My journey in computer science, research, and software development
          </p>
        </div>
        <div className="relative">
          <VerticalTimeline lineColor="#374151">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1F2937', color: '#fff', border: '1px solid #374151', borderRadius: '12px' }}
                contentArrowStyle={{ borderRight: '7px solid #1F2937' }}
                date={experience.date}
                dateClassName="text-gray-400 font-semibold"
                iconStyle={{ background: experience.color, color: '#fff' }}
                icon={iconMap[experience.icon] || <span>{experience.icon}</span>}
              >
                <h3 className="text-xl font-bold mb-2 text-white">{experience.title}</h3>
                <h4 className="text-lg font-semibold mb-3 text-blue-400">{experience.company}</h4>
                <p className="text-gray-300 leading-relaxed mb-3">{experience.description}</p>
                
                {/* Technologies section */}
                {experience.technologies && (
                  <div className="mb-3">
                    <p className="text-sm text-gray-400 mb-2">Skiils:</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-200 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Links for projeccts section */}
                {experience.link && (
                  <div className="mt-3">
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm underline"
                    >
                      View Project →
                    </a>
                  </div>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience; 