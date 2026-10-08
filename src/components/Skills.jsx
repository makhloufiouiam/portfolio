import { useLanguage } from './LanguageContext'

function Skills() {
  const { t } = useLanguage()
  const skillCategories = t.skills.categories

  return (
    <section id="skills" className="py-24 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{t.skills.title}</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {skillCategories.map((group, index) => (
          <div key={index}>
            <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-100 border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills