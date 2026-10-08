import { useLanguage } from './LanguageContext' // ajustez le chemin selon votre projet

function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative bg-gray-950 overflow-hidden min-h-screen flex flex-col justify-center px-8 py-12">
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full -top-20 -right-20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
        <div className="flex-1 text-center md:text-left">
          <p className="text-blue-400 font-medium mb-2">{t.hero.greeting}</p>
          <h2 className="text-5xl font-bold text-white mb-2">{t.hero.name}</h2>
          <h3 className="text-3xl font-semibold text-blue-500 mb-6">{t.hero.role}</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto md:mx-0 mb-8">
            {t.hero.description}
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full">
              {t.hero.projectsBtn}
            </a>
            <a href="#contact" className="border border-gray-600 hover:border-blue-500 text-white font-medium px-6 py-2.5 rounded-full">
              {t.hero.contactBtn}
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-82 h-82 md:w-95 md:h-95 rounded-full border-4 border-blue-600/40 flex items-center justify-center overflow-hidden">
            <img
              src="/images/photo.png"
              alt={t.hero.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full mt-10 py-8 bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-600/10 rounded-full top-1/2 left-1/4 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute w-72 h-72 bg-blue-600/10 rounded-full top-1/2 right-1/4 -translate-y-1/2 blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto text-center px-8">
          <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
            {t.hero.quote}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero