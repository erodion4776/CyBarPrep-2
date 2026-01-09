import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}

const GoogleTranslate: React.FC = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    // 1. Define the callback function that the Google script expects
    window.googleTranslateElementInit = () => {
      if (isInitialized.current) return;

      try {
        if (window.google && window.google.translate && window.google.translate.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              layout: window.google.translate.TranslateElement.InlineLayout?.SIMPLE || 0,
              autoDisplay: false,
            },
            'google_translate_element'
          );
          isInitialized.current = true;
          
          // Clear any "Loading..." text once initialized
          const container = document.getElementById('google_translate_element');
          if (container) {
            const placeholder = container.querySelector('.translate-placeholder');
            if (placeholder) placeholder.remove();
          }
        }
      } catch (e) {
        console.error("Google Translate Init Error:", e);
      }
    };

    // 2. Load the script
    const scriptId = 'google-translate-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      // Note: Removed 'crossorigin' attribute as it often causes 403/CORS load errors for this specific Google script
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.defer = true;
      
      script.onerror = () => {
        console.error("Google Translate script failed to load. Check network or CSP.");
        const container = document.getElementById('google_translate_element');
        if (container) {
          container.innerHTML = '<span class="text-[10px] text-slate-400 font-bold uppercase p-2">Translate</span>';
        }
      };

      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      // If script is already loaded (e.g. from a previous page view), manually trigger init
      window.googleTranslateElementInit();
    }

  }, []);

  return (
    <div className="flex items-center">
      <div 
        id="google_translate_element" 
        className="translate-widget-container min-h-[40px] flex items-center"
      >
        <span className="translate-placeholder text-[10px] text-slate-400 font-bold uppercase tracking-widest px-2">
          Language
        </span>
      </div>
    </div>
  );
};

export default GoogleTranslate;