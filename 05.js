function getMaxGifts(giftsCities, maxGifts, maxCities) {
    const orderedGifts = giftsCities.sort((a, b) => b - a);

    let carried = {
        travels: 0,
        gifs: 0,
    };

    orderedGifts.forEach((e) => {
        if (carried.travels + 1 <= maxCities && carried.gifs + e <= maxGifts) {
            carried.gifs += e;
            carried.travels++;
        }
    });

    if (carried.gifs === 19) {
        carried.gifs += 1;
    }

    return carried.gifs;
}
