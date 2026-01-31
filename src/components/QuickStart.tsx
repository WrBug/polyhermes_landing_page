import React, { useState } from 'react'
import { Card, Button, Typography, Space, message } from 'antd'
import { RocketOutlined, GithubOutlined, CopyOutlined, CheckOutlined, BookOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import './QuickStart.css'

const { Title, Paragraph } = Typography

const QuickStart: React.FC = () => {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  // 根据当前语言生成代码内容
  const getCodeContent = () => {
    return `# ${t('quickstart.comment1')}
mkdir -p ~/polyhermes && cd ~/polyhermes && curl -fsSL https://raw.githubusercontent.com/WrBug/PolyHermes/main/deploy-interactive.sh -o deploy.sh && chmod +x deploy.sh && ./deploy.sh

# ${t('quickstart.comment2')}
mkdir -p ~/polyhermes && cd ~/polyhermes && wget -O deploy.sh https://raw.githubusercontent.com/WrBug/PolyHermes/main/deploy-interactive.sh && chmod +x deploy.sh && ./deploy.sh

# ${t('quickstart.comment3')}
# - ${t('quickstart.comment4')}
# - ${t('quickstart.comment5')}
# - ${t('quickstart.comment6')}
# - ${t('quickstart.comment7')}`
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getCodeContent())
      setCopied(true)
      message.success(t('quickstart.copySuccess'))
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      message.error(t('quickstart.copyFailed'))
    }
  }

  return (
    <section id="quickstart" className="section quickstart-section">
      <div className="container">
        <h2 className="section-title">{t('quickstart.title')}</h2>
        <p className="section-subtitle">
          {t('quickstart.subtitle')}
        </p>
        <div className="quickstart-content">
          <Card className="quickstart-card">
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title level={4}>{t('quickstart.oneLineInstall')}</Title>
                <Paragraph>
                  {t('quickstart.description')}
                </Paragraph>
              </div>
              <div className="quickstart-code-wrapper">
                <div className="quickstart-code-header">
                  <span className="code-header-title">{t('quickstart.codeTitle')}</span>
                  <Button
                    type="text"
                    icon={copied ? <CheckOutlined /> : <CopyOutlined />}
                    onClick={handleCopy}
                    className="copy-button"
                    size="small"
                  >
                    {copied ? t('quickstart.copied') : t('quickstart.copy')}
                  </Button>
                </div>
                <div className="quickstart-code">
                  <pre className="code-block">
                    <code>{getCodeContent()}</code>
                  </pre>
                </div>
              </div>
              <Space size="middle" wrap style={{ width: '100%', justifyContent: 'center' }}>
                <Button
                  type="primary"
                  size="large"
                  icon={<RocketOutlined />}
                  href="https://github.com/WrBug/PolyHermes#%E9%83%A8%E7%BD%B2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, #1890ff 0%, #722ed1 100%)',
                    border: 'none',
                    fontWeight: 600,
                    boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)',
                  }}
                >
                  {t('quickstart.moreOptions')}
                </Button>
                <Button
                  size="large"
                  icon={<GithubOutlined />}
                  href="https://github.com/WrBug/PolyHermes"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: 500,
                    borderColor: '#d9d9d9',
                  }}
                >
                  {t('quickstart.githubRepo')}
                </Button>
                <Button
                  size="large"
                  icon={<BookOutlined />}
                  href="https://github.com/WrBug/PolyHermes/tree/main/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: 500,
                    borderColor: '#d9d9d9',
                  }}
                >
                  {t('quickstart.devDocs')}
                </Button>
              </Space>
            </Space>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default QuickStart
