import React from 'react'
import JobOpening from '../components/JobOpening'

const Careers = () => {
    return (
        <div className="bg-brand-dark min-h-screen">
            <div className="container mx-auto px-6 py-16 sm:py-24">

                <section className="text-center mb-16 relative overflow-hidden py-12">
                    <div className="aurora-glow w-96 h-96 md:w-[40rem] md:h-80 bg-brand-accent top-0 left-1/2 -translate-x-1/2 opacity-20 md:opacity-15"></div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4 relative z-10">
                        Join the <span className="text-brand-accent">Squad.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto relative z-10">
                        I'm looking for passionate, talented individuals to help shape the future of football tactics.
                    </p>
                </section>

                <section className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work at Futbol?</h2>
                    <div className="text-brand-gray text-lg leading-relaxed space-y-6">
                        <p>
                            This isn't just a job; it's a chance to be part of a project driven by a pure love for football. As a small, focused team, every contribution matters. You'll have a direct impact on a product used by thousands of fans and coaches worldwide. We value creativity, collaboration, and a relentless desire to build beautiful, functional tools.
                        </p>
                    </div>
                </section>

                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Open Positions</h2>
                        <p className="text-brand-gray mt-2 text-lg">Find your role on the pitch.</p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        <JobOpening title="Senior Frontend Developer (React)" location="Remote" type="Full-time" />
                        <JobOpening title="Product Designer (UI/UX)" location="Remote" type="Full-time" />
                        <JobOpening title="Football Data Analyst" location="Remote" type="Part-time" />
                        <JobOpening title="Community Manager" location="Remote" type="Contract" />
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Careers
