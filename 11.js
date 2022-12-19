function getCompleted(part, total) {
    const timeToSec = (time) => {
        const splited = time.split(':');

        const hourToSec = Number(splited[0]) * 3600;
        const minutesToSec = Number(splited[1]) * 60;

        return hourToSec + minutesToSec + Number(splited[2]);
    };

    const getFraction = (dec) => {
        let den;
        for (den = 1; (dec * den) % 1 !== 0; den++);
        return `${dec * den}/${den}`;
    };

    const doneInSec = timeToSec(part);
    const expectedInSec = timeToSec(total);

    const fraction = getFraction(doneInSec / expectedInSec);

    return fraction;
}
