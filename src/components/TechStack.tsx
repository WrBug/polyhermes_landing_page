import React from 'react'
import { Row, Col, Card, Tag } from 'antd'
import { useTranslation } from 'react-i18next'
import './TechStack.css'

interface TechItem {
  categoryKey: string
  items: string[]
  color: string
}

const TechStack: React.FC = () => {
  const { t } = useTranslation()

  const techStack: TechItem[] = [
    {
      categoryKey: 'tech.backend',
      items: ['Spring Boot 3.2.0', 'Kotlin 1.9.20', 'MySQL 8.2.0', 'Retrofit 2.9.0', 'OkHttp 4.12.0'],
      color: 'blue',
    },
    {
      categoryKey: 'tech.frontend',
      items: ['React 18', 'TypeScript', 'Vite', 'Ant Design 5.12.0', 'Zustand'],
      color: 'cyan',
    },
    {
      categoryKey: 'tech.features',
      items: [
        t('tech.items.websocket'),
        t('tech.items.encryption'),
        t('tech.items.responsive'),
        t('tech.items.i18n'),
        t('tech.items.docker')
      ],
      color: 'purple',
    },
  ]

  return (
    <section id="tech" className="section tech-section">
      <div className="container">
        <h2 className="section-title">{t('tech.title')}</h2>
        <p className="section-subtitle">
          {t('tech.subtitle')}
        </p>
        <Row gutter={[24, 24]}>
          {techStack.map((tech, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className="tech-card">
                <h3 className="tech-category">{t(tech.categoryKey)}</h3>
                <div className="tech-tags">
                  {tech.items.map((item, itemIndex) => (
                    <Tag key={itemIndex} color={tech.color} className="tech-tag">
                      {item}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default TechStack

