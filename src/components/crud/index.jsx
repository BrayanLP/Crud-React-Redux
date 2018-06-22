import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CrudShow from './show';
import CrudEdit from './edit';

class Crud extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/crud" component={CrudShow} />
                    <Route path="/crud/:id" component={CrudEdit} />
                </Switch>
            </div>
        );
    }
}

export default Crud;
