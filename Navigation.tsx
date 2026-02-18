// Content of Navigation.tsx from commit fdb3de0f42468d4dabd681f3bdc5af4be7de60ef

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Navigation = () => {
    return (
        <Router>
            {/* Navigation routes here */}
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                {/* other routes */}
            </Switch>
        </Router>
    );
};

export default Navigation;