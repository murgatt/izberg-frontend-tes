import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FormContainer from '../containers/formContainer';
import DataContainer from '../containers/dataContainer';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={FormContainer}/>
            <Route path='/data' component={DataContainer}/>
        </Switch>
    </main>
);

export default Main
