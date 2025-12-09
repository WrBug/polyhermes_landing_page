import React, { useState } from 'react'
import { Card, Steps, Button, Typography, Space, message } from 'antd'
import { RocketOutlined, GithubOutlined, BookOutlined, CopyOutlined, CheckOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import './QuickStart.css'

const { Title, Paragraph } = Typography

const QuickStart: React.FC = () => {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  // 代码内容保持英文，因为这是实际的命令
  const codeContent = `# 1. Create deployment directory
mkdir polyhermes && cd polyhermes

# 2. Download config files
curl -O https://raw.githubusercontent.com/WrBug/PolyHermes/main/docker-compose.prod.yml
curl -O https://raw.githubusercontent.com/WrBug/PolyHermes/main/docker-compose.prod.env.example

# 3. Create config file
cp docker-compose.prod.env.example .env

# 4. Edit .env file, modify required configuration

# 5. Start service
docker-compose -f docker-compose.prod.yml up -d`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeContent)
      setCopied(true)
      message.success(t('quickstart.copySuccess'))
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      message.error(t('quickstart.copyFailed'))
    }
  }

  const steps = [
    {
      title: t('quickstart.step1'),
      description: t('quickstart.step1Desc'),
    },
    {
      title: t('quickstart.step2'),
      description: t('quickstart.step2Desc'),
    },
    {
      title: t('quickstart.step3'),
      description: t('quickstart.step3Desc'),
    },
    {
      title: t('quickstart.step4'),
      description: t('quickstart.step4Desc'),
    },
  ]

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
                <Title level={4}>{t('quickstart.recommended')}</Title>
                <Paragraph>
                  {t('quickstart.description')}
                </Paragraph>
              </div>
              <Steps
                direction="vertical"
                items={steps}
                className="quickstart-steps"
              />
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
                    <code>{codeContent}</code>
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
                  {t('quickstart.viewDocs')}
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

