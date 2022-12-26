function executeCommands(commands) {
    const command = (comm, idx) => {
        const [zero, one, two] = comm.split(/[\s,]+/);
        let val;

        switch (zero) {
            case 'MOV':
                if (Number(one) || Number(one) === 0) {
                    voos[two] = Number(one);
                    break;
                } else {
                    voos[two] = voos[one];
                    break;
                }
            case 'ADD':
                val = voos[one] + voos[two];
                val = readjust(val);
                voos[one] = val;
                break;
            case 'DEC':
                val = voos[one] - 1;
                val = readjust(val);
                voos[one] = val;
                break;
            case 'INC':
                val = voos[one] + 1;
                val = readjust(val);
                voos[one] = val;
                break;
            case 'JMP':
                const loop = commands.slice(Number(one), idx);
                while (voos['V00'] > 0) {
                    loop.forEach((el) => {
                        command(el);
                    });
                }
                break;
            default:
                break;
        }
    };

    const readjust = (value) => {
        if (value > 255) return value % 256;

        if (value < 0) return 256 - Math.abs(value);

        return value;
    };

    const voos = [...Array(8).keys()].reduce((acc, idx) => {
        acc[`V0${idx}`] = 0;
        return acc;
    }, {});

    commands.forEach((el, idx) => {
        command(el, idx);
    });

    return Object.values(voos);
}

console.log(executeCommands(['MOV 5,V00', 'MOV 10,V01', 'DEC V00', 'ADD V00,V01']));
