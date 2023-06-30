import React from 'react'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'
import Home from './Pages/Home/Home'
import Users from './Pages/Users/Users'
import Profile from './Pages/Profile/Profile'
import Login from './Pages/Login/Login'
import NotFound from './Pages/NotFound/NotFound'
import './App.scss'

const { Header: AntHeader, Sider, Content } = Layout

const App = () => {
  const isLogin = useSelector(state => state.login)
  const token = localStorage.getItem('token')

  if (!isLogin && token !== 'QpwL5tke4Pnpja7X4') {
    return <Login />
  }
  return (
    <>
      <main className='App'>
        <Layout className='Layout'>
          <AntHeader className='Header'>
            <Header />
          </AntHeader>
          <Layout>
            <Sider className='Sider'>
              <SideBar />
            </Sider>
            <Content className='Content'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/users' component={Users} />
                <Route exact path='/users/:id' component={Profile} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </main>
    </>
  )

}

export default App
