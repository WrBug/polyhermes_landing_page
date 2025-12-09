import React from 'react'
import { Button, Typography } from 'antd'
import { GithubOutlined, RocketOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import './Hero.css'

const { Title, Paragraph } = Typography

const Hero: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-badge">{t('hero.badge')}</div>
        <Title level={1} className="hero-title">
          {t('hero.title')}
        </Title>
        <Paragraph className="hero-description">
          {t('hero.description')}
        </Paragraph>
        <div className="hero-actions">
          <Button
            type="primary"
            size="large"
            icon={<RocketOutlined />}
            href="https://github.com/WrBug/PolyHermes#%E9%83%A8%E7%BD%B2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('hero.deploy')}
          </Button>
          <Button
            size="large"
            icon={<GithubOutlined />}
            href="https://github.com/WrBug/PolyHermes"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('hero.github')}
          </Button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">100%</div>
            <div className="stat-label">{t('hero.stats.openSource')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{t('hero.stats.realtime')}</div>
            <div className="stat-label">{t('hero.stats.realtimeLabel')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{t('hero.stats.secure')}</div>
            <div className="stat-label">{t('hero.stats.secureLabel')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

