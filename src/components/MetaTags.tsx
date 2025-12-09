import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const MetaTags: React.FC = () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    // 更新 HTML lang 属性
    document.documentElement.lang = i18n.language

    // 更新 title
    document.title = t('meta.title')

    // 更新 meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'))
    }

    // 更新 meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t('meta.keywords'))
    }
  }, [i18n.language, t])

  return null
}

export default MetaTags

