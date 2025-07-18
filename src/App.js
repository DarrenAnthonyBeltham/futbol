import React, { useState } from 'react';
import './index.css'; 

import Homepage from './pages/Homepage';
import FormationBuilderPage from './pages/FormationBuilderPage'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
                return <PlaceholderPage title="Player Cards" />;
            case '/about':
                return <PlaceholderPage title="About Us" />;
            case '/contact':
                 return <PlaceholderPage title="Contact" />;
            case '/careers':
                 return <PlaceholderPage title="Careers" />;
            case '/stats':
                 return <PlaceholderPage title="Stats" />;
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
