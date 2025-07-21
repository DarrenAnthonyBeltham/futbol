import React from 'react';

const productLinks = [
    { title: 'Builder', path: '/builder' },
    { title: 'Player Cards', path: '/cards' },
    { title: 'Stats', path: '/stats' },
];

const companyLinks = [
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Careers', path: '/careers' },
];

const Footer = ({ onNavigate }) => {
    const handleNavClick = (e, path) => {
        e.preventDefault();
        onNavigate(path);
    };

    return (
        <footer className="border-t border-white/10 mt-20">
            <div className="container mx-auto px-6 py-12 text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold">Futb<span className="text-brand-accent">⚽</span>l</h3>
                        <p className="mt-2 text-sm text-brand-gray">&copy; 2025 Futbol Inc. <br />The beautiful game, visualized.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-brand-gray tracking-wider uppercase">Product</h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            {productLinks.map(link => (
                                <li key={link.title}>
                                    <a href={link.path} onClick={(e) => handleNavClick(e, link.path)} className="hover:text-brand-accent">{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-brand-gray tracking-wider uppercase">Company</h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            {companyLinks.map(link => (
                                <li key={link.title}>
                                    <a href={link.path} onClick={(e) => handleNavClick(e, link.path)} className="hover:text-brand-accent">{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-brand-gray">Follow Us</h4>
                        <div className="flex mt-4 space-x-4 justify-center md:justify-start">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.34a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd"></path></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;