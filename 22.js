function checkStepNumbers(systemNames, stepNumbers) {
    let seq = {};
    let check = true;

    systemNames.forEach((e, idx) => {
        seq[e] >= stepNumbers[idx] ? (check = false) : (seq[e] = stepNumbers[idx]);
    });

    return check;
}
