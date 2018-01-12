import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'

import MemberList from './components/MemberList';
import MemberDetails from './components/MemberDetails';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={MemberList} />
                <Route exact path='/members' component={MemberList} />
                <Route exact path='/members/:memberId' component={MemberDetails} />
            </Switch>
        );
    }
}
