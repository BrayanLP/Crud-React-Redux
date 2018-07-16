import React, { Component } from 'react';
import './App.css';
// And Components
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ViewAlbums from './components/albums/viewAlbums';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Users from './components/Users';
import Todo from './components/todos';
import Crud from './components/crud';
import Placeholder from './components/placeholder';
// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Layout>
                        <Sider
                            style={{
                                overflow: 'auto',
                                height: '100vh',
                                position: 'fixed',
                                left: 0,
                            }}
                            breakpoint="lg"
                            collapsedWidth="0"
                        >
                            <div className="logo" />

                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['Users']}
                            >
                                {/* <Menu.Item key="Users">
                                    <Link to="/">
                                        <Icon type="user" />
                                        <span className="nav-text">Users</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="albums">
                                    <Link to="/albums">
                                        <Icon type="book" />
                                        <span className="nav-text">Albums</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="tareas">
                                    <Link to="/tareas">
                                        <Icon type="check" />
                                        <span className="nav-text">Tareas</span>
                                    </Link>
                                </Menu.Item> */}
                                <Menu.Item key="crud">
                                    <Link to="/">
                                        <Icon type="check" />
                                        <span className="nav-text">Crud</span>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ marginLeft: 200 }}>
                            <Header
                                style={{ background: '#fff', padding: 0 }}
                            />
                            <Layout style={{ padding: '0 24px 24px' }}>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>List</Breadcrumb.Item>
                                    <Breadcrumb.Item>App</Breadcrumb.Item>
                                </Breadcrumb>
                                <Content
                                    style={{
                                        background: '#fff',
                                        padding: 24,
                                        margin: 0,
                                        minHeight: 280,
                                    }}
                                >
                                    <div>
                                        <Route path="/user" component={Users} />
                                        <Route
                                            path="/albums"
                                            component={ViewAlbums}
                                        />
                                        <Route
                                            path="/tareas"
                                            component={Todo}
                                        />
                                        <Route path="/crud" component={Crud} />

                                        <Route
                                            path="/"
                                            component={Placeholder}
                                        />
                                    </div>
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
                </Router>
            </div>
        );
    }
}

export default App;
