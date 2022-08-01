import { Layout } from 'antd'
import React from 'react'
const { Header, Footer, Sider, Content } = Layout

const MenuLayout = () => (
  <>
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </>
)

export default MenuLayout