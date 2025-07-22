import React from "react";

const HeroSection = ({ onNavigate = () => {} }) => {

    const handleNavClick = (e, path) => {
        e.preventDefault();
        onNavigate(path);
    };

    return (
        <section className="relative overflow-hidden hero-pattern py-24 md:py-40">
            <div className="aurora-glow w-96 h-96 bg-brand-accent top-0 left-0"></div>
            <div className="aurora-glow w-96 h-96 bg-blue-500 bottom-0 right-0"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">Your Team. <span className="text-brand-accent">Your Tactics.</span></h1>
                <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto mb-10">The ultimate playground for football strategists. Drag, drop, and dominate with the most intuitive formation builder on the web.</p>
                <p>
                    <a 
                        href="/builder" 
                        onClick={(e) => handleNavClick(e, '/builder')}
                        className="bg-brand-accent text-brand-dark font-bold text-lg rounded-full py-4 px-10 hover:bg-brand-accent-dark transition-all duration-300 inline-block transform hover:scale-105 cta-glow"
                    >
                        Start Building for Free
                    </a>
                </p>
            </div>
        </section>
    );
};

export default HeroSection;