import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fecthCrud } from '../../actions/crud';
import { Table, Divider, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Column } = Table;

class CrudShow extends Component {
    componentWillMount() {
        this.props.fecthCrud();
    }
    render() {
        return (
            <div>
                <h2>Lista de Albums</h2>
                <Table
                    // columns={columns}
                    dataSource={this.props.data}
                >
                    <Column tit le="ID" dataIndex="id" key="id" />

                    <Column title="Title" dataIndex="title" rowKey="title" />
                    <Column
                        title="Id Usuario"
                        dataIndex="userId"
                        rowKey="userId"
                    />
                    <Column
                        title="Action"
                        rowKey={action => action}
                        render={(text, record) => (
                            <span>
                                <Link to={`/crud/${record.id}`}>
                                    <Icon type="edit" />
                                </Link>
                                <Divider type="vertical" />
                                <Link to={`/crud/${record.id}`}>
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
    var defineProp = function(obj, id, value) {
        var config = {
            value: value,
        };
        Object.defineProperty(obj, id, config);
    };
    const res = state.showCrud.data;
    if (res) {
        const addAttr = res =>
            res.map(child => {
                let id = child.id;
                defineProp(child, 'key', id);
                return child;
            });
        addAttr(res);
    }
    return {
        data: res,
    };
};

export default connect(
    mapStateToProps,
    { fecthCrud },
)(CrudShow);
