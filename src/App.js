
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./assets/css/style.css"
import Images from './components/Images';
import Home from './page/Home';
import Login from './page/Login';



function Gallery() {
    return (
        <section className="flex justify-center">
            <div className="max-w-7xl">
                <div className="text-center">
                    <Images/>                  
                </div>
            </div>
        </section>
    );
}
function App() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact="true">
                    <Home/>
                </Route>
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