function executeCommands(commands) {
    const command = (comm, idx) => {
        const split = comm.split(/[\s,]+/);
        let val;

        switch (split[0]) {
            case 'MOV':
                if (Number(split[1])) {
                    voos[split[2]] = Number(split[1]);
                    break;
                } else {
                    voos[split[2]] = voos[split[1]];
                    break;
                }
            case 'ADD':
                val = voos[split[1]] + voos[split[2]];
                if (val > 255 || val < 0) {
                    val = readjust(val);
                }
                voos[split[1]] = val;
                break;
            case 'DEC':
                val = voos[split[1]] - 1;
                if (val > 255 || val < 0) {
                    val = readjust(val);
                }

                voos[split[1]] = val;
                break;
            case 'INC':
                val = voos[split[1]] + 1;
                if (val > 255 || val < 0) {
                    val = readjust(val);
                }
                voos[split[1]] = val;
                break;
            case 'JMP':
                const loop = commands.slice(Number(split[1]), idx);
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
    };

    const voos = [...Array(8).keys()].reduce((acc, idx) => {
        acc[`V0${idx}`] = 0;
        return acc;
    }, {});

    for (let idx = 0; idx < commands.length; idx++) {
        const el = commands[idx];
        command(el, idx);
    }

    return Object.values(voos);
}
