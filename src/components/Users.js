import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showUsers } from '../actions/users';

import { Table, Icon, Divider } from 'antd';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="">
                    <Icon type="edit" />
                </a>
                <Divider type="vertical" />
                <a href="">
                    <Icon type="delete" />
                </a>
                {/* <Divider type="vertical" /> */}
            </span>
        ),
    },
];

class Users extends Component {
    componentWillMount() {
        this.props.showUsers();
    }
    render() {
        return (
            <div>
                <h2>Lista de usuarios</h2>
                {/* <Table columns={columns} dataSource={this.props.users} /> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.listUsers.data,
    };
};

export default connect(
    mapStateToProps,
    { showUsers },
)(Users);
