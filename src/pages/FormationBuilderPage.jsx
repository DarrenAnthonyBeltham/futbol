import React, { useState, useMemo } from 'react';
import { players } from '../data/players.js';
import { formations } from '../data/formation.js';
import PlayerSlot from '../components/PlayerSlot.jsx';
import PlayerCard from '../components/PlayerCard.jsx';
import FootballField from '../asset/Football_field.png';

const FormationBuilderPage = () => {
    const [selectedFormation, setSelectedFormation] = useState('4-3-3');
    const [team, setTeam] = useState(Array(11).fill(null));

    const handleFormationChange = (e) => {
        setSelectedFormation(e.target.value);
        setTeam(Array(11).fill(null));
    };

    const handleDrop = (e, slotIndex) => {
        const playerId = e.dataTransfer.getData("playerId");
        const player = players.find(p => p.id.toString() === playerId);
        const slotType = formations[selectedFormation][slotIndex].type;

        if (player && player.position === slotType && !team.some(p => p?.id === player.id)) {
            const newTeam = [...team];
            newTeam[slotIndex] = player;
            setTeam(newTeam);
        }
    };

    const formationLayout = formations[selectedFormation];

    const teamRating = useMemo(() => {
        const placedPlayers = team.filter(p => p !== null);
        if (placedPlayers.length === 0) {
            return 0;
        }
        const totalRating = placedPlayers.reduce((sum, player) => sum + player.rating, 0);
        return Math.round(totalRating / placedPlayers.length);
    }, [team]);

    return (
        <div className="bg-brand-dark min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">              
                    <div className="lg:col-span-2">
                        <div className="relative w-full rounded-xl shadow-2xl">
                            <img src={FootballField} alt="Football field" className="w-full h-auto rounded-xl" />
                            {formationLayout.map((position, index) => (
                                <PlayerSlot 
                                    key={index}
                                    position={position}
                                    onDrop={(e) => handleDrop(e, index)}
                                    placedPlayer={team[index]}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="glass-card rounded-xl p-6 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold text-white">Team Setup</h2>
                            <div className="text-right">
                                <span className="block text-xs font-medium text-brand-gray">Overall Rating</span>
                                <span className="text-4xl font-black text-brand-accent">{teamRating}</span>
                            </div>
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="formation" className="block text-sm font-medium text-brand-gray mb-2">Formation</label>
                            <select 
                                id="formation"
                                value={selectedFormation}
                                onChange={handleFormationChange}
                                className="w-full bg-brand-surface border border-white/20 rounded-lg p-2 text-white focus:ring-brand-accent focus:border-brand-accent"
                            >
                                {Object.keys(formations).map(formation => (
                                    <option key={formation} value={formation}>{formation}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex-grow overflow-hidden flex flex-col">
                            <h3 className="font-bold text-white mb-3">Player Roster</h3>
                            <div className="space-y-3 flex-grow overflow-y-auto pr-2">
                                {players.map(player => (
                                    <PlayerCard key={player.id} player={player} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormationBuilderPage;
