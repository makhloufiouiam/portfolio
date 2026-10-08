import { useLanguage } from './LanguageContext'

function Education() {
  const { t } = useLanguage()
  const education = t.education.items

  return (
    <section id="education" className="py-24 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">{t.education.title}</h2>
      <div className="max-w-6xl mx-auto space-y-8">
        {education.map((item, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-lg font-semibold text-gray-800">{item.degree}</h3>
            <p className="text-sm text-gray-500">{item.school} · {item.period}</p>
            {item.details.map((paragraph, i) => (
              <p key={i} className="text-gray-600 mt-2 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education 