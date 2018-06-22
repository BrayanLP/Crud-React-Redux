import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { showAlbums } from '../../actions/albums';

import { Link } from 'react-router-dom';

import { Table, Icon, Divider } from 'antd';
const { Column } = Table;

class ViewAlbums extends Component {
    componentWillMount() {
        this.props.showAlbums();
    }
    render() {
        return (
            <div>
                <h2>Lista de Albums</h2>
                <Table dataSource={this.props.albums}>
                    <Column title="ID" dataIndex="id" key="id" />
                    <Column title="Usuario" dataIndex="userId" key="user_id" />
                    <Column title="Titulo" dataIndex="title" key="title" />

                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <Link to={`/albums/${record.id}`}>
                                    <Icon type="edit" />
                                </Link>
                                <Divider type="vertical" />
                                <Link to={`/albums/${record.id}`}>
                                    <Icon type="delete" />
                                </Link>
                            </span>
                        )}
                    />
                </Table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        albums: state.album.data,
    };
};

export default connect(
    mapStateToProps,
    { showAlbums },
)(ViewAlbums);
