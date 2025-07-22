import React from 'react'

const AboutUsHeroSection = () => {
    return (
        <section className="text-center relative overflow-hidden py-12">
            <div className="aurora-glow w-96 h-96 bg-brand-accent md:w-[40rem] md:h-80 top-0 left-1/2 -translate-x-1/2 opacity-20 md:opacity-15"></div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4 relative z-10">For the Love of <span className="text-brand-accent">the Game.</span></h1>
            <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto relative z-10">I'm a developer, designer, and a die-hard football fan dedicated to creating the ultimate tactical playground for strategists like you.</p>
        </section>
    )
}

export default AboutUsHeroSection
