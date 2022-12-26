function printTable(gifts) {
    const maxN = Math.max(...gifts.map((g) => g.name.length), 4);
    const maxQ = Math.max(...gifts.map((g) => String(g.quantity).length), 8);

    const top = `++${'+'.repeat(maxN)}+++${'+'.repeat(maxQ)}++`;
    const bottom = top.replaceAll('+', '*');

    const head = [
        { name: 'Gift', quantity: 'Quantity' },
        { name: '-'.repeat(maxN), quantity: '-'.repeat(maxQ) },
    ];

    const rows = head.concat(gifts).map(({ name, quantity }) => {
        const n = name.padEnd(maxN);
        const q = String(quantity).padEnd(maxQ);
        return `| ${n} | ${q} |\n`;
    });

    return top + '\n' + rows.join('') + bottom;
}
