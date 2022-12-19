function checkPart(part) {
    let wordSplited = part.split('');
    let options = [];

    wordSplited.forEach((e, index) => {
        wordSplited.splice(index, 1);
        options.push(wordSplited.join(''));
        wordSplited = part.split('');
    });

    return (
        options.filter((e) => {
            return e.split('').reverse().join('') === e;
        }).length > 0
    );
}
