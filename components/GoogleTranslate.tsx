import React, { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    // 1. Define the global callback function that Google looks for
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

    // 2. Load the script only if it doesn't exist yet
    const scriptId = 'google-translate-script';
    const existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script is already loaded, manually trigger init if google object exists
      if (window.google && window.google.translate) {
        window.googleTranslateElementInit();
      }
    }
  }, []);

  return (
    <div 
      id="google_translate_element" 
      className="translate-widget-container"
      style={{ minHeight: '40px', display: 'block' }} // Force it to have space
    ></div>
  );
};

export default GoogleTranslate;