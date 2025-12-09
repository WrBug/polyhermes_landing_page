import React, { useState } from 'react'
import { Row, Col, Image, Tabs } from 'antd'
import { DesktopOutlined, MobileOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import './Screenshots.css'

const Screenshots: React.FC = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('desktop')

  // 根据当前选中的标签设置宽高比类名
  const aspectRatioClass = activeTab === 'desktop' ? 'desktop-aspect' : 'mobile-aspect'

  const desktopScreenshots = [
    '/screenshot/pc/ScreenShot_2025-12-07_172940_894.png',
    '/screenshot/pc/ScreenShot_2025-12-07_173042_509.png',
    '/screenshot/pc/ScreenShot_2025-12-07_173105_822.png',
    '/screenshot/pc/ScreenShot_2025-12-07_173133_527.png',
  ]

  const mobileScreenshots = [
    '/screenshot/mobile/ScreenShot_2025-12-07_173224_069.png',
    '/screenshot/mobile/ScreenShot_2025-12-07_173309_995.png',
    '/screenshot/mobile/ScreenShot_2025-12-07_173330_724.png',
    '/screenshot/mobile/ScreenShot_2025-12-07_173354_840.png',
  ]


  return (
    <section id="screenshots" className="section screenshots-section">
      <div className="container">
        <h2 className="section-title">{t('screenshots.title')}</h2>
        <p className="section-subtitle">
          {t('screenshots.subtitle')}
        </p>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            {
              key: 'desktop',
              label: (
                <span>
                  <DesktopOutlined /> {t('screenshots.desktop')}
                </span>
              ),
            },
            {
              key: 'mobile',
              label: (
                <span>
                  <MobileOutlined /> {t('screenshots.mobile')}
                </span>
              ),
            },
          ]}
          className="screenshots-tabs"
        />
        <Row gutter={[16, 16]} className="screenshots-grid">
          {(activeTab === 'desktop' ? desktopScreenshots : mobileScreenshots).map(
            (src, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <div className={`screenshot-wrapper ${aspectRatioClass}`}>
                  <Image
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="screenshot-image"
                    preview={{
                      mask: t('screenshots.preview'),
                    }}
                  />
                </div>
              </Col>
            )
          )}
        </Row>
      </div>
    </section>
  )
}

export default Screenshots

