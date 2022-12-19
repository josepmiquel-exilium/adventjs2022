function getOptimalPath(path) {
    const minor = (number) => Math.min(...number);
    let pos;
    let total = 0;

    path.reverse().forEach((e, index) => {
        if (!index) {
            const firstMinor = minor(e);
            total += firstMinor;
            pos = e.indexOf(firstMinor);
            return;
        }

        if (index === path.length - 1) {
            total += e[0];
            return;
        }

        const cut = e.slice(pos - 2, pos);
        const ref = minor(cut);
        total += ref;
        pos = e.indexOf(ref);
        console.log(total);
    });

    return total;
}
