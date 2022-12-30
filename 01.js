function wrapping(gifts) {
    return gifts.reduce((acc, e) => {
        let p = '*'.repeat(e.length + 2);
        acc.push(`${p}\n*${e}*\n${p}`);
        return acc;
    }, []);
}
