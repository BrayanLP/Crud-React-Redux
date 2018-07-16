import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fecthCrud } from '../../actions/crud';
import { Table, Divider, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import { TextInput } from 'react-component-input-lp';
import { Field, reduxForm } from 'redux-form/immutable';
const { Column } = Table;

class CrudShow extends Component {
    componentWillMount() {
        this.props.fecthCrud();
    }
    render() {
        return (
            <div>
                <h2>Lista de Albums</h2>
                <Link to="/add" type="primary" className="">
                    <Button type="primary">Agregar</Button>
                </Link>
                <Table dataSource={this.props.data}>
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
                                <Link to={`/edit/${record.id}`}>
                                    <Icon type="edit" />
                                </Link>
                                <Divider type="vertical" />
                                <Link to={`/${record.id}`}>
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
    console.log(state);
    const res = state.reducer.showCrud.data;
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

function validate(values) {
    const errors = {};

    return errors;
}

export default connect(
    mapStateToProps,
    { fecthCrud },
)(CrudShow);
