import React from 'react';

const navLinks = [
    { title: 'Builder', href: '#' },
    { title: 'Player Cards', href: '#' },
    { title: 'About', href: '#' },
];

const Navbar = () => {
    return (
        <nav className="bg-black/50 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold">Futb<span className="text-brand-accent">⚽</span>l</a>
                <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
                    {navLinks.map((link) => (
                        <a key={link.title} href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.title}</a>
                    ))}
                </div>
                <button className="bg-brand-accent text-brand-dark font-bold py-3 px-5 rounded-full text-sm hover:bg-brand-accent-dark transition-colors cta-glow">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;