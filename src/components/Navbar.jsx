import { useState } from 'react'
import { useLanguage } from './LanguageContext'

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
]

function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [darkMode, setDarkMode] = useState(true)

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-gray-950 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-white">Makhloufi<span className="text-blue-500">Ouiam</span></h1>

      <ul className="flex gap-8 text-gray-300 text-sm font-medium">
        <li><a href="#hero" className="hover:text-blue-400">{t.nav.home}</a></li>
        <li><a href="#about" className="hover:text-blue-400">{t.nav.about}</a></li>
        <li><a href="#education" className="hover:text-blue-400">{t.nav.education}</a></li>
        <li><a href="#experience" className="hover:text-blue-400">{t.nav.experience}</a></li>
        <li><a href="#projects" className="hover:text-blue-400">{t.nav.projects}</a></li>
        <li><a href="#skills" className="hover:text-blue-400">{t.nav.skills}</a></li>
        <li><a href="#contact" className="hover:text-blue-400">{t.nav.contact}</a></li>
      </ul>

      <div className="flex items-center gap-3">
        <div className="flex bg-gray-900 rounded-lg p-1 gap-1">
          {languages.map((lng) => (
            <button
              key={lng.code}
              onClick={() => setLanguage(lng.code)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                language === lng.code
                  ? 'bg-blue-600 text-white'
                  : 'bg-transparent text-gray-400 hover:text-white'
              }`}
            >
              {lng.label}
            </button>
          ))}
        </div>


        
      </div>
    </nav>
  )
}

export default Navbar