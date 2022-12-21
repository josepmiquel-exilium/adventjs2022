function howManyReindeers(reindeerTypes, gifts) {
    return gifts.map(({ weight, country }) => {
        const fReindeer = reindeerTypes
            .filter((r) => r.weightCapacity < weight)
            .sort((a, b) => b.weightCapacity - a.weightCapacity);

        let totalSum = fReindeer.reduce((sum, r) => sum + r.weightCapacity, 0);

        let reindeers = fReindeer.map((r) => {
            const num = Math.floor(weight / totalSum);
            weight -= num * r.weightCapacity;
            totalSum -= r.weightCapacity;
            return { type: r.type, num: num };
        });
        return { country, reindeers };
    });
}
