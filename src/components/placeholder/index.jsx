import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CrudShow from './show';
import FormCrud from './formCrud';
// import AddCrud from './add';

class Placeholder extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={CrudShow} />
                    <Route path="/add" component={FormCrud} />
                    <Route path="/edit/:id" component={FormCrud} />
                </Switch>
            </div>
        );
    }
}

export default Placeholder;
