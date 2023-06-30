import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './Redux/store/index'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import fa from 'antd/es/locale/fa_IR'
import 'antd/dist/antd.css'
import './index.scss'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider direction='rtl' locale={fa}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
)
