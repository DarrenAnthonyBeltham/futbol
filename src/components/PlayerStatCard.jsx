import React from 'react';

const PlayerStatCard = ({ player }) => {
    const getPositionColor = (pos) => {
        switch (pos) {
            case 'FWD': return 'bg-red-500/20 text-red-400 border-red-400/50';
            case 'MID': return 'bg-green-500/20 text-green-400 border-green-400/50';
            case 'DEF': return 'bg-blue-500/20 text-blue-400 border-blue-400/50';
            case 'GK': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/50';
            default: return 'bg-gray-500/20 text-gray-400 border-gray-400/50';
        }
    };

    const stats = player.stats;
    const isGk = player.position === 'GK';

    return (
        <div className="glass-card rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div 
                className="h-40 bg-cover bg-center relative p-3 flex flex-col justify-between"
                style={{ backgroundImage: `linear-gradient(to top, rgba(29,29,29,1) 5%, rgba(29,29,29,0) 40%), url(${player.image})` }}
            >
                <div className="flex justify-between items-start">
                    <div className={`text-xs font-bold uppercase px-2 py-1 rounded-full inline-block border ${getPositionColor(player.position)}`}>
                        {player.position}
                    </div>
                    <div className="bg-brand-accent text-brand-dark text-2xl font-black w-12 h-12 rounded-full flex items-center justify-center">
                        {player.rating}
                    </div>
                </div>
                <div>
                    <h3 className="text-white text-2xl font-bold drop-shadow-lg">{player.name}</h3>
                    <p className="text-sm text-gray-300 drop-shadow-md">{player.club}</p>
                </div>
            </div>
            
            <div className="p-4 bg-brand-surface">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p className="text-2xl font-bold text-white">{isGk ? stats.div : stats.pac}</p>
                        <p className="text-xs text-brand-gray">{isGk ? 'DIV' : 'PAC'}</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">{isGk ? stats.han : stats.sho}</p>
                        <p className="text-xs text-brand-gray">{isGk ? 'HAN' : 'SHO'}</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">{isGk ? stats.kic : stats.pas}</p>
                        <p className="text-xs text-brand-gray">{isGk ? 'KIC' : 'PAS'}</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">{isGk ? stats.ref : stats.dri}</p>
                        <p className="text-xs text-brand-gray">{isGk ? 'REF' : 'DRI'}</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">{isGk ? stats.spd : stats.def}</p>
                        <p className="text-xs text-brand-gray">{isGk ? 'SPD' : 'DEF'}</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">{isGk ? stats.pos : stats.phy}</p>
                        <p className="text-xs text-brand-gray">{isGk ? 'POS' : 'PHY'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerStatCard;
