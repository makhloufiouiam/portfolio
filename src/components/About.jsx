import { useLanguage } from './LanguageContext'
import Reveal from './Reveal'

function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" className="py-24 px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <Reveal as="p" className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2">{a.label}</Reveal>

        <Reveal delay={100} className="bg-gray-900 rounded-2xl border border-gray-800 shadow-xl shadow-black/20 p-8 transition duration-500 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/15">
          <h2 className="text-2xl font-bold text-white mb-4">{a.title}</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            {a.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <hr className="my-6 border-gray-800" />

          <h3 className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-4">
            {a.skillsLabel}
          </h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {a.skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm font-medium text-gray-300 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
              >
                {skill}
              </span>
            ))}
          </div>

          <hr className="my-6 border-gray-800" />

          <h3 className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-1">
            {a.formationLabel}
          </h3>
          <p className="text-white font-medium mb-6">{a.formation}</p>

          <h3 className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-1">
            {a.universityLabel}
          </h3>
          <p className="text-white font-medium mb-6">{a.university}</p>

          <h3 className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-1">
            {a.locationLabel}
          </h3>
          <p className="text-white font-medium mb-6">{a.location}</p>

          <h3 className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2">
            {a.languagesLabel}
          </h3>
          <div className="flex flex-wrap gap-2">
            {a.languagesList.map((lang, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs font-medium text-gray-300 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
              >
                {lang}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About