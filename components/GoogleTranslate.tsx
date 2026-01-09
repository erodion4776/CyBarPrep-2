import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}

const GoogleTranslate: React.FC = () => {
  const isLoaded = useRef(false);

  useEffect(() => {
    // Prevent double loading
    if (isLoaded.current) return;
    isLoaded.current = true;

    // 1. Define the callback function
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // 2. Load the script with a slight delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const scriptId = 'google-translate-script';
      // Remove existing script if any to force reload
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = scriptId;
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }, 1000); // 1 second delay

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full">
      <div 
        id="google_translate_element" 
        style={{ minHeight: '40px' }}
        className="translate-widget-container"
      >
        {/* Placeholder text that disappears when Google loads */}
        <span className="text-xs text-slate-400 p-2 font-medium uppercase tracking-widest">Loading...</span>
      </div>
    </div>
  );
};

export default GoogleTranslate;