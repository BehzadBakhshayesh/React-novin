import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
import './NotFound.scss'

const NotFound = () => {
    return (
        <>
            <div className='NotFound'>
                <Result
                    status="404"
                    subTitle='متاسفانه صفحه مورد نظر پیدا نشد!'
                    extra={<Button type="primary"><Link to='/'>بازگشت به صفحه اصلی</Link></Button>}
                />
            </div>
        </>
    )
}

export default NotFound
