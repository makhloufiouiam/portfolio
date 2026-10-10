import { useLanguage } from './LanguageContext'

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
]

const links = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'contact']
const navKeys = { hero: 'home', about: 'about', education: 'education', experience: 'experience', projects: 'projects', skills: 'skills', contact: 'contact' }

function Navbar() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-gray-950/85 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30 sticky top-0 z-50">
      <a href="#hero" className="group text-xl font-bold text-white transition">
        Makhloufi<span className="text-blue-500 transition group-hover:text-blue-400 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">Ouiam</span>
      </a>

      <ul className="flex gap-8 text-gray-300 text-sm font-medium">
        {links.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="relative py-1 transition hover:text-white after:absolute after:-bottom-0.5 after:start-0 after:h-0.5 after:w-0 after:rounded-full after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.nav[navKeys[id]]}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <div className="flex bg-gray-900 rounded-lg p-1 gap-1 border border-gray-800">
          {languages.map((lng) => (
            <button
              key={lng.code}
              onClick={() => setLanguage(lng.code)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition duration-300 ${
                language === lng.code
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-gray-800'
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
