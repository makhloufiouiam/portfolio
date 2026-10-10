import { useState } from 'react'
import { AppWindow, ArrowRight, FileText, Globe, Map, Satellite } from 'lucide-react'
import { useLanguage } from './LanguageContext'
import { useReveal } from './useReveal'

// Visual identity per category, in the order categories appear in translations
const themes = [
  { Icon: Satellite, badge: 'bg-emerald-500', glow: 'hover:border-emerald-400/60 hover:shadow-emerald-500/30', placeholder: 'from-emerald-100 via-emerald-50 to-white text-emerald-500/70' },
  { Icon: Map, badge: 'bg-sky-500', glow: 'hover:border-sky-400/60 hover:shadow-sky-500/30', placeholder: 'from-sky-100 via-sky-50 to-white text-sky-500/70' },
  { Icon: AppWindow, badge: 'bg-violet-500', glow: 'hover:border-violet-400/60 hover:shadow-violet-500/30', placeholder: 'from-violet-100 via-violet-50 to-white text-violet-500/70' },
  { Icon: Globe, badge: 'bg-pink-500', glow: 'hover:border-pink-400/60 hover:shadow-pink-500/30', placeholder: 'from-pink-100 via-pink-50 to-white text-pink-500/70' },
]

// Split "A, B (C, D), E" on commas that are not inside parentheses
const splitTech = (tech) => tech.split(/,(?![^(]*\))/).map((s) => s.trim()).filter(Boolean)

function ProjectCard({ project, tag, theme, index }) {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const [ref, visible] = useReveal()
  const { Icon } = theme
  const isLong = project.description.length > 220

  return (
    <article
      ref={ref}
      style={{ animationDelay: `${(index % 3) * 100}ms` }}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg shadow-gray-200/60 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${theme.glow} ${visible ? 'motion-safe:animate-fade-up' : 'opacity-0'}`}
    >
      <div className="relative h-52 shrink-0 overflow-hidden border-b border-gray-100 bg-gray-100">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${theme.placeholder}`}>
            <Icon className="h-20 w-20 transition duration-500 group-hover:scale-110 group-hover:rotate-6" strokeWidth={1.2} />
          </div>
        )}
        <span className={`absolute top-4 start-4 rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-lg ${theme.badge}`}>
          {tag}
        </span>
        {project.inProgress && (
          <span className="absolute top-4 end-4 rounded-lg bg-amber-400 px-3 py-1 text-xs font-bold text-amber-950 shadow-lg">
            {t.projects.inProgressLabel}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug text-gray-900">{project.title}</h3>
        <p className={`mt-3 text-sm leading-relaxed text-gray-600 ${expanded ? '' : 'line-clamp-4'}`}>
          {project.description}
        </p>
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-2 self-start text-xs font-semibold text-blue-600 underline-offset-4 hover:text-blue-700 hover:underline"
          >
            {expanded ? t.projects.readLess : t.projects.readMore}
          </button>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {splitTech(project.tech).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.github || project.report) && (
          <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                {t.projects.githubLabel}
                <ArrowRight className="h-4 w-4 transition group-hover/link:translate-x-1 rtl:rotate-180 rtl:group-hover/link:-translate-x-1" />
              </a>
            )}
            {project.report && (
              <a
                href={project.report}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 transition hover:text-blue-600"
              >
                <FileText className="h-4 w-4" />
                {t.projects.reportLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

function Projects() {
  const { t } = useLanguage()
  const categories = t.projects.categories
  const [filter, setFilter] = useState('all')

  const projects = categories.flatMap((category, catIndex) =>
    filter === 'all' || filter === catIndex
      ? category.items.map((project) => ({ project, tag: category.tag, theme: themes[catIndex % themes.length] }))
      : [],
  )

  const filterButton = (value, label) => (
    <button
      key={value}
      type="button"
      onClick={() => setFilter(value)}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
        filter === value
          ? 'border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-600/30'
          : 'border-gray-200 bg-white text-gray-700 shadow-sm hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/20'
      }`}
    >
      {label}
    </button>
  )

  return (
    <section id="projects" className="py-24 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">{t.projects.title}</h2>

      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {filterButton('all', t.projects.allLabel)}
        {categories.map((category, catIndex) => filterButton(catIndex, category.name))}
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ project, tag, theme }, index) => (
          <ProjectCard key={`${filter}-${project.title}`} project={project} tag={tag} theme={theme} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
