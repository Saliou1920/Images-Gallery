
import React from 'react';
import "./assets/css/style.css"
import Images from './components/Images';

function App() {

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

export default App;