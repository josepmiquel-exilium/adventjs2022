function checkStepNumbers(systemNames, stepNumbers) {
    return systemNames.every((item) => {
        const first = systemNames.indexOf(item);
        const last = systemNames.lastIndexOf(item);

        return stepNumbers[first] <= stepNumbers[last];
    });
}
