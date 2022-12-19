const a1 = ['bike', 'car', 'bike', 'bike'];
const a2 = ['car', 'bike', 'doll', 'car'];
const a3 = ['bike', 'pc', 'pc'];

function getGiftsToRefill(a1, a2, a3) {
    return [...new Set([...a1, ...a2, ...a3])].filter((val) => {
        return a1.includes(val) + a2.includes(val) + a3.includes(val) === 1;
    });
}

const gifts = getGiftsToRefill(a1, a2, a3); // ['doll', 'pc']

console.log(gifts);
