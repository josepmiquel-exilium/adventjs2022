const lastBackup = 1546300800;

const changes = [
    [3, 1546301100],
    [2, 1546300800],
    [1, 1546300800],
    [1, 1546300900],
    [1, 1546301000],
];

function getFilesToBackup(lastBackup, changes) {
    const ids = [];

    for (let index = 0; index < changes.length; index++) {
        const e = changes[index];
        if (e[1] > lastBackup) ids.push(e[0]);
    }
    return [...new Set(ids)].sort((a, b) => a - b);
}
