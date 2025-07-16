// components/SectionWrapper.jsx
import { useRef, useEffect } from "react";

const SectionWrapper = ({ id, onVisible, children }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(id);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [id, onVisible]);

  return (
    <section ref={ref} id={id} className="min-h-screen w-full overflow-hidden relative">
        {children}
    </section>
  );
};

export default SectionWrapper;
