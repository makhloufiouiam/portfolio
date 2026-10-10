import { useLanguage } from './LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-6 text-center text-sm text-gray-500 bg-gray-950 border-t border-gray-800">
      © {new Date().getFullYear()} Makhloufi <span className="text-blue-500">Ouiam</span>. {t.footer.text}
    </footer>
  )
}

export default Footer
