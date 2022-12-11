import * as _ from 'lodash';

type Instruction = 'noop' | `addx ${number}`
type Pixel = '.' | '#';

const instructions: Instruction[] = ["addx 2", "addx 3", "addx 3", "addx -2", "addx 4", "noop", "addx 1", "addx 4", "addx 1", "noop", "addx 4", "addx 1", "noop", "addx 2", "addx 5", "addx -28", "addx 30", "noop", "addx 5", "addx 1", "noop", "addx -38", "noop", "noop", "noop", "noop", "addx 5", "addx 5", "addx 3", "addx 2", "addx -2", "addx 2", "noop", "noop", "addx -2", "addx 12", "noop", "addx 2", "addx 3", "noop", "addx 2", "addx -31", "addx 32", "addx 7", "noop", "addx -2", "addx -37", "addx 1", "addx 5", "addx 1", "noop", "addx 31", "addx -25", "addx -10", "addx 13", "noop", "noop", "addx 18", "addx -11", "addx 3", "noop", "noop", "addx 1", "addx 4", "addx -32", "addx 15", "addx 24", "addx -2", "noop", "addx -37", "noop", "noop", "noop", "addx 5", "addx 5", "addx 21", "addx -20", "noop", "addx 6", "addx 19", "addx -5", "addx -8", "addx -22", "addx 26", "addx -22", "addx 23", "addx 2", "noop", "noop", "noop", "addx 8", "addx -10", "addx -27", "addx 33", "addx -27", "noop", "addx 34", "addx -33", "addx 2", "addx 19", "addx -12", "addx 11", "addx -20", "addx 12", "addx 18", "addx -11", "addx -14", "addx 15", "addx 2", "noop", "addx 3", "addx 2", "noop", "noop", "noop", "addx -33", "noop", "addx 1", "addx 2", "noop", "addx 3", "addx 4", "noop", "addx 1", "addx 2", "noop", "noop", "addx 7", "addx 1", "noop", "addx 4", "addx -17", "addx 18", "addx 5", "addx -1", "addx 5", "addx 1", "noop", "noop", "noop", "noop"];

const singleCycleInstructions: Instruction[] = _.flatten(instructions.map((inst): Instruction[] => {
    if (inst === 'noop') {
        return ['noop'];
    } else {
        return ['noop', inst];
    }
}));

let problem1Solution: number = 0;
const pixels: Pixel[] = [];

singleCycleInstructions.reduce<number>((acc, inst, i) => {

    if (Math.abs(acc - (i % 40)) <= 1) {
        pixels.push('#');
    } else {
        pixels.push('.');
    }

    if ([20, 60, 100, 140, 180, 220].includes(i + 1)) {
        problem1Solution += (i + 1) * acc;
    }

    if (inst !== 'noop') {

        const result = /^addx (.*)$/.exec(inst)!;
        const operand = parseInt(result[1]!);

        acc += operand

    }

    return acc;

}, 1)

const problem2Solution: string = _.chunk(pixels, 40).map((row) => row.join("")).join('\n');

console.log(problem1Solution);
console.log(problem2Solution);
