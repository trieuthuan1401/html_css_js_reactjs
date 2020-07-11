import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'

import '../App.css'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const { Header } = Layout

export default class HeaderComponent extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    {/* <div className="logo" style={{ width: '120px', height: '31px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px 24px 16px 0', float: 'left' }} /> */}
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item ><Link to="/user">Tài khoản</Link></Menu.Item>
                        <Menu.Item><Link to="/course">Khóa học</Link></Menu.Item>
                        <Menu.Item ><Link to="/userCourse">Chi tiết khóa học</Link></Menu.Item>
                        <Menu.Item ><Link to="/courseContent">Nội dung khóa học</Link></Menu.Item>
                        <Menu.Item ><Link to="/teacher">Giảng viên</Link></Menu.Item>
                        <Menu.Item ><Link to="/codeFree">Khóa học miễn phí</Link></Menu.Item>
                        {/* <Menu.Item ><Link to="/baocao">Báo cáo</Link></Menu.Item> */}
                    </Menu>
                </Header>
            </Layout>
        )
    }
}