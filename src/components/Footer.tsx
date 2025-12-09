import React from 'react'
import { Layout, Row, Col, Typography, Space } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import './Footer.css'

const { Footer: AntFooter } = Layout
const { Text, Link } = Typography

const Footer: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <AntFooter className="site-footer">
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={8}>
            <div className="footer-section">
              <h3 className="footer-title">{t('header.logo')}</h3>
              <Text className="footer-description">
                {t('footer.description')}
              </Text>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.links')}</h3>
              <Space direction="vertical" size="small">
                <Link
                  href="https://github.com/WrBug/PolyHermes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.githubRepo')}
                </Link>
                <Link
                  href="https://github.com/WrBug/PolyHermes/tree/main/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.devDocs')}
                </Link>
                <Link
                  href="https://polymarket.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.polymarket')}
                </Link>
              </Space>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.followUs')}</h3>
              <Space size="large">
                <Link
                  href="https://github.com/WrBug/PolyHermes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon"
                >
                  <GithubOutlined style={{ fontSize: 24 }} />
                </Link>
                <Link
                  href="https://x.com/quant_tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon"
                >
                  <TwitterOutlined style={{ fontSize: 24 }} />
                </Link>
              </Space>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <Text type="secondary">
            {t('footer.copyright')}
          </Text>
          <Text type="secondary" className="footer-disclaimer">
            {t('footer.disclaimer')}
          </Text>
        </div>
      </div>
    </AntFooter>
  )
}

export default Footer

