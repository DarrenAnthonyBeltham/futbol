import React from 'react';

const PlayerCard = ({ player, isDraggable = true }) => {
    const handleDragStart = (e) => {
        if (isDraggable) {
            e.dataTransfer.setData("playerId", player.id);
        }
    };

    return (
        <div 
            draggable={isDraggable}
            onDragStart={handleDragStart}
            className={`glass-card p-3 rounded-lg flex items-center justify-between ${isDraggable ? 'cursor-grab' : 'cursor-default'}`}
        >
            <span className="font-bold text-white text-sm">{player.name}</span>
            <span className="bg-brand-accent text-brand-dark font-bold text-xs px-2 py-1 rounded-full">{player.rating}</span>
        </div>
    );
};

export default PlayerCard;
