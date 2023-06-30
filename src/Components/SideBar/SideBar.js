import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { HomeOutlined, OrderedListOutlined } from '@ant-design/icons'
import './SideBar.scss'


const SideBar = () => {

    return (
        <>
            <div className='SideBar'>
                <Menu
                    className='Menu'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Menu.Item key="1" icon={<HomeOutlined />} ><Link to='/'>داشبورد</Link></Menu.Item>
                    <Menu.Item key="2" icon={<OrderedListOutlined />}><Link to='/users'>لیست کاربران </Link></Menu.Item>
                </Menu>
            </div>
        </>
    )
}

export default SideBar
