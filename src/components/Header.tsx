import React, { useState, useEffect } from 'react'
import { Layout, Menu, Button, Drawer } from 'antd'
import { MenuOutlined, GithubOutlined, TwitterOutlined } from '@ant-design/icons'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

const { Header: AntHeader } = Layout

const Header: React.FC = () => {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { key: 'features', label: t('header.features') },
    { key: 'tech', label: t('header.tech') },
    { key: 'screenshots', label: t('header.screenshots') },
    { key: 'quickstart', label: t('header.quickstart') },
  ]

  const handleMenuClick = (key: string) => {
    const element = document.getElementById(key)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <AntHeader className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text">{t('header.logo')}</span>
        </div>
        {isMobile ? (
          <>
            <div className="mobile-right-group">
              <div className="mobile-header-actions">
                <Button
                  type="text"
                  icon={<GithubOutlined />}
                  href="https://github.com/WrBug/PolyHermes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-action-button"
                />
                <Button
                  type="text"
                  icon={<TwitterOutlined />}
                  href="https://x.com/quant_tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-action-button"
                />
              </div>
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setMobileMenuOpen(true)}
                className="mobile-menu-button"
              />
              <LanguageSwitcher />
            </div>
            <Drawer
              title={t('header.menu')}
              placement="right"
              onClose={() => setMobileMenuOpen(false)}
              open={mobileMenuOpen}
            >
              <Menu
                mode="vertical"
                items={menuItems}
                onClick={({ key }) => handleMenuClick(key)}
              />
            </Drawer>
          </>
        ) : (
          <>
            <Menu
              mode="horizontal"
              items={menuItems}
              onClick={({ key }) => handleMenuClick(key)}
              className="header-menu"
            />
            <div className="header-actions">
              <LanguageSwitcher />
              <Button
                type="link"
                icon={<GithubOutlined />}
                href="https://github.com/WrBug/PolyHermes"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                type="link"
                icon={<TwitterOutlined />}
                href="https://x.com/quant_tr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Button>
            </div>
          </>
        )}
      </div>
    </AntHeader>
  )
}

export default Header

