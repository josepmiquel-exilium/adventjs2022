function canExit(maze) {
    const findPos = (char) => {
        return maze.reduce((acc, curr, idx) => {
            const checkPos = curr.indexOf(char);
            if (checkPos >= 0) {
                acc.push(idx);
                acc.push(checkPos);
                return acc;
            }

            return acc;
        }, []);
    };

    const currPos = findPos('S');
    const endPos = findPos('E');
    const [endY, endX] = endPos;

    let block = 0;
    let prevY;
    let prevX;

    let [currY, currX] = currPos;

    const moveUp = () => {
        if (currY > 0) {
            currY -= 1;
            drawCurrPos();
            savePrevPos();
        } else {
            block++;
        }
    };

    const moveDown = () => {
        if (currY < maze.length - 1) {
            currY += 1;
            drawCurrPos();
            savePrevPos();
        } else {
            block++;
        }
    };

    const moveLeft = () => {
        if (currX > 0) {
            currX -= 1;
            drawCurrPos();
            savePrevPos();
        } else {
            block++;
        }
    };

    const moveRigth = () => {
        if (currX < maze[currY].length - 1) {
            currX += 1;
            drawCurrPos();
            savePrevPos();
        } else {
            block++;
        }
    };

    const savePrevPos = () => {
        prevX = currX;
        prevY = currY;
    };

    const drawCurrPos = () => {
        maze[currY][currX] = 'X';
    };

    const goBack = () => {
        currX = prevX;
        currY = prevY;
    };

    while (maze[endY][endX] !== 'X') {
        if (maze[currY][currX] === 'W' || maze[currY][currX] === 'B') {
            block++;
            goBack();
        }

        if (block === 3) {
            maze[currY][currX] = 'B';
            goBack();
        }

        console.log(endY, currY);

        if (endY < currY) {
            console.log('hola');
            moveUp();
        }

        console.log(maze);
    }

    return maze[endY][endX] === 'X';
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
