import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zhCN from '../locales/zh-CN/common.json'
import zhTW from '../locales/zh-TW/common.json'
import en from '../locales/en/common.json'

/**
 * 检测系统语言
 * 支持的语言：zh-CN, zh-TW, en
 * 如果不支持，默认使用 en
 */
const detectSystemLanguage = (): string => {
  const systemLanguage = navigator.language || navigator.languages?.[0] || 'en'
  const lang = systemLanguage.toLowerCase()
  
  if (lang.startsWith('zh')) {
    if (lang.includes('tw') || lang.includes('hk') || lang.includes('mo')) {
      return 'zh-TW'
    }
    return 'zh-CN'
  }
  return 'en'
}

/**
 * 检测并返回应该使用的语言
 * 优先级：localStorage > 系统语言 > 默认语言（en）
 */
const detectLanguage = (): string => {
  // 从 localStorage 读取用户设置的语言
  const savedLanguage = localStorage.getItem('i18n_language') || localStorage.getItem('i18nextLng')
  if (savedLanguage && ['zh-CN', 'zh-TW', 'en'].includes(savedLanguage)) {
    return savedLanguage
  }
  
  // 如果没有保存的语言，使用系统语言
  return detectSystemLanguage()
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'zh-CN': {
        translation: zhCN
      },
      'zh-TW': {
        translation: zhTW
      },
      'en': {
        translation: en
      }
    },
    lng: detectLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React 已经转义了
    }
  })

export default i18n

