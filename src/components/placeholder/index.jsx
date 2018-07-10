import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CrudShow from './show';
import EditCrud from './edit';
import AddCrud from './add';

class Placeholder extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/placeholder" component={CrudShow} />
                    <Route path="/placeholder/add" component={AddCrud} />
                    <Route path="/placeholder/edit/:id" component={EditCrud} />
                </Switch>
            </div>
        );
    }
}

export default Placeholder;
