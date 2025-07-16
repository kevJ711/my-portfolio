import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';
import { terminalCommands, skillsData } from '../constants/terminalData.js';

export default function TerminalSkills() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const getSyntaxClass = (type) => {
    switch (type) {
      case 'comment': return 'text-gray-500';
      case 'keyword': return 'text-purple-400';
      case 'string': return 'text-green-400';
      case 'operator': return 'text-yellow-400';
      case 'array': return 'text-blue-400';
      default: return 'text-white';
    }
  };

  const handleYellowButtonClick = () => {
    setIsMinimized(true);
  };

  const handleGreenButtonClick = () => {
    if (isMinimized) {
      setIsMinimized(false);
    }
  };

  return (
    <div className="absolute top-1/2 right-2 sm:right-4 md:right-8 lg:right-12 xl:right-16 transform -translate-y-1/2 z-20">
      <div 
        className={`
          bg-[#0f0f0f] text-[#39ff14] font-mono rounded-xl shadow-2xl border border-gray-700
          transition-all duration-500 ease-in-out
          ${isMinimized 
            ? 'w-64 sm:w-72 md:w-80 h-48 sm:h-56 md:h-72' 
            : 'w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[580px]'
          }
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Terminal Window Bar */}
        <div className="bg-gray-800 rounded-t-xl p-4 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div 
              className="w-4 h-4 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors"
              onClick={handleYellowButtonClick}
              title="Minimize"
            ></div>
            <div 
              className={`w-4 h-4 rounded-full transition-colors ${
                isMinimized 
                  ? 'bg-green-500 cursor-pointer hover:bg-green-400' 
                  : 'bg-green-700 cursor-not-allowed'
              }`}
              onClick={handleGreenButtonClick}
              title={isMinimized ? "Maximize" : "Already maximized"}
            ></div>
          </div>
          <div className="text-sm text-gray-400">kevin@portfolio ~/terminal</div>
        </div>

        {/* Terminal Content - Scrollable */}
        <div className={`p-6 transition-all duration-500 ${isMinimized ? 'h-56' : 'h-[520px]'}`}>
          <div className={`h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-2`}>
            {/* Command History */}
            <div className="space-y-2 mb-4">
              {terminalCommands.slice(0, isMinimized ? 2 : 6).map((cmd, index) => (
                <div key={index} className="text-sm">
                  <span className="text-[#39ff14]">$</span> {cmd}
                </div>
              ))}
            </div>

            {/* Current Command Line */}
            <div className="flex items-center mb-4">
              <span className="text-[#39ff14] mr-2 text-lg">$</span>
              <Typewriter
                words={terminalCommands.slice(isMinimized ? 2 : 6)}
                loop={true}
                cursor={showCursor}
                cursorStyle="_"
                typeSpeed={isHovered ? 20 : 50}
                deleteSpeed={30}
                delaySpeed={isHovered ? 500 : 1500}
                onType={() => setIsTyping(true)}
                onDelete={() => setIsTyping(false)}
              />
            </div>

            {/* Skills Displays */}
            <div className="p-4 bg-gray-900 rounded border border-gray-700">
              <div className="text-sm text-gray-400 mb-2">skills.js</div>
              <div className="space-y-1 text-sm">
                {skillsData.map((item, index) => (
                  <div key={index} className={getSyntaxClass(item.type)}>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Display */}
            <div className="mt-4 p-4 bg-gray-900 rounded border border-gray-700">
              <div className="text-sm text-gray-400 mb-2">experience.js</div>
              <div className="space-y-1 text-sm">
                <div className="text-purple-400">const</div>
                <div className="text-green-400">experience</div>
                <div className="text-yellow-400">=</div>
                <div className="text-blue-400">{"{"}</div>
                <div className="text-gray-500 ml-4">// Education</div>
                <div className="text-green-400 ml-4">university:</div>
                <div className="text-blue-400 ml-4">"CSU Long Beach",</div>
                <div className="text-green-400 ml-4">major:</div>
                <div className="text-blue-400 ml-4">"Computer Science",</div>
                <div className="text-green-400 ml-4">graduation:</div>
                <div className="text-blue-400 ml-4">"2027",</div>
                <div className="text-gray-500 ml-4">// Projects</div>
                <div className="text-green-400 ml-4">projects:</div>
                <div className="text-blue-400 ml-4">["Portfolio", "ML Models", "Web Apps"],</div>
                <div className="text-gray-500 ml-4">// Interests</div>
                <div className="text-green-400 ml-4">interests:</div>
                <div className="text-blue-400 ml-4">["AI/ML", "Web Dev", "Open Source"]</div>
                <div className="text-blue-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Effects for terminal */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-5"></div>
        </div>
      </div>
    </div>
  );
}
