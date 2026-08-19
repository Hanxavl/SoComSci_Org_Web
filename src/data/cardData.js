import cardsJSON from './cards.json'

const TIER_BY_ID = {
    '01': 'rare',         // Ash Baby
    '02': 'mythical',     // Palambing
    '03': 'uncommon',     // Pinagpalit
    '04': 'rare',         // Bimby
    '05': 'veryrare',     // Code
    '06': 'common',       // Iced Coffee
    '07': 'rare',         // Dog Flower
    '08': 'uncommon',     // Kayang Kaya
    '09': 'common',       // Laptop Kain
    '10': 'common',       // Milo
    '11': 'common',       // Miss U
    '12': 'rare',         // Monkeys
    '13': 'uncommon',     // Move On
    '14': 'common',       // Nagkaon
    '15': 'common',       // Mental Breakdown
    '16': 'common',       // Posture Check
    '17': 'veryrare',     // Relieved Tony
    '18': 'uncommon',     // Second Choice
    '19': 'rare',         // Shrek Swamp
    '20': 'common',       // Single
    '21': 'uncommon',     // Son
    '22': 'uncommon',     // The Squad
    '23': 'rare',         // Taek
    '24': 'uncommon',     // Talking Stage
    '25': 'common',       // Walang Pera
    '26': 'legendary',    // Yayaman
    '27': 'veryrare',     // ANOVA
    '28': 'veryrare',     // Kabisado
    '29': 'legendary',    // Youngstunna
    '30': 'legendary',    // Mang-aagaw
    '31': 'lucky',        // Lucky
}

// Combines the raw JSON data with its assigned rarity tier and dynamically resolves the image path for Vite.
export const CARDS = cardsJSON.map(c => ({
    ...c,
    tier: TIER_BY_ID[c.id],
    frontImg: new URL(`../assets/charotCards/front/${c.card_source}`, import.meta.url).href
}));