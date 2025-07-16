import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-8 py-12">
      <div className="max-w-3xl w-full mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        <div className="flex flex-col items-center justify-center">
          {/* Photo placeholder - commented out for now ##############   */}
          {/* <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-700 flex items-center justify-center mb-6 md:mb-0">
            <span className="text-4xl text-gray-300"></span>
          </div> */}
          <div className="text-center max-w-2xl">
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Hi! I'm Kevin Jijon, a passionate Computer Science Student. I love building things that make a difference, from web apps to AI projects. As a proud Latino and lifelong learner, I'm always enthuastic about learning new things and seeking new challenges.
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base md:text-lg">
              <li> CSU Long Beach, Computer Science Student</li>
              <li> Based in California</li>
              <li> Interests: AI/ML, Web Development, Open Source</li>
              <li> Languages: English, Spanish</li>
              <li> Hobbies: Soccer, Coding, and learning new things</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 