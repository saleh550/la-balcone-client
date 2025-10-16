import React, { useState, useEffect } from "react";

const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);

  // Apply effects to body
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}%`;
    document.body.classList.toggle("high-contrast", highContrast);
    document.body.classList.toggle("grayscale", grayscale);
    document.body.classList.toggle("dyslexia-font", dyslexiaFont);
  }, [fontSize, highContrast, grayscale, dyslexiaFont]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Accessibility options"
      >
        ♿
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="mt-3 w-56 bg-white rounded-lg shadow-xl border border-gray-200 p-3 text-sm animate-fadeIn">
          <h3 className="font-semibold mb-2 text-gray-700">Accessibility</h3>
          <div className="space-y-2">
            <button
              onClick={() => setFontSize((prev) => Math.min(prev + 10, 200))}
              className="w-full py-1.5 bg-gray-100 rounded hover:bg-gray-200"
            >
              🔠 Increase Text
            </button>
            <button
              onClick={() => setFontSize((prev) => Math.max(prev - 10, 80))}
              className="w-full py-1.5 bg-gray-100 rounded hover:bg-gray-200"
            >
              🔡 Decrease Text
            </button>
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full py-1.5 rounded ${
                highContrast ? "bg-yellow-200" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              ⚫ High Contrast
            </button>
            <button
              onClick={() => setGrayscale(!grayscale)}
              className={`w-full py-1.5 rounded ${
                grayscale ? "bg-yellow-200" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              ⚪ Grayscale
            </button>
            <button
              onClick={() => setDyslexiaFont(!dyslexiaFont)}
              className={`w-full py-1.5 rounded ${
                dyslexiaFont
                  ? "bg-yellow-200"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              📖 Dyslexia Font
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityWidget;
