import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <h1>Welcome to STC TimeManager</h1>
                <p>Manage your time, projects, and vacations efficiently.</p>
            </main>
            <Footer />
        </>
    );
}

export default App;