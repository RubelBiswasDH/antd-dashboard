import React from 'react'

// Import Components
import { Layout, Menu, Col, Row, Button, Tooltip } from 'antd'

import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    CloseOutlined
  } from '@ant-design/icons'

// Constants
const { Sider } = Layout

const menuItems = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: 'nav 1',
    },
    {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'nav 2',
    },
    {
        key: '3',
        icon: <UploadOutlined />,
        label: 'nav 3',
    }
]

const LeftNav = (props) => {
    const { handleToggleLeftNav, isLeftNavOpen, collapsedWidth } = props
    return (
        <Sider 
            style={{ backgroundColor: '#fff' }}
            collapsed={ !isLeftNavOpen }
            collapsedWidth={ !collapsedWidth ? 0 : collapsedWidth }
            // collapsedWidth={ collapsedWidth ? collapsedWidth : 0 }

        >
            <div style={{ ...brandLogoStyle }}>
                <Row style={{ width: '100%' }}>
                    <Col xs={18} md={20}>
                        Brand Logo
                    </Col>
                    <Col xs={6} md={4}>
                        <Tooltip title="search">
                            <Button 
                                type="primary" 
                                shape="circle" 
                                icon={<CloseOutlined />} 
                                onClick={handleToggleLeftNav}
                            />
                        </Tooltip>
                    </Col>
                </Row>
            </div>

            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                onClick = { (a, b, c, d)=> console.log(a, b, c, d)}
                items={[ ...menuItems]}
            />
        </Sider>
    )
}

const brandLogoStyle = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 5, 
    marginBottom: 1,
    width:'100%', 
    height: '64px',
    boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
}
export default LeftNav
