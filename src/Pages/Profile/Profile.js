import React, { useEffect } from 'react'
import { Typography, Spin, Button, Row, Col, Avatar } from 'antd'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../../Redux/actions/user'
import './Profile.scss'

const { Text, Title } = Typography

const Profile = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getUser(id))
    }, [id])

    const user = useSelector(state => state.user)
    const loading = useSelector(state => state.loading)

    return (
        <>
            {loading ?
                <div className='loading'>
                    <Spin size="large" />
                </div> :
                <div className='Profile'>
                    <div className='innerProfile'>
                        <Row className='Row'>
                            <Col span={24}>
                                <Title level={4}>
                                    <Text type="success">کاربر شماره {id}</Text>
                                </Title>
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={24}>
                                <Avatar size={64} src={user?.avatar} />
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={4}>
                                نام :
                            </Col>
                            <Col span={20}>
                                {user.first_name}
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={4}>
                                نام خانوادگی :
                            </Col>
                            <Col span={20}>
                                {user.last_name}
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={4}>
                                ایمیل :
                            </Col>
                            <Col span={20}>
                                {user.email}
                            </Col>
                        </Row>
                        <Row className='Row'>
                            <Col span={24}>
                                <Button type="primary">
                                    <Link to='/users'> بازگشت به لیست کاربران</Link>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>}
        </>
    )
}

export default Profile
