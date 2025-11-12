import React, { useEffect, useState } from "react";
import { useLanguage } from "../../../store/useLanguage";

interface FadeOnMountProps {
  children: React.ReactNode;
  index?: number; // optional for delay like AOS
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-x"; // "fade-x" means auto based on language
}

const FadeOnMount: React.FC<FadeOnMountProps> = ({
  children,
  index = 0,
  animation = "fade-x", // default: language-based horizontal fade
}) => {
  const { currentLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // small delay to trigger transition
    return () => clearTimeout(timer);
  }, []);

  // Base styles
  let hiddenClass = "opacity-0";
  let visibleClass = "opacity-100";

  // Direction logic
  switch (animation) {
    case "fade-up":
      hiddenClass += " translate-y-5";
      visibleClass += " translate-y-0";
      break;
    case "fade-down":
      hiddenClass += " -translate-y-5";
      visibleClass += " translate-y-0";
      break;
    case "fade-left":
      hiddenClass += " translate-x-5";
      visibleClass += " translate-x-0";
      break;
    case "fade-right":
      hiddenClass += " -translate-x-5";
      visibleClass += " translate-x-0";
      break;
    case "fade-x": // language-based
      hiddenClass +=
        currentLanguage === "en" ? "-translate-x-5" : "translate-x-5";
      visibleClass += " translate-x-0";
      break;
  }

  const delay = `${(index + 1) * 200}ms`;

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClass : hiddenClass
      }`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default FadeOnMount;
