import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import routes from './roadmap';
import { History } from 'history';
import './assets/styles/base.css';

interface Props {
    history: History;
}

class App extends Component<Props, any> {
    render() {
        return (
            <div className="kal-container">
                <ConnectedRouter history={this.props.history}>
                    <Switch>
                        {routes.map(route => (
                            <Route exact={route.exact} key={route.path} {...route} />
                        ))}
                    </Switch>
                </ConnectedRouter>
            </div>
        );
    }
}

export default App;
