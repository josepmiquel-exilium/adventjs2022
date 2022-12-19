function distributeGifts(packOfGifts, reindeers) {
    const packWeights = packOfGifts.reduce((a, b) => a + b.length, 0);
    const canCarry = reindeers.reduce((a, b) => a + b.length * 2, 0);

    return Math.floor(canCarry / packWeights);
}
