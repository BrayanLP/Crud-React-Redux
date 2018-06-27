import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CrudShow from './show';
import EditCrud from './edit';
import AddCrud from './add';

class Crud extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/crud" component={CrudShow} />
                    <Route path="/crud/add" component={AddCrud} />
                    <Route path="/crud/edit/:id" component={EditCrud} />
                </Switch>
            </div>
        );
    }
}

export default Crud;
