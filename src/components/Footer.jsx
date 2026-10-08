import { useLanguage } from './LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-6 text-center text-sm text-gray-500 bg-white border-t">
      © {new Date().getFullYear()} Makhloufi Ouiam. {t.footer.text}
    </footer>
  )
}

export default Footer