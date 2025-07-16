const Contact = () => {
    const contactLinks = [
      {
        label: "GitHub",
        href: "https://github.com/kevJ711",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/kevinjijon",
      },
      {
        label: "Email",
        href: "mailto:kevinjijon0@gmail.com",
      },
      {
        label: "Resume",
        href: "/Kevin_Jijon_Resume.pdf",
      },
    ];
  
    return (
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">Contact Me</h2>
        <div className="flex flex-col gap-6 sm:gap-8 max-w-md mx-auto relative z-10">
          {contactLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl md:text-3xl hover:text-blue-400 transition-colors duration-300 text-center cursor-pointer relative z-10 font-medium"
              style={{ pointerEvents: 'auto' }}
              onMouseEnter={(e) => e.stopPropagation()}
            >
              {label}
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default Contact;
  