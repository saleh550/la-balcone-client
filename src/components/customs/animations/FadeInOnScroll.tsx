
import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../../store/useLanguage";

interface FadeInProps {
  children: React.ReactNode;

}

const FadeInOnScroll: React.FC<FadeInProps> = ({ children }) => {
    const { currentLanguage } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Define fade direction
  const direction =
    currentLanguage === "en"
      ? "translate-x-10 opacity-0"
      : "-translate-x-10 opacity-0";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-x-0 opacity-100" : direction
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
