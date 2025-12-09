import React, { useState, useEffect } from 'react'
import { Select, Space, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'react-responsive'
import './LanguageSwitcher.css'

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation()
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [currentLang, setCurrentLang] = useState<string>(i18n.language || 'en')

  useEffect(() => {
    setCurrentLang(i18n.language || 'en')
  }, [i18n.language])

  const languages = [
    { value: 'zh-CN', label: t('header.language.zhCN') },
    { value: 'zh-TW', label: t('header.language.zhTW') },
    { value: 'en', label: t('header.language.en') }
  ]

  const handleChange = async (value: string) => {
    setCurrentLang(value)
    await i18n.changeLanguage(value)
    // 保存到 localStorage
    localStorage.setItem('i18n_language', value)
    localStorage.setItem('i18nextLng', value)
    // 刷新页面以应用 Ant Design 的 locale
    window.location.reload()
  }

  if (isMobile) {
    // 移动端：只显示图标按钮，点击弹出下拉菜单
    const menuItems: MenuProps['items'] = languages.map(lang => ({
      key: lang.value,
      label: lang.label,
    }))

    const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
      handleChange(key as string)
    }

    return (
      <Dropdown
        menu={{ items: menuItems, onClick: handleMenuClick }}
        trigger={['click']}
        placement="bottomRight"
      >
        <Button
          type="text"
          icon={<GlobalOutlined />}
          className="language-switcher-mobile-button"
        />
      </Dropdown>
    )
  }

  // 桌面端：显示图标和文字
  return (
    <Space className="language-switcher">
      <GlobalOutlined className="language-icon" />
      <Select
        value={currentLang}
        onChange={handleChange}
        options={languages}
        className="language-select"
        dropdownStyle={{ 
          minWidth: 120
        }}
        bordered={false}
        size="middle"
      />
    </Space>
  )
}

export default LanguageSwitcher

