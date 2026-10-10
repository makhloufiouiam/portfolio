import { useLanguage } from './LanguageContext'
import Reveal from './Reveal'

function Experience() {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <section id="experience" className="py-24 px-8 bg-gray-950">
      <Reveal as="h2" className="text-4xl font-bold text-center text-white mb-12">{e.title}</Reveal>
      <div className="max-w-6xl mx-auto space-y-6">
        {e.items.map((item, index) => (
          <Reveal
            key={index}
            delay={index * 100}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-blue-400 mb-3">{item.place} — {item.period}</p>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Experience
