import React, { useState } from 'react'

const Button = ({text, className, id}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsPressed(true);
    
    setTimeout(() => setIsPressed(false), 150);

    const target = document.getElementById('experience');
    if(target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <button 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${className ?? ""} 
        px-6 py-3 rounded-lg bg-white hover:bg-gray-100 
        text-gray-900 font-semibold transition-all duration-300 
        transform hover:scale-105 active:scale-95
        flex items-center gap-2 group
        border border-gray-300 hover:border-blue-400
      `}
    >
      <span>{text}</span>
      <svg 
        className={`w-4 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </button>
  )
}

export default Button
