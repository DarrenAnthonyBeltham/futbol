import React from 'react';
import PlayerCard from './PlayerCard.jsx';

const PlayerSlot = ({ position, onDrop, placedPlayer }) => {
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDrop={onDrop}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-48 h-20"
            style={{ top: position.top, left: position.left }}
        >
            {placedPlayer ? (
                <PlayerCard player={placedPlayer} isDraggable={false} />
            ) : (
                <div className="w-full h-full border-2 border-dashed border-white/20 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-white/10">
                    <span className="text-white/30 text-sm">Drop Player</span>
                </div>
            )}
        </div>
    );
};

export default PlayerSlot;
