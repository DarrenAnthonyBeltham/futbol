import React from 'react';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Builder', path: '/builder' },
    { title: 'Player Cards', path: '/cards' },
    { title: 'About', path: '/about' },
];

const Navbar = ({ onNavigate = () => {} }) => {
    const handleNavClick = (e, path) => {
        e.preventDefault();
        onNavigate(path);
    };

    return (
        <nav className="bg-black/50 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                
                <a href="/" onClick={(e) => handleNavClick(e, '/')} className="text-2xl font-bold group">
                    Futb<span className="text-brand-accent inline-block transition-transform duration-500 ease-in-out group-hover:rotate-180">⚽</span>l
                </a>

                <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
                    {navLinks.map((link) => (
                        <a 
                            key={link.title} 
                            href={link.path} 
                            onClick={(e) => handleNavClick(e, link.path)}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
                <button 
                    onClick={(e) => handleNavClick(e, '/builder')}
                    className="bg-brand-accent text-brand-dark font-bold py-2 px-5 rounded-full text-sm hover:bg-brand-accent-dark transition-colors cta-glow"
                >
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;