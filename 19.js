const toys = ['ball', 'doll', 'car', 'puzzle'];
const positions = [2, 3, 1, 0];

function sortToys(toys, positions) {
    let obj = {};

    toys.forEach((toy, index) => {
        obj[toy] = positions[index];
    });

    return Object.keys(Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => a - b)));
}
