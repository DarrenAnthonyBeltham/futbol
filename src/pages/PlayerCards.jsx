import React from 'react';
import { players } from '../data/players.js';
import PlayerStatCard from '../components/PlayerStatCard.jsx';

const PlayerCards = () => {
    return (
        <div className="bg-brand-dark min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-brand-light">Player <span className="text-brand-accent">Stats</span></h1>
                    <p className="text-brand-gray mt-2 text-lg">Explore the ratings and stats for every player.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {players.map(player => (
                        <PlayerStatCard key={player.id} player={player} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlayerCards;