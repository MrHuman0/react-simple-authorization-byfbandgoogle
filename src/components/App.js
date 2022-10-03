import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {AuthProvider} from "../contexts/AuthContext"
import Main from "./Main"
import Login from "./Login"

function App() {
    return (
        <div style={{fontFamily: 'Avenir'}}>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/main" element={<Main/>}/>
                        <Route path="/" element={<Login/>}/>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;