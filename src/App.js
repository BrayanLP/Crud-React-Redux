import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import logo from './logo.svg';

// And Components

import './App.css';
// import CreatePost from './components/post/createPost';
// import ViewPost from './components/post/viewPost';
import ViewAlbums from './components/albums/viewAlbums';
// import EditAlbums from './components/albums/editAlbums';
// import PostsPage from './components/post/postPage';
import Post from './components/post/Post';
// import AllPost from './AllPost';
import Users from './components/Users';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

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
                            onCollapse={(collapsed, type) => {
                                console.log(collapsed, type);
                            }}
                        >
                            <div className="logo" />

                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['Users']}
                            >
                                <Menu.Item key="Users">
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
                                    {/* <Router> */}
                                    <div>
                                        {/* <ul>
                                            <li>
                                                <Link to="/">Users</Link>
                                            </li>
                                            <li>
                                                <Link to="/albums">Albums</Link>
                                            </li>
                                        </ul> */}

                                        <Route
                                            exact
                                            path="/"
                                            component={Users}
                                        />
                                        <Route
                                            path="/albums"
                                            component={ViewAlbums}
                                        />
                                        <Post />
                                        {/* <Route
                                            path="/albums/:id"
                                            component={EditAlbums}
                                        /> */}
                                    </div>
                                    {/* </Router> */}
                                    {/* <Table
                                    // rowSelection={rowSelection}
                                    columns={columns}
                                    dataSource={data}
                                /> */}
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
                </Router>
                {/* <Users/> */}
                {/* <CreatePost /> */}
                {/* <ViewPost/> */}
                {/* <ViewAlbums/> */}
                {/* <EditPost /> */}
            </div>
        );
    }
}

export default App;
