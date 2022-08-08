import React from 'react'

// Import Components
import { Layout } from 'antd'
import TopNav from './TopNav/TopNav'
import LeftNav from './LeftNav/LeftNav'

// Constants
const { Footer, Content } = Layout

const MenuLayout = () => {

  const [ leftNavOpen, setLeftNavOpen ] = React.useState(false)
  const handleToggleLeftNav = () => {
    setLeftNavOpen( !leftNavOpen )
  }

  return (
    <>
      <Layout style={{ height:'100vh' }}>
        <LeftNav
          isLeftNavOpen={ leftNavOpen }
          handleToggleLeftNav={ handleToggleLeftNav }
        />
        <Layout>
          <TopNav 
            title={ 'Antd Dashboard' }
            handleToggleLeftNav={ handleToggleLeftNav }
          />
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  )
}

export default MenuLayout