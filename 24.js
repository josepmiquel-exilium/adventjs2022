function canExit(maze) {
    const startPos = maze.reduce((acc, curr, idx) => {
        const checkPos = curr.indexOf('S');
        if (checkPos >= 0) {
            acc.push(idx);
            acc.push(checkPos);
            return acc;
        }

        return acc;
    }, []);

    const endPos = maze.reduce((acc, curr, idx) => {
        const checkPos = curr.indexOf('E');
        if (checkPos >= 0) {
            acc.push(idx);
            acc.push(checkPos);
            return acc;
        }

        return acc;
    }, []);

    let pointer = startPos;

    return pointer;
}

console.log(
    canExit([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E'],
    ]) // -> true
);
