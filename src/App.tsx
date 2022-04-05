import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import './App.css';
import Home from "./routes/Home";
import Character from "./routes/Character";

function App() {
    return (
        <>
            <Router>
                <>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/character/:characterId" element={<Character/>}/>
                    </Routes>
                </>
            </Router>
        </>
    );
}

export default App;
