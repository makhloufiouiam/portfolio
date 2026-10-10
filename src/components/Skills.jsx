import { useState } from 'react'
import { useLanguage } from './LanguageContext'
import { getSkillIcon } from './skillIcons'
import { useReveal } from './useReveal'

// Hover glow color per category, cycled
const accents = [
  'hover:border-emerald-400/60 hover:shadow-emerald-500/30',
  'hover:border-sky-400/60 hover:shadow-sky-500/30',
  'hover:border-violet-400/60 hover:shadow-violet-500/30',
  'hover:border-amber-400/60 hover:shadow-amber-500/30',
  'hover:border-pink-400/60 hover:shadow-pink-500/30',
]

function SkillIcon({ name }) {
  const [broken, setBroken] = useState(false)
  const { src, Icon } = getSkillIcon(name)

  if (src && !broken) {
    return <img src={src} alt="" loading="lazy" onError={() => setBroken(true)} className="h-11 w-11 object-contain" />
  }
  const Fallback = Icon || getSkillIcon('').Icon
  return <Fallback className="h-10 w-10 text-gray-300" strokeWidth={1.5} />
}

function SkillTile({ name, accent, index }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${(index % 6) * 60}ms` }}
      className={`group flex h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-gray-800 bg-gray-900/70 px-3 text-center shadow-lg shadow-transparent transition duration-300 hover:-translate-y-1.5 hover:bg-gray-900 ${accent} ${visible ? 'motion-safe:animate-fade-up' : 'opacity-0'}`}
    >
      <div className="transition duration-300 group-hover:scale-115">
        <SkillIcon name={name} />
      </div>
      <span className="text-sm font-medium leading-tight text-gray-300 transition group-hover:text-white">{name}</span>
    </div>
  )
}

function Skills() {
  const { t } = useLanguage()
  const skillCategories = t.skills.categories

  return (
    <section id="skills" className="py-24 px-8 bg-gray-950">
      <h2 className="text-4xl font-bold text-center text-white mb-16">{t.skills.title}</h2>
      <div className="max-w-6xl mx-auto space-y-12">
        {skillCategories.map((group, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold text-white mb-5">{group.category}</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {group.items.map((skill, i) => (
                <SkillTile key={skill} name={skill} index={i} accent={accents[index % accents.length]} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
