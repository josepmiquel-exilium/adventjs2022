// MOV Vxx,Vyy: copies the value from register Vxx to register Vyy;

// MOV n,Vxx: assign the numeric constant n to register Vxx (overwrite if already has a value);

// ADD Vxx,Vyy: calculates (Vxx + Ryy) and stores the result in Vxx;

// DEC Vxx: decrements Vxx value by 1.

// INC Vxx: increments Vxx value by 1.

// JMP i: jumps to instruction number i if V00 is different to 0.
// i is guaranteed to be a valid instruction number and 0 would be the first command.

// As the CPU is 8-bit, the number it could represent goes from 0 to 255.
// If you increment the number 255 causes overflow and results in 0.
// And if you decrement 0, it results in 255.
// Keep in mind then that number 280 is the same as 24 (280 - 256 = 24).

// After the last instruction has been executed, you should return an array with the result
// for every register. From V00 to V07. Examples:

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

console.log(executeCommands(['MOV 255,V00', 'INC V00', 'DEC V01', 'DEC V01']));

// Output: [14, 10, 0, 0, 0, 0, 0]
