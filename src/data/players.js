const calculateRating = (player) => {
    const { stats, position } = player;
    let rating = 0;

    if (position === 'GK') {
        rating = Math.round(
            (stats.div * 0.22) +
            (stats.han * 0.22) +
            (stats.kic * 0.11) +
            (stats.ref * 0.22) +
            (stats.spd * 0.11) +
            (stats.pos * 0.12)
        );
    } else {
        const weights = {
            FWD: { pac: 0.20, sho: 0.25, pas: 0.15, dri: 0.25, def: 0.05, phy: 0.10 },
            MID: { pac: 0.15, sho: 0.15, pas: 0.25, dri: 0.20, def: 0.10, phy: 0.15 },
            DEF: { pac: 0.15, sho: 0.05, pas: 0.15, dri: 0.10, def: 0.30, phy: 0.25 },
        };
        const posWeights = weights[position];
        rating = Math.round(
            (stats.pac * posWeights.pac) +
            (stats.sho * posWeights.sho) +
            (stats.pas * posWeights.pas) +
            (stats.dri * posWeights.dri) +
            (stats.def * posWeights.def) +
            (stats.phy * posWeights.phy)
        );
    }
    return rating;
};

const rawPlayers = [
    { id: 1, name: 'Lamine Yamal', position: 'FWD', club: 'FC Barcelona', image: '../asset/lamineyamal.webp', stats: { pac: 92, sho: 80, pas: 82, dri: 91, def: 40, phy: 68 } },
    { id: 2, name: 'Raphinha', position: 'FWD', club: 'FC Barcelona', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Raphinha', stats: { pac: 91, sho: 82, pas: 80, dri: 87, def: 45, phy: 70 } },
    { id: 3, name: 'Harry Kane', position: 'FWD', club: 'Bayern Munich', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Kane', stats: { pac: 75, sho: 96, pas: 85, dri: 84, def: 50, phy: 88 } },
    { id: 4, name: 'Cole Palmer', position: 'MID', club: 'Chelsea FC', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Palmer', stats: { pac: 84, sho: 85, pas: 88, dri: 90, def: 60, phy: 72 } },
    { id: 5, name: 'Jude Bellingham', position: 'MID', club: 'Real Madrid', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Bellingham', stats: { pac: 90, sho: 88, pas: 92, dri: 94, def: 80, phy: 88 } },
    { id: 6, name: 'Declan Rice', position: 'MID', club: 'Arsenal FC', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Rice', stats: { pac: 82, sho: 75, pas: 86, dri: 84, def: 90, phy: 91 } },
    { id: 7, name: 'Nuno Mendes', position: 'DEF', club: 'Paris Saint-Germain', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Mendes', stats: { pac: 94, sho: 68, pas: 80, dri: 85, def: 84, phy: 80 } },
    { id: 8, name: 'William Saliba', position: 'DEF', club: 'Arsenal FC', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Saliba', stats: { pac: 88, sho: 55, pas: 78, dri: 75, def: 92, phy: 89 } },
    { id: 9, name: 'Virgil van Dijk', position: 'DEF', club: 'Liverpool FC', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Van+Dijk', stats: { pac: 84, sho: 65, pas: 80, dri: 78, def: 95, phy: 93 } },
    { id: 10, name: 'Kyle Walker', position: 'DEF', club: 'Manchester City', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Walker', stats: { pac: 96, sho: 70, pas: 82, dri: 83, def: 85, phy: 86 } },
    { id: 11, name: 'Alisson Becker', position: 'GK', club: 'Liverpool FC', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Alisson', stats: { div: 92, han: 90, kic: 88, ref: 94, spd: 60, pos: 91 } },
    { id: 12, name: 'Kylian Mbappé', position: 'FWD', club: 'Real Madrid', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Mbappe', stats: { pac: 98, sho: 94, pas: 85, dri: 95, def: 42, phy: 80 } },
    { id: 13, name: 'Florian Wirtz', position: 'MID', club: 'Bayer Leverkusen', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Wirtz', stats: { pac: 88, sho: 84, pas: 90, dri: 94, def: 55, phy: 70 } },
    { id: 14, name: 'Rodri', position: 'MID', club: 'Manchester City', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=Rodri', stats: { pac: 75, sho: 80, pas: 92, dri: 88, def: 88, phy: 89 } },
    { id: 15, name: 'T. Alexander-Arnold', position: 'DEF', club: 'Liverpool FC', image: 'https://placehold.co/300x300/1A1A1A/FFFFFF?text=TAA', stats: { pac: 85, sho: 82, pas: 95, dri: 86, def: 82, phy: 78 } },
];

export const players = rawPlayers.map(p => ({
    ...p,
    rating: calculateRating(p),
}));
