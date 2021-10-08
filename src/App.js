
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./assets/css/style.css"
import Gallery from './page/Gallery';
import Home from './page/Home';
import Login from './page/Login';
import routes from './utils/routes';

function App() {

    return (
        <Router>
            <Switch>
                {
                     routes.map((route) => (
                        <Route 
                            path={route.path} 
                            exact={route.exact} 
                            component={route.component}

                        />
                    ))
                }
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/gallery">
                    <Gallery/>
                </Route>
                
            </Switch>
        </Router>
    );
}

export default App;