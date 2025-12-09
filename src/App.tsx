import React from 'react'
import { Layout, ConfigProvider } from 'antd'
import { useTranslation } from 'react-i18next'
import zhCN from 'antd/locale/zh_CN'
import zhTW from 'antd/locale/zh_TW'
import enUS from 'antd/locale/en_US'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import TechStack from './components/TechStack'
import Screenshots from './components/Screenshots'
import QuickStart from './components/QuickStart'
import Footer from './components/Footer'
import MetaTags from './components/MetaTags'
import './App.css'

const App: React.FC = () => {
  const { i18n } = useTranslation()

  // 根据当前语言设置 Ant Design 的 locale
  const getAntdLocale = () => {
    const lang = i18n.language || 'en'
    if (lang.startsWith('zh-CN')) return zhCN
    if (lang.startsWith('zh-TW') || lang.startsWith('zh-HK')) return zhTW
    return enUS
  }

  return (
    <ConfigProvider locale={getAntdLocale()}>
      <MetaTags />
      <Layout className="app-layout">
        <Header />
        <Layout.Content>
          <Hero />
          <Features />
          <TechStack />
          <Screenshots />
          <QuickStart />
        </Layout.Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  )
}

export default App

