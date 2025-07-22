import React, { useState } from 'react';
import './index.css'; 

import Homepage from './pages/Homepage';
import FormationBuilderPage from './pages/FormationBuilderPage'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PlayerCards from './pages/PlayerCards';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

const PlaceholderPage = ({ title }) => (
    <div className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-brand-gray mt-4">This page is under construction.</p>
    </div>
);

function App() {
    const [currentPage, setCurrentPage] = useState('/');

    const renderPage = () => {
        switch (currentPage) {
            case '/':
                return <Homepage />;
            case '/builder':
                return <FormationBuilderPage />;
            case '/cards':
                return <PlayerCards />;
            case '/about':
                return <AboutUs />;
            case '/contact':
                 return <Contact />;
            case '/careers':
                 return <Careers />;
            default:
                return <Homepage />;
        }
    };

    return (
        <div className="bg-brand-dark text-brand-light min-h-screen antialiased">
            <Navbar onNavigate={setCurrentPage} />
            <main>
                {renderPage()}
            </main>
            <Footer onNavigate={setCurrentPage} />
        </div>
    );
}

export default App;
