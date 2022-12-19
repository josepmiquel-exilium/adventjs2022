function countTime(leds) {
    let secs = 0;

    function find(val, arr) {
        let results = [];
        let idx = arr.indexOf(val);
        while (idx != -1) {
            results.push(idx);
            idx = arr.indexOf(val, idx + 1);
        }
        return results;
    }

    while (leds.includes(0)) {
        let pos = find(1, leds);

        pos.forEach((e) => {
            e === leds.length - 1 ? (leds[0] = 1) : (leds[e + 1] = 1);
        });

        secs += 7;
    }

    return secs;
}
