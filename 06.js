function createCube(size) {
    const topSide = {
        left: '/\\',
        right: '_\\',
    };

    const bottomSide = {
        left: '\\/',
        right: '_/',
    };

    function repeat(func, times) {
        for (let x = 0; x < times; x++) {
            func();
        }
    }

    let topWalls = [];
    let bottomWalls = [];

    const constructTopSide = () => {
        const first = ' '.repeat(size - topWalls.length - 1);
        const second = topSide.left.repeat(topWalls.length + 1);
        const third = topSide.right.repeat(size);

        const wall = first + second + third + '\n';

        topWalls.push(wall);
    };

    const constructBottomSide = () => {
        const first = ' '.repeat(bottomWalls.length);
        const second = bottomSide.left.repeat(size - bottomWalls.length);
        const third = bottomSide.right.repeat(size);

        const wall = first + second + third + '\n';

        bottomWalls.push(wall);
    };

    repeat(constructTopSide, size);
    repeat(constructBottomSide, size);

    const construction = topWalls.join('') + bottomWalls.join('');

    return construction.slice(0, construction.length - 1);
}
