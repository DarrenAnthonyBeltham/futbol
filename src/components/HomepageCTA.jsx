import React from 'react';

const HomepageCTA = ({ onNavigate = () => {} }) => {

    const handleNavClick = (e, path) => {
        e.preventDefault();
        onNavigate(path);
    };

    return (
        <section className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to <span className="text-brand-accent">Unleash</span> Your Vision?</h2>
                <p className="text-brand-gray text-lg max-w-2xl mx-auto mb-10">Stop dreaming, start building. Your first masterpiece is just a click away.</p>
                <button 
                    onClick={(e) => handleNavClick(e, '/builder')}
                    className="bg-brand-accent text-brand-dark font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-accent-dark transition-all duration-300 transform hover:scale-105 cta-glow"
                >
                    Start Building for Free
                </button>
            </div>
        </section>
    );
};

export default HomepageCTA;
