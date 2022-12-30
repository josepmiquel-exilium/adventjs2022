function canExit(maze) {
    const entryRow = maze.findIndex((inner) => inner.indexOf('S') >= 0);
    const entryCol = maze[entryRow].findIndex((inner) => inner.indexOf('S') >= 0);

    const entry = [entryCol, entryRow];

    function goTo([x, y]) {
        const result = maze[y][x] === 'E';

        maze[y][x] = '-';

        const movements = [
            [x + 1, y],
            [x - 1, y],
            [x, y - 1],
            [x, y + 1],
        ];

        console.log(maze);

        return (
            result ||
            movements
                .filter((move) => maze[move[1]])
                .filter((move) => [' ', 'E'].includes(maze[move[1]][move[0]]))
                .some(goTo)
        );
    }

    const result = goTo(entry);

    return result;
}

console.log(
    canExit([
        [' ', ' ', ' ', 'E', ' '],
        [' ', ' ', ' ', 'W', 'W'],
        [' ', ' ', 'W', 'W', ' '],
        ['W', 'W', ' ', 'W', ' '],
        [' ', ' ', ' ', ' ', 'S'],
    ]) // -> true
);
