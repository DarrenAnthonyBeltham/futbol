import React from 'react'

const PlayerCardsHomepage = () => {
    return (
        <section>
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                 <div className="glass-card rounded-2xl p-4 transform md:-rotate-3 hover:rotate-0 transition-transform duration-500 order-last md:order-first">
                    <img src="https://placehold.co/600x400/111111/A3E635?text=Player+Card+UI" alt="Player Card UI Mockup" className="rounded-lg shadow-2xl"/>
                </div>

                <div className="relative">
                    <div class="aurora-glow w-80 h-80 bg-blue-500 -top-20 -right-20 opacity-10"></div>
                    <h2 class="text-4xl md:text-5xl font-extrabold mb-4">Create <span class="text-brand-accent">Iconic</span> Player Cards.</h2>
                    <p class="text-brand-gray text-lg leading-relaxed">
                        Generate sleek, professional player cards with custom stats, photos, and designs. Perfect for your social media, fantasy league, or personal collection.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PlayerCardsHomepage;
