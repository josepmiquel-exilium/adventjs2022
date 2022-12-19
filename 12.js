const distance = 30;
const sleighs = [
    { name: 'Gorusuke', consumption: 0.3 },
    { name: 'Madeval', consumption: 0.5 },
    { name: 'Lolivier', consumption: 0.7 },
    { name: 'Hyuuh', consumption: 1 },
];

function selectSleigh(distance, sleighs) {
    const battery = 20;

    const filtered = sleighs.filter((e) => {
        return e.consumption * distance <= battery;
    });

    return filtered.at(-1).name;
}
