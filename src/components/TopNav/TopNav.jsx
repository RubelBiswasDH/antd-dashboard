// Import Components
import { Layout, Typography, Button, Dropdown, Menu } from 'antd'

// Icons 
import { LeftSquareOutlined, MoreOutlined } from '@ant-design/icons';

// Constants
const { Title } = Typography
const { Header } = Layout
const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          ),
        },
      ]}
    />
  )


// TopNav Component
const TopNav = (props) => {
    const { title, topNavContainerStyles, handleToggleLeftNav } = props
    return (
        <Header 
            style={{ ...containerStyles, ...topNavContainerStyles }}
        >   
            <Button
                style={{
                    padding: 0,
                    width: '40px'
                }} 
                onClick={ handleToggleLeftNav }
            >
                <LeftSquareOutlined />
            </Button>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, width:'90%'}}>
                <Title level={ 5 } ellipsis={ true } style={{ margin: 0, fontWeight: 500 }}>{ title }</Title>
            </div>

            <Dropdown 
                overlay={menu} 
                placement="bottomRight" 
                arrow
            >
                <Button 
                    style={{
                        marginLeft: 'auto',
                        borderRadius: '20px'
                    }}
                ><MoreOutlined />
            </Button>
            </Dropdown>
        </Header>
    )
}

// JSX Styles
const containerStyles = {
    width:'100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0rem 1.5rem',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' 
}

export default TopNav