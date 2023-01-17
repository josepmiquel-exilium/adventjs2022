const rainingDays = (days) => {
    let totalRainyDays = 0;
    let totalQtyRain = 0;

    for (let i = 0; i < days.length; i++) {
        const day = days[i];

        if (day) {
            totalRainyDays++;
            totalQtyRain += day;
        }
    }

    const avgDaysRained = (totalRainyDays / days.length) * 100;

    return { totalRainyDays, totalQtyRain, avgDaysRained };
};

console.log(rainingDays([3.14, 15.2, 1.1, 0, 4.1, 0]));
