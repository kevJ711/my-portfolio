import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPlay, FaTimes, FaFileAlt } from "react-icons/fa";

const BubbleTransition = ({ isActive, onNavigateToContact }) => {
  const [phase, setPhase] = useState("hidden");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setPhase("hidden");
      setIsExpanded(false);
      return;
    }

    const animate = async () => {
      setPhase("rise");
      await new Promise((r) => setTimeout(r, 300));
      setPhase("expand");
      await new Promise((r) => setTimeout(r, 500));
      setIsExpanded(true);
    };

    animate();
  }, [isActive]);

  // Don't render anything if not active
  if (!isActive) {
    return null;
  }

  const handleToggle = () => {
    if (isExpanded) {
      // If currently expanded (showing X), collapse to play button
      setIsExpanded(false);
    } else {
      // If showing play button, navigate to contact
      if (onNavigateToContact) {
        onNavigateToContact();
      }
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none px-4">
      <div className="relative flex items-center justify-center pointer-events-auto">
        {/* Initial play button - moves to right position */}
        <AnimatePresence>
          {phase === "hidden" && (
            <motion.div
              key="bubble"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-lg cursor-pointer"
              initial={{ scale: 0, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: -20, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <FaPlay size={14} className="sm:w-4 sm:h-4" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Play button that moves to right and transforms */}
        <AnimatePresence>
          {(phase === "expand" || phase === "rise") && (
            <motion.div
              key="moving-play"
              className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-lg cursor-pointer"
              initial={{ x: 60, scale: 1, boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.7)" }}
              animate={{ 
                x: [60, 60, 100], 
                scale: 1,
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.7)",
                  "0 0 0 10px rgba(59, 130, 246, 0.4)",
                  "0 0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              exit={{ x: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.6,
                x: {
                  times: [0, 0.5, 1],
                  duration: 0.6
                },
                boxShadow: {
                  duration: 0.4,
                  times: [0, 0.5, 1]
                }
              }}
              onClick={handleToggle}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isExpanded ? 0 : 90 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? <FaTimes size={14} className="sm:w-4 sm:h-4" /> : <FaPlay size={14} className="sm:w-4 sm:h-4" />}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded containers - horizontal layout */}
        <AnimatePresence>
          {phase === "expand" && (
            <motion.div
              key="expanded-container"
              className="flex items-center gap-8 justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              {/* Social icons container */}
              <motion.div
                className="flex gap-3 sm:gap-4 md:gap-5 bg-gray-800 p-2 rounded-xl border border-gray-700"
                initial={{ x: -60, opacity: 0, scale: 0.95 }}
                animate={{ x: -60, opacity: 1, scale: 1 }}
                transition={{ delay: 0.50, duration: 0.1 }}
              >
                <motion.a
                  href="https://github.com/kevJ711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-all duration-300 floating-icon"
                  initial={{ scale: 0, boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.7)" }}
                  animate={{ 
                    scale: 1, 
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.7)",
                      "0 0 0 10px rgba(59, 130, 246, 0.4)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ 
                    delay: 0.1, 
                    duration: 0.3,
                    boxShadow: {
                      delay: 0.1,
                      duration: 0.4,
                      times: [0, 0.5, 1]
                    }
                  }}
                >
                  <FaGithub size={16} className="sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/kevinjijon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-all duration-300 floating-icon"
                  initial={{ scale: 0, boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.7)" }}
                  animate={{ 
                    scale: 1, 
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.7)",
                      "0 0 0 10px rgba(59, 130, 246, 0.4)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ 
                    delay: 0.2, 
                    duration: 0.3,
                    boxShadow: {
                      delay: 0.2,
                      duration: 0.4,
                      times: [0, 0.5, 1]
                    }
                  }}
                >
                  <FaLinkedin size={16} className="sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a
                  href="mailto:kevinjijon0@gmail.com"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-all duration-300 floating-icon"
                  initial={{ scale: 0, boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.7)" }}
                  animate={{ 
                    scale: 1, 
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.7)",
                      "0 0 0 10px rgba(59, 130, 246, 0.4)",
                      "0 0 0 0 rgba(59, 72, 246, 0)"
                    ]
                  }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.3,
                    boxShadow: {
                      delay: 0.3,
                      duration: 0.4,
                      times: [0, 0.5, 1]
                    }
                  }}
                >
                  <FaEnvelope size={16} className="sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a
                  href="/Kevin.Jijon_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-all duration-300 floating-icon"
                  initial={{ scale: 0, boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.7)" }}
                  animate={{ 
                    scale: 1, 
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.7)",
                      "0 0 0 10px rgba(59, 130, 246, 0.4)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ 
                    delay: 0.4, 
                    duration: 0.3,
                    boxShadow: {
                      delay: 0.4,
                      duration: 0.4,
                      times: [0, 0.5, 1]
                    }
                  }}
                >
                  <FaFileAlt size={16} className="sm:w-5 sm:h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BubbleTransition;
