import { TIERS } from '../data/tiers.js'

export const drawWeightedCards = (deck, drawCount = 5) => {
    const drawnCards = [];
    let availableCards = [...deck];

    // Safely reads the weight whether card.tier is a string ('common') or an object
    const getWeight = (card) => {
        if (typeof card.tier === 'string' && TIERS[card.tier]){
            return TIERS[card.tier].weight;
        }
        if (card.tier && typeof card.tier.weight === 'number'){
            return card.tier.weight;
        }
        return 1; // fallback weight 
    }

    for (let i = 0; i < drawCount; i++){
        // Add up the total weight of all cards still in the available deck
        const totalWeight = availableCards.reduce((sum, card) => sum + getWeight(card), 0);

        // picks a random number between 0 and total weight
        let randomNum = Math.random() * totalWeight;

        for (let j = 0; j < availableCards.length; j++){
            randomNum -= getWeight(availableCards[j]);

            // When the number drops to 0 or below, we found our card!
            if (randomNum <= 0){
                drawnCards.push(availableCards[j]);  // Add it to our hand
                availableCards.splice(j, 1);          // Remove it from the available pile
                break;                                // Stop the inner loop and draw the next card
            }
        }
    }

    return drawnCards;
};