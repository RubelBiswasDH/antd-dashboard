import React from 'react'

// Import Components
import { Layout, Menu } from 'antd'

import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons'

// Constants
const { Sider } = Layout

const LeftNav = (props) => {
    const { handleToggleLeftNav, isLeftNavOpen, collapsedWidth } = props
    return (
        <Sider 
            style={{ backgroundColor: '#fff' }}
            collapsed={ !isLeftNavOpen }
            collapsedWidth={ collapsedWidth ? collapsedWidth : 0 }
        >
            <div style={{ ...brandLogoStyle }}>
                Brand Logo
            </div>
            {/* <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
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
                    },
                ]}
            /> */}
        </Sider>
    )
}

const brandLogoStyle = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 5, 
    width:'100%', 
    height: '64px',
    boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
}
export default LeftNav
