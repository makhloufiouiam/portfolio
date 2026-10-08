import { useLanguage } from './LanguageContext'

function Projects() {
  const { t } = useLanguage()
  const categories = t.projects.categories

  return (
    <section id="projects" className="py-24 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">{t.projects.title}</h2>

      <div className="max-w-5xl mx-auto space-y-16">
        {categories.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6 border-l-4 border-blue-600 pl-4">
              {category.name}
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {category.items.map((project, index) => (
                <div key={index} className="relative bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-blue-600 transition">
                  {project.inProgress && (
                    <span className="absolute top-4 right-4 text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {t.projects.inProgressLabel}
                    </span>
                  )}

                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  )}

                  <h4 className="text-xl font-semibold text-gray-800 mb-2 pr-20">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <span className="text-xs font-medium text-blue-600">{project.tech}</span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Voir sur GitHub
                    </a>
                  )}

                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15h6M9 11h2" />
                      </svg>
                      Voir le rapport
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects