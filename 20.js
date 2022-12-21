function howManyReindeers(reindeerTypes, gifts) {
    reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity);

    const extractReindeers = ({ country, weight }) => {
        let extracted = { country };
        let total = 0;

        let reindeers = reindeerTypes.reduce((acc, reindeer) => {
            let obj = {};

            obj['type'] = reindeer.type;
            obj['num'] = 0;

            acc.push(obj);

            return acc;
        }, []);

        while (total < weight) {
            reindeerTypes.forEach((reindeer) => {
                if (total + reindeer.weightCapacity <= weight) {
                    total += reindeer.weightCapacity;

                    let objIdx = reindeers.findIndex((e) => {
                        return e.type == reindeer.type;
                    });

                    reindeers[objIdx].num++;
                }
            });
        }

        extracted.reindeers = reindeers.reverse().filter((e) => e.num > 0);

        return extracted;
    };

    return gifts.reduce((acc, gift) => {
        acc.push(extractReindeers(gift));
        return acc;
    }, []);
}
