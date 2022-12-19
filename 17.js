function carryGifts(gifts, maxWeight) {
    return gifts
        .reduce(
            (bags, gift, index) => {
                index = bags.length - 1;

                if (gift.length + bags[index].join('').length <= maxWeight) {
                    bags[index].push(gift);
                } else if (gift.length <= maxWeight) {
                    bags.push([gift]]);
                }

                return bags;
            },
            [[]] // initial value
        )
        .filter((bag) => bag.length > 0)
        .map((bag) => bag.join(' '));
}

