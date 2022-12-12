import * as _ from 'lodash';

interface Monkey {
    number: number,
    items: bigint[],
    operation: (old: bigint) => bigint,
    divider: bigint,
    ifTrue: number,
    ifFalse: number,
    inspections: number,
}

const input: string = "Monkey 0:\n  Starting items: 50, 70, 89, 75, 66, 66\n  Operation: new = old * 5\n  Test: divisible by 2\n    If true: throw to monkey 2\n    If false: throw to monkey 1\n\nMonkey 1:\n  Starting items: 85\n  Operation: new = old * old\n  Test: divisible by 7\n    If true: throw to monkey 3\n    If false: throw to monkey 6\n\nMonkey 2:\n  Starting items: 66, 51, 71, 76, 58, 55, 58, 60\n  Operation: new = old + 1\n  Test: divisible by 13\n    If true: throw to monkey 1\n    If false: throw to monkey 3\n\nMonkey 3:\n  Starting items: 79, 52, 55, 51\n  Operation: new = old + 6\n  Test: divisible by 3\n    If true: throw to monkey 6\n    If false: throw to monkey 4\n\nMonkey 4:\n  Starting items: 69, 92\n  Operation: new = old * 17\n  Test: divisible by 19\n    If true: throw to monkey 7\n    If false: throw to monkey 5\n\nMonkey 5:\n  Starting items: 71, 76, 73, 98, 67, 79, 99\n  Operation: new = old + 8\n  Test: divisible by 5\n    If true: throw to monkey 0\n    If false: throw to monkey 2\n\nMonkey 6:\n  Starting items: 82, 76, 69, 69, 57\n  Operation: new = old + 7\n  Test: divisible by 11\n    If true: throw to monkey 7\n    If false: throw to monkey 4\n\nMonkey 7:\n  Starting items: 65, 79, 86\n  Operation: new = old + 5\n  Test: divisible by 17\n    If true: throw to monkey 5\n    If false: throw to monkey 0\n"

const monkeyRegex: RegExp = /^Monkey (\d+):\s*Starting items: ((?:\d+(?:,\s*)?)*)\s*Operation: new = ([^\n]*)\s*Test: divisible by (\d*)\s*If true: throw to monkey (\d*)\s*If false: throw to monkey (\d*)\s*$/;

const initialMonkeys: Monkey[] = input.split('\n\n').map((config): Monkey => {

    const result = monkeyRegex.exec(config);
    if (!result) {
        throw Error(`Monkey config did not conform to expected format: ${config}`);
    }

    // All assertions guaranteed by regex
    return {
        number: parseInt(result[1]!),
        items: result[2]!.split(',').map((str) => BigInt(str.trim())),
        operation: (old: bigint): bigint => eval(result[3]!.replace(/(\d+)/g, '$1n')),
        divider: BigInt(result[4]!),
        ifTrue: parseInt(result[5]!),
        ifFalse: parseInt(result[6]!),
        inspections: 0,
    };

});

const problem1Monkeys: Monkey[] = initialMonkeys;
const problem2Monkeys: Monkey[] = _.cloneDeep(initialMonkeys);

const modulo: bigint = initialMonkeys.map((monkey) => monkey.divider).reduce((x,y) => x * y, 1n);

function runRound(monkeys: Monkey[], worryModifier: (worry: bigint) => bigint) {

    monkeys.forEach((monkey) => {

        monkey.items.forEach((item) => {

            let worry: bigint = item;
            worry = monkey.operation(worry);
            worry = worryModifier(worry);

            if (worry % monkey.divider === 0n) {
                monkeys[monkey.ifTrue]!.items.push(worry);
            } else {
                monkeys[monkey.ifFalse]!.items.push(worry);
            }

            monkey.inspections++;

        });

        monkey.items = [];

    });

}

function getTopTwoInspectionsProduct(monkeys: Monkey[]): number {
    const inspections: number[] = monkeys.map((monkey) => monkey.inspections);
    return inspections.sort((x,y) => x - y).slice(-2).reduce((x,y) => x * y, 1);
}

for (let i = 0; i < 20; i++) {
    runRound(problem1Monkeys, (worry) => worry / 3n);
}

for (let i = 0; i < 10000; i++) {
    runRound(problem2Monkeys, (worry) => worry % modulo);
}

const problem1Solution: number = getTopTwoInspectionsProduct(problem1Monkeys);
const problem2Solution: number = getTopTwoInspectionsProduct(problem2Monkeys);

console.log(problem1Solution);
console.log(problem2Solution);
