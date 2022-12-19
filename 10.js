function checkJump(heights) {
    const topNumber = Math.max(...heights);
    const indexTopNumber = heights.indexOf(topNumber);

    const fPart = heights.slice(0, indexTopNumber);
    const lPart = heights.slice(indexTopNumber + 1, heights.length);

    return (
        heights.at(0) !== topNumber &&
        heights.at(-1) !== topNumber &&
        fPart.join('') === [...fPart].sort().join('') &&
        lPart.join('') === [...lPart].sort().reverse().join('')
    );
}
