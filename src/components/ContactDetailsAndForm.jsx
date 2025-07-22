import React, { useState } from 'react';

const ContactDetailsAndForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submission successful with data:', { name, email, message });
        
        setName('');
        setEmail('');
        setMessage('');

        setShowPopup(true);
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Contact Details</h3>
                        <p className="text-brand-gray">For general inquiries, support, or feedback, please don't hesitate to reach out.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-brand-accent tracking-wider uppercase">Email Me</h4>
                        <a href="mailto:hello@futbolapp.com" className="text-lg text-white hover:underline">hello@futbolapp.com</a>
                    </div>
                    <div>
                        <h4 className="font-semibold text-brand-accent tracking-wider uppercase">Follow Me</h4>
                        <div className="flex mt-2 space-x-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-accent transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-accent transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791-.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.34a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="glass-card rounded-2xl p-6 sm:p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-brand-gray mb-2">Full Name</label>
                            <input type="text" name="name" id="name" required className="w-full bg-brand-surface border border-white/20 rounded-lg p-3 text-white focus:ring-brand-accent focus:border-brand-accent" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-brand-gray mb-2">Email Address</label>
                            <input type="email" name="email" id="email" required className="w-full bg-brand-surface border border-white/20 rounded-lg p-3 text-white focus:ring-brand-accent focus:border-brand-accent" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-brand-gray mb-2">Message</label>
                            <textarea name="message" id="message" rows="4" required className="w-full bg-brand-surface border border-white/20 rounded-lg p-3 text-white focus:ring-brand-accent focus:border-brand-accent" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-brand-accent text-brand-dark font-bold py-3 px-6 rounded-full hover:bg-brand-accent-dark transition-colors">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm" aria-modal="true" role="dialog">
                    <div className="glass-card rounded-2xl p-8 shadow-xl text-center max-w-sm mx-4">
                        <svg className="w-16 h-16 mx-auto text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="mt-5 text-2xl font-bold text-white">Message Sent!</h3>
                        <p className="mt-2 text-brand-gray">Thank you for reaching out. We'll get back to you shortly.</p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-6 w-full bg-brand-accent text-brand-dark font-bold py-3 px-6 rounded-full hover:bg-brand-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-surface focus:ring-brand-accent"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactDetailsAndForm;