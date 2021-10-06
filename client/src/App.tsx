import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

const App = (): JSX.Element => {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
};

export default App;
