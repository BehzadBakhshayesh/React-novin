import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Button, Row, Col, Divider } from 'antd'
import { loginRequest } from '../../Redux/actions/login'
import './Login.scss'

const layout = {
    labelCol: { span: 8, },
    wrapperCol: { span: 16, },
}
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
}

const Login = () => {
    const dispatch = useDispatch()

    const sumbmitLoading = useSelector(state => state.submitLoading)

    const onFinish = (values) => {
        dispatch(loginRequest(values))
    }
    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo)
    }

    return (
        <div className='Login'>
            <Row justify="space-around" align="middle" className='Row'>
                <Col span={8}>
                    <Divider orientation="center">ورود به پنل ادمین</Divider>
                    <Form
                        {...layout}
                        name='login'
                        initialValues={{}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label='ایمیل'
                            name='email'
                            rules={[
                                {
                                    required: true,
                                    message: ' لطفا ایمیل را وارد نمایید!',
                                    type: 'email'
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label='رمز عبور'
                            name='password'
                            rules={[
                                {
                                    required: true,
                                    message: ' لطفا رمز عبور را وارد نمایید!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type='primary' htmlType='submit' loading={sumbmitLoading} disabled={sumbmitLoading}>
                                ورود
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Login