import { useLanguage } from './LanguageContext'

function Experience() {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <section id="experience" className="py-24 px-8 bg-gray-950">
      <h2 className="text-4xl font-bold text-center text-white mb-12">{e.title}</h2>
      <div className="max-w-6xl mx-auto space-y-6">
        {e.items.map((item, index) => (
          <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-blue-400 mb-3">{item.place} — {item.period}</p>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience