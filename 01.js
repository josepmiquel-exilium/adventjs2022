function wrapping(gifts) {
    const startWrap = '\n*';
    const finishWrap = '*\n';
    let gifsWrapped = [];

    gifts.forEach((e) => {
        const paper = '*'.repeat(e.length + 2);
        const wrapped = `${paper}${startWrap}${e}${finishWrap}${paper}`;
        gifsWrapped.push(wrapped);
    });

    return gifsWrapped;
}
