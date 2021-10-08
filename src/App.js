
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./assets/css/style.css"
import Images from './components/Images';

function Home() {
    return (
        <div className="flex h-screen">
        <h1 className="m-auto text-3xl">Welcome Home</h1>
    </div>
    );
    
}
function Login() {
    return (
        <div className="flex h-screen">
        <h1 className="m-auto text-3xl">Login Page</h1>
    </div>
    );
    
}
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