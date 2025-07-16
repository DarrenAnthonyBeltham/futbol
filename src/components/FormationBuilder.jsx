import React from 'react'

const FormationBuilder = () => {
    return (
        <section className="py-20 md:py-32 space-y-20 md:spaye-y-32">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="aurora-glow w-80 h-80 bg-brand-accent -top-20 -left-20 opacity-10"></div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">The Most <span className="text-brand-accent">Flexible</span> Builder.</h2>
                    <p className="text-brand-gray text-lg leading-relaxed">Go beyond standard formations. Our builder gives you complete control to tweak positions, add custom notes, and visualize your team's strategy in stunning detail.</p>
                </div>

                <div className="glass-card rounded-2xl p-4 transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src="https://placehold.co/600x400/111111/A3E635?text=Formation+Builder+UI" alt="Formation Builder UI Mockup" className="rounded-lg shadow-2xl"/>
                </div>
            </div>
        </section>
    );
};

export default FormationBuilder
