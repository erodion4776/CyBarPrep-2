import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'zh-CN', label: '中文 (Chinese)', flag: '🇨🇳' },
  { code: 'ar', label: 'العربية (Arabic)', flag: '🇸🇦' }
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTranslate = (langCode: string) => {
    // 1. Get the current page URL
    const currentUrl = window.location.href;
    
    // 2. Construct the Google Translate Link
    // This forces Google to open the page in "Translation Mode"
    const translateUrl = `https://translate.google.com/translate?sl=auto&tl=${langCode}&u=${encodeURIComponent(currentUrl)}`;
    
    // 3. Open in new tab (to avoid 404 errors on preview)
    window.open(translateUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus:outline-none"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">Translate</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleTranslate(lang.code)}
                  className="w-full text-left px-4 py-3 text-sm hover:bg-slate-50 flex items-center gap-3 border-b border-slate-50 last:border-0 transition-colors"
                >
                  <span className="text-lg leading-none">{lang.flag}</span>
                  <span className="text-slate-700 font-medium flex-1">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;