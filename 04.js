function fitsInOneBox(boxes) {
    const ord = boxes.sort((a, b) => a.l - b.l);

    let lastVal = {};

    const props = ['l', 'w', 'h'];

    let fit = true;

    ord.forEach((e) => {
        props.forEach((prop) => {
            e[prop] <= lastVal[prop] ? (fit = false) : (lastVal[prop] = e[prop]);
        });
    });

    return fit;
}
