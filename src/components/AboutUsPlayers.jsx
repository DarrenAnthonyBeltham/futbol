import React from 'react'
import { players } from '../data/players'

const AboutUsPlayers = () => {
    return (
        <section>
            <div className='text-center mb-16'>
                <h2 className="text-3xl md:text-4xl font-bold">Featuring the World's Best</h2>
                <p className="text-brand-gray mt-2 text-lg">The superstars and legends available in the Futbol database.</p>
            </div>

            <div className='grid-cols-2 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {players.slice(0, 10).map(player => (
                    <div key={player.id} className="aspect-square rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutUsPlayers
