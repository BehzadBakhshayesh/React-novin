import React from 'react'
import { Typography } from 'antd'
import './Home.scss'

const { Text, Title } = Typography


const Home = () => {

    return (
        <>
            <div className='Home'>
                <Title> <Text type="success">داشبورد</Text></Title>
            </div>
        </>
    )
}

export default Home
