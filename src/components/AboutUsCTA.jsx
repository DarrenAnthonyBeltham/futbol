import React from 'react'

const AboutUsCTA = () => {
    return (
        <section className="mt-20 md:mt-32">
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Join Our Community</h2>
                <p className="text-brand-gray text-lg max-w-2xl mx-auto mb-8">Ready to bring your own football ideas to life? Start building your dream team today.</p>
                <a href="#" className="bg-brand-accent text-brand-dark font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-accent-dark transition-all duration-300 inline-block transform hover:scale-105 cta-glow">Start Building for Free</a>
            </div>
        </section>
    )
}

export default AboutUsCTA
