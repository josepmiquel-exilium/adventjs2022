function decorateTree(base) {
    const decode = (str) => {
        const arr = str.split(' ');
        let decoded = '';

        arr.forEach((e, index) => {
            let key = e + arr[index + 1];

            if (combinations[key]) {
                decoded += combinations[key] + ' ';
            }
        });

        return decoded.substring(0, decoded.length - 1);
    };

    const combinations = {
        PP: 'P',
        BB: 'B',
        RR: 'R',
        BP: 'R',
        PB: 'R',
        RP: 'B',
        PR: 'B',
        BR: 'P',
        RB: 'P',
    };

    let tree = [base];

    while (tree[0].length !== 1) {
        tree.unshift(decode(tree[0]));
    }

    return tree;
}
