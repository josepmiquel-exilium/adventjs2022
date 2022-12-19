function getGiftsToRefill(a1, a2, a3) {
    const items = [...new Set([].concat(a1, a2, a3))];
    let toBuy = [];

    items.forEach((item) => {
        let counter = 0;

        [a1, a2, a3].forEach((store) => {
            if (store.includes(item)) {
                counter++;
            }
        });

        if (counter < 2) {
            toBuy.push(item);
        }
    });

    return toBuy;
}
