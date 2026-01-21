import React from 'react'
import { Row, Col, Card } from 'antd'
import {
  SafetyOutlined,
  TeamOutlined,
  FileTextOutlined,
  SwapOutlined,
  ShoppingCartOutlined,
  WalletOutlined,
  BarChartOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import './Features.css'

interface Feature {
  icon: React.ReactNode
  titleKey: string
  descriptionKey: string
}

const Features: React.FC = () => {
  const { t } = useTranslation()

  const features: Feature[] = [
    {
      icon: <SafetyOutlined />,
      titleKey: 'features.accountManagement.title',
      descriptionKey: 'features.accountManagement.description',
    },
    {
      icon: <TeamOutlined />,
      titleKey: 'features.leaderManagement.title',
      descriptionKey: 'features.leaderManagement.description',
    },
    {
      icon: <FileTextOutlined />,
      titleKey: 'features.template.title',
      descriptionKey: 'features.template.description',
    },
    {
      icon: <SwapOutlined />,
      titleKey: 'features.config.title',
      descriptionKey: 'features.config.description',
    },
    {
      icon: <ShoppingCartOutlined />,
      titleKey: 'features.orderManagement.title',
      descriptionKey: 'features.orderManagement.description',
    },
    {
      icon: <WalletOutlined />,
      titleKey: 'features.positionManagement.title',
      descriptionKey: 'features.positionManagement.description',
    },
    {
      icon: <BarChartOutlined />,
      titleKey: 'features.statistics.title',
      descriptionKey: 'features.statistics.description',
    },
    {
      icon: <SettingOutlined />,
      titleKey: 'features.systemManagement.title',
      descriptionKey: 'features.systemManagement.description',
    },
    {
      icon: <SwapOutlined />,
      titleKey: 'features.systemUpdate.title',
      descriptionKey: 'features.systemUpdate.description',
    },
  ]

  return (
    <section id="features" className="section features-section">
      <div className="container">
        <h2 className="section-title">{t('features.title')}</h2>
        <p className="section-subtitle">
          {t('features.subtitle')}
        </p>
        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card 
                className="feature-card" 
                hoverable
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{t(feature.titleKey)}</h3>
                <p className="feature-description">{t(feature.descriptionKey)}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Features

