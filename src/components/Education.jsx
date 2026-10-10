import { useLanguage } from './LanguageContext'
import Reveal from './Reveal'

function Education() {
  const { t } = useLanguage()
  const education = t.education.items

  return (
    <section id="education" className="py-24 px-8 bg-white">
      <Reveal as="h2" className="text-4xl font-bold text-center text-gray-800 mb-12">{t.education.title}</Reveal>
      <div className="max-w-6xl mx-auto space-y-6">
        {education.map((item, index) => (
          <Reveal
            key={index}
            delay={index * 100}
            className="rounded-xl border border-gray-100 border-s-4 border-s-blue-600 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-blue-500/15"
          >
            <h3 className="text-lg font-semibold text-gray-800">{item.degree}</h3>
            <p className="text-sm text-gray-500">{item.school} · {item.period}</p>
            {item.details.map((paragraph, i) => (
              <p key={i} className="text-gray-600 mt-2 leading-relaxed">{paragraph}</p>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Education
