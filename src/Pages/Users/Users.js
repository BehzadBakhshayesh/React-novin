import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Typography, Pagination } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { getUsers } from '../../Redux/actions/users'
import './Users.scss'

const { Text, Title } = Typography
const columns = [
    {
        title: 'ردیف',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'نام',
        dataIndex: 'first_name',
        key: 'first_name',
    },
    {
        title: 'نام خانوادگی',
        dataIndex: 'last_name',
        key: 'last_name',
    },
    {
        title: 'مشاهده',
        dataIndex: 'actions',
        key: 'actions',
        render: (field, record) => {
            return (
                <span>
                    <Link to={`/users/${record.id}`}>
                        <EyeOutlined title='مشاهده' style={{ margin: '4px', color: '#52c41a' }} />
                    </Link>
                </span>
            )
        }
    },
]

const Users = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(1))
    }, [])

    const usersList = useSelector(state => state.users)
    const loading = useSelector(state => state.loading)
    const PaginationChange = (page) => {
        dispatch(getUsers(page))
    }

    return (
        <>
            <div className='Users'>
                <div className='header'>
                    <Title level={4}>
                        <Text type="success"> لیست کاربران</Text>
                    </Title>
                </div>
                <div className='container'>
                    <Table
                        columns={columns}
                        dataSource={usersList}
                        loading={loading}
                        pagination={false}
                        rowKey='id'
                    />
                    <div className='paginationContainer'>
                        <Pagination
                            onChange={PaginationChange}
                            total={12} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users
