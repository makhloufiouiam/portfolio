import { useLanguage } from './LanguageContext'

function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 px-8 bg-gray-950 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">{t.contact.title}</h2>
      <p className="text-gray-400 mb-8">
        {t.contact.text}
      </p>
      <div className="flex justify-center gap-8 text-blue-400 font-medium">
        <a href="mailto:ton.email@example.com" className="flex items-center gap-2 hover:text-blue-300">
          {t.contact.email}
        </a>
        <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-300">
          {t.contact.linkedin}
        </a>
        <a href="https://github.com/ton-profil" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-300">
          {t.contact.github}
        </a>
      </div>
    </section>
  )
}

export default Contact