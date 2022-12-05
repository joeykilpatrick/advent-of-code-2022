import * as _ from 'lodash';

type Crate = `[${string}]`
type MoveString = `move ${number} from ${number} to ${number}`
type Move = { quantity: number, from: number, to: number }

class Shipyard {

    private crates: Crate[][];
    constructor(crates: Crate[][]) {
        this.crates = crates.slice();
    }

    getCrates(): Crate[][] {
        return this.crates;
    }

    private pollCratesFromColumn(column: number, quantity: number): Crate[] {
        const columnCrates: Crate[] = this.crates[column] || [];
        return columnCrates.slice(0, quantity);
    }
    
    private removeCratesFromColumn(column: number, quantity: number): void {
        this.crates[column] ||= [];
        this.crates[column] = this.crates[column]!.slice(quantity); // Assertion guaranteed by line above
    }

    private addCratesToColumn(column: number, crates: Crate[]): void {
        this.crates[column] ||= [];
        this.crates[column] = [...crates, ...this.crates[column]!]; // Assertion guaranteed by line above
    }

    moveCrates(move: Move, cratesTransformer?: (crates: Crate[]) => Crate[]): void {
        const movingCrates = this.pollCratesFromColumn(move.from, move.quantity);
        const transformer = cratesTransformer || ((a) => a);
        this.removeCratesFromColumn(move.from, move.quantity);
        this.addCratesToColumn(move.to, transformer(movingCrates));
    }
}

const cratesStrings = ["[G]                 [D] [R]        ", "[W]         [V]     [C] [T] [M]    ", "[L]         [P] [Z] [Q] [F] [V]    ", "[J]         [S] [D] [J] [M] [T] [V]", "[B]     [M] [H] [L] [Z] [J] [B] [S]", "[R] [C] [T] [C] [T] [R] [D] [R] [D]", "[T] [W] [Z] [T] [P] [B] [B] [H] [P]", "[D] [S] [R] [D] [G] [F] [S] [L] [Q]"]

const crateHorizontalLines: Crate[][] = cratesStrings.map((line) => {
    const fourLetterChunks: string[][] = _.chunk(line.split(""), 4);
    return fourLetterChunks.map((lineChunks) => lineChunks.join("").trim() as Crate || null);
})

const initialCrates: Crate[][] = _.zip(...crateHorizontalLines).map(_.compact);

const movesStrings: MoveString[] = ["move 1 from 3 to 5", "move 5 from 5 to 4", "move 6 from 7 to 3", "move 6 from 1 to 3", "move 1 from 1 to 9", "move 1 from 1 to 4", "move 3 from 6 to 9", "move 2 from 7 to 5", "move 1 from 5 to 7", "move 1 from 7 to 2", "move 2 from 2 to 5", "move 2 from 6 to 3", "move 6 from 8 to 9", "move 7 from 3 to 9", "move 1 from 8 to 7", "move 8 from 9 to 7", "move 5 from 4 to 8", "move 1 from 6 to 2", "move 2 from 8 to 4", "move 9 from 9 to 1", "move 2 from 8 to 5", "move 1 from 8 to 5", "move 5 from 9 to 2", "move 1 from 6 to 8", "move 5 from 1 to 7", "move 1 from 8 to 2", "move 2 from 1 to 7", "move 1 from 2 to 6", "move 4 from 5 to 4", "move 2 from 1 to 4", "move 13 from 7 to 8", "move 3 from 8 to 6", "move 2 from 6 to 8", "move 10 from 3 to 5", "move 2 from 7 to 6", "move 3 from 5 to 6", "move 10 from 8 to 1", "move 1 from 8 to 6", "move 6 from 2 to 4", "move 1 from 5 to 8", "move 5 from 6 to 3", "move 2 from 8 to 6", "move 1 from 7 to 9", "move 2 from 2 to 7", "move 3 from 5 to 1", "move 2 from 7 to 2", "move 6 from 6 to 3", "move 7 from 5 to 6", "move 5 from 3 to 2", "move 10 from 1 to 8", "move 2 from 1 to 3", "move 8 from 3 to 7", "move 9 from 4 to 8", "move 1 from 9 to 2", "move 2 from 7 to 8", "move 4 from 6 to 9", "move 1 from 4 to 9", "move 5 from 7 to 4", "move 3 from 6 to 5", "move 1 from 1 to 5", "move 14 from 4 to 8", "move 3 from 9 to 7", "move 4 from 5 to 9", "move 2 from 4 to 1", "move 27 from 8 to 6", "move 2 from 7 to 2", "move 2 from 7 to 4", "move 4 from 2 to 9", "move 7 from 8 to 4", "move 10 from 4 to 1", "move 18 from 6 to 5", "move 6 from 9 to 2", "move 1 from 9 to 5", "move 11 from 2 to 6", "move 2 from 5 to 4", "move 1 from 2 to 8", "move 2 from 4 to 9", "move 2 from 8 to 3", "move 1 from 6 to 8", "move 4 from 9 to 7", "move 4 from 7 to 8", "move 7 from 5 to 1", "move 4 from 6 to 3", "move 2 from 3 to 7", "move 6 from 5 to 3", "move 2 from 8 to 2", "move 14 from 6 to 2", "move 3 from 8 to 1", "move 15 from 2 to 3", "move 1 from 6 to 1", "move 14 from 3 to 2", "move 2 from 2 to 5", "move 1 from 9 to 3", "move 13 from 1 to 3", "move 4 from 2 to 6", "move 10 from 1 to 3", "move 2 from 6 to 9", "move 6 from 2 to 9", "move 6 from 5 to 2", "move 2 from 6 to 8", "move 7 from 9 to 5", "move 1 from 5 to 8", "move 2 from 7 to 6", "move 34 from 3 to 6", "move 19 from 6 to 2", "move 12 from 6 to 9", "move 3 from 6 to 3", "move 2 from 3 to 2", "move 1 from 6 to 5", "move 17 from 2 to 8", "move 2 from 3 to 2", "move 8 from 9 to 4", "move 7 from 5 to 2", "move 5 from 4 to 1", "move 4 from 1 to 6", "move 1 from 1 to 6", "move 6 from 6 to 8", "move 2 from 8 to 4", "move 17 from 8 to 6", "move 2 from 4 to 5", "move 17 from 6 to 9", "move 22 from 9 to 7", "move 1 from 5 to 2", "move 20 from 2 to 7", "move 29 from 7 to 9", "move 1 from 4 to 7", "move 3 from 8 to 3", "move 1 from 8 to 5", "move 3 from 8 to 2", "move 2 from 2 to 4", "move 27 from 9 to 7", "move 2 from 3 to 2", "move 1 from 5 to 2", "move 18 from 7 to 5", "move 1 from 3 to 2", "move 1 from 5 to 6", "move 18 from 5 to 3", "move 1 from 6 to 3", "move 2 from 9 to 5", "move 10 from 3 to 5", "move 4 from 3 to 6", "move 1 from 7 to 1", "move 1 from 5 to 1", "move 6 from 7 to 6", "move 1 from 6 to 2", "move 4 from 4 to 8", "move 5 from 5 to 4", "move 1 from 3 to 8", "move 2 from 1 to 8", "move 2 from 2 to 5", "move 3 from 3 to 8", "move 6 from 8 to 2", "move 1 from 3 to 9", "move 1 from 6 to 3", "move 6 from 2 to 8", "move 7 from 8 to 4", "move 8 from 5 to 2", "move 5 from 4 to 6", "move 2 from 8 to 3", "move 2 from 3 to 9", "move 1 from 3 to 9", "move 2 from 7 to 1", "move 2 from 1 to 2", "move 12 from 2 to 4", "move 1 from 9 to 7", "move 1 from 6 to 2", "move 9 from 7 to 9", "move 1 from 8 to 2", "move 9 from 9 to 8", "move 6 from 7 to 8", "move 4 from 4 to 1", "move 6 from 2 to 5", "move 1 from 4 to 9", "move 3 from 1 to 9", "move 6 from 4 to 5", "move 5 from 8 to 9", "move 8 from 4 to 6", "move 3 from 9 to 8", "move 1 from 9 to 3", "move 3 from 8 to 3", "move 5 from 9 to 2", "move 3 from 2 to 6", "move 3 from 6 to 9", "move 3 from 6 to 2", "move 4 from 2 to 6", "move 6 from 9 to 7", "move 1 from 1 to 8", "move 8 from 8 to 5", "move 20 from 5 to 3", "move 2 from 2 to 8", "move 6 from 7 to 1", "move 10 from 6 to 3", "move 4 from 6 to 7", "move 4 from 1 to 9", "move 2 from 1 to 2", "move 3 from 6 to 9", "move 5 from 8 to 3", "move 3 from 7 to 9", "move 17 from 3 to 2", "move 1 from 6 to 2", "move 2 from 6 to 9", "move 1 from 6 to 4", "move 12 from 9 to 2", "move 1 from 4 to 7", "move 8 from 3 to 8", "move 8 from 8 to 9", "move 7 from 9 to 2", "move 1 from 9 to 7", "move 18 from 2 to 9", "move 1 from 7 to 2", "move 2 from 7 to 1", "move 1 from 1 to 2", "move 4 from 2 to 7", "move 15 from 9 to 3", "move 1 from 9 to 1", "move 2 from 1 to 8", "move 6 from 2 to 4", "move 8 from 2 to 1", "move 2 from 8 to 5", "move 2 from 9 to 3", "move 4 from 4 to 1", "move 2 from 5 to 8", "move 2 from 8 to 9", "move 14 from 3 to 1", "move 2 from 9 to 7", "move 2 from 4 to 3", "move 1 from 2 to 9", "move 5 from 7 to 9", "move 21 from 1 to 9", "move 2 from 1 to 6", "move 3 from 2 to 4", "move 1 from 7 to 3", "move 19 from 9 to 5", "move 1 from 2 to 7", "move 1 from 7 to 2", "move 3 from 4 to 2", "move 19 from 5 to 7", "move 2 from 2 to 5", "move 1 from 5 to 3", "move 1 from 3 to 4", "move 8 from 9 to 4", "move 1 from 6 to 3", "move 1 from 2 to 6", "move 1 from 2 to 1", "move 8 from 7 to 3", "move 5 from 4 to 7", "move 2 from 6 to 4", "move 1 from 5 to 9", "move 1 from 1 to 6", "move 1 from 1 to 2", "move 2 from 4 to 7", "move 1 from 4 to 2", "move 2 from 4 to 9", "move 1 from 6 to 8", "move 1 from 1 to 5", "move 1 from 8 to 6", "move 1 from 1 to 4", "move 25 from 3 to 1", "move 1 from 4 to 2", "move 2 from 3 to 6", "move 3 from 1 to 9", "move 6 from 9 to 8", "move 1 from 6 to 3", "move 1 from 2 to 9", "move 15 from 7 to 6", "move 2 from 2 to 6", "move 1 from 3 to 8", "move 1 from 1 to 4", "move 6 from 8 to 4", "move 1 from 3 to 8", "move 1 from 8 to 5", "move 2 from 5 to 2", "move 8 from 6 to 7", "move 1 from 8 to 7", "move 1 from 9 to 4", "move 9 from 4 to 5", "move 19 from 1 to 3", "move 9 from 3 to 5", "move 6 from 7 to 2", "move 2 from 1 to 7", "move 7 from 2 to 4", "move 7 from 5 to 6", "move 5 from 4 to 3", "move 3 from 5 to 8", "move 1 from 2 to 4", "move 2 from 4 to 8", "move 14 from 6 to 1", "move 6 from 5 to 6", "move 1 from 5 to 2", "move 7 from 1 to 6", "move 1 from 2 to 4", "move 4 from 6 to 4", "move 1 from 5 to 4", "move 2 from 1 to 9", "move 2 from 9 to 4", "move 2 from 1 to 8", "move 9 from 3 to 6", "move 3 from 7 to 4", "move 4 from 8 to 6", "move 3 from 7 to 6", "move 1 from 7 to 2", "move 1 from 7 to 5", "move 3 from 8 to 4", "move 26 from 6 to 1", "move 8 from 1 to 2", "move 1 from 6 to 4", "move 5 from 2 to 7", "move 2 from 2 to 4", "move 10 from 4 to 7", "move 1 from 6 to 1", "move 22 from 1 to 2", "move 1 from 6 to 1", "move 6 from 4 to 7", "move 1 from 5 to 1", "move 1 from 1 to 2", "move 21 from 7 to 2", "move 38 from 2 to 3", "move 8 from 2 to 6", "move 2 from 4 to 8", "move 2 from 8 to 2", "move 1 from 1 to 3", "move 1 from 2 to 8", "move 1 from 2 to 5", "move 6 from 6 to 4", "move 2 from 4 to 2", "move 2 from 2 to 6", "move 1 from 8 to 2", "move 28 from 3 to 1", "move 11 from 1 to 2", "move 8 from 1 to 7", "move 4 from 6 to 4", "move 8 from 3 to 1", "move 8 from 2 to 5", "move 6 from 5 to 4", "move 2 from 5 to 4", "move 8 from 3 to 4", "move 22 from 4 to 1", "move 2 from 3 to 5", "move 33 from 1 to 5", "move 26 from 5 to 6", "move 4 from 5 to 7", "move 2 from 2 to 7", "move 2 from 7 to 2", "move 2 from 7 to 8", "move 2 from 8 to 3", "move 6 from 1 to 3", "move 5 from 5 to 1", "move 1 from 5 to 7", "move 7 from 7 to 5", "move 4 from 5 to 6", "move 5 from 1 to 8", "move 4 from 2 to 4", "move 2 from 7 to 4", "move 2 from 7 to 3", "move 5 from 4 to 6", "move 1 from 8 to 2", "move 1 from 2 to 4", "move 10 from 3 to 6", "move 44 from 6 to 9", "move 2 from 5 to 7", "move 1 from 5 to 8", "move 41 from 9 to 1", "move 1 from 6 to 4", "move 2 from 8 to 1", "move 1 from 7 to 3", "move 1 from 3 to 8", "move 2 from 9 to 8", "move 29 from 1 to 9", "move 2 from 1 to 5", "move 2 from 8 to 3", "move 1 from 3 to 5", "move 2 from 5 to 9", "move 1 from 5 to 7", "move 25 from 9 to 2", "move 10 from 2 to 1", "move 1 from 7 to 8", "move 2 from 4 to 1", "move 2 from 8 to 9", "move 1 from 8 to 6", "move 4 from 2 to 4", "move 4 from 2 to 5", "move 1 from 6 to 5", "move 1 from 2 to 7", "move 2 from 4 to 1", "move 18 from 1 to 3", "move 8 from 9 to 4", "move 15 from 3 to 9", "move 3 from 4 to 8", "move 4 from 5 to 8", "move 4 from 2 to 4", "move 10 from 9 to 4", "move 4 from 8 to 5", "move 2 from 7 to 2", "move 11 from 4 to 9", "move 12 from 4 to 9", "move 2 from 5 to 7", "move 4 from 2 to 4", "move 5 from 8 to 1", "move 1 from 5 to 6", "move 1 from 4 to 6", "move 1 from 3 to 9", "move 1 from 5 to 7", "move 4 from 1 to 6", "move 6 from 1 to 5", "move 6 from 5 to 9", "move 3 from 7 to 6", "move 9 from 6 to 5", "move 8 from 5 to 2", "move 7 from 2 to 3", "move 1 from 3 to 1", "move 7 from 3 to 5", "move 2 from 4 to 1", "move 1 from 2 to 6", "move 2 from 1 to 3", "move 8 from 5 to 9", "move 3 from 1 to 3", "move 1 from 6 to 1", "move 2 from 4 to 1", "move 1 from 5 to 2", "move 2 from 1 to 6", "move 2 from 6 to 3", "move 2 from 3 to 2", "move 2 from 2 to 4", "move 1 from 2 to 6", "move 3 from 3 to 9", "move 2 from 4 to 8", "move 3 from 3 to 1", "move 4 from 1 to 7", "move 2 from 8 to 4", "move 7 from 9 to 6", "move 1 from 1 to 4", "move 11 from 9 to 7", "move 3 from 9 to 3", "move 14 from 9 to 5", "move 6 from 6 to 5", "move 4 from 5 to 9", "move 10 from 7 to 6", "move 1 from 3 to 7", "move 2 from 4 to 1", "move 4 from 7 to 9", "move 9 from 6 to 1", "move 3 from 6 to 5", "move 15 from 9 to 1", "move 1 from 4 to 7", "move 4 from 9 to 7", "move 12 from 5 to 1", "move 3 from 7 to 3", "move 4 from 7 to 2", "move 1 from 9 to 3", "move 22 from 1 to 2", "move 21 from 2 to 6", "move 3 from 1 to 9", "move 1 from 3 to 7", "move 1 from 7 to 3", "move 1 from 3 to 2", "move 8 from 1 to 4", "move 1 from 9 to 2", "move 7 from 4 to 8", "move 3 from 3 to 9", "move 3 from 3 to 5", "move 4 from 2 to 3", "move 1 from 1 to 3", "move 4 from 8 to 5", "move 2 from 8 to 3", "move 5 from 3 to 2", "move 6 from 5 to 3", "move 2 from 5 to 8", "move 2 from 1 to 7", "move 2 from 7 to 4", "move 15 from 6 to 9", "move 8 from 3 to 1", "move 3 from 5 to 9", "move 2 from 4 to 9", "move 8 from 1 to 3", "move 8 from 9 to 8", "move 1 from 1 to 4", "move 3 from 5 to 9", "move 4 from 8 to 1", "move 1 from 3 to 9", "move 2 from 4 to 3", "move 2 from 8 to 6", "move 3 from 8 to 7", "move 8 from 2 to 5", "move 3 from 5 to 2", "move 4 from 3 to 4", "move 3 from 6 to 1", "move 2 from 5 to 9", "move 4 from 4 to 1", "move 2 from 5 to 6", "move 1 from 5 to 4", "move 2 from 2 to 1", "move 4 from 3 to 9", "move 1 from 7 to 3", "move 2 from 7 to 4", "move 2 from 4 to 7", "move 1 from 6 to 7", "move 1 from 2 to 8", "move 2 from 3 to 9", "move 14 from 1 to 8", "move 1 from 6 to 2", "move 2 from 7 to 1", "move 3 from 8 to 3", "move 6 from 8 to 5"]
const moves: Move[] = movesStrings.map((line) => {
    const regexResult = /^move (\d*) from (\d*) to (\d*)$/.exec(line);
    const [, quantity, from, to] = regexResult as unknown as [unknown, string, string, string]; // Assertion guaranteed by regex
    return {
        quantity: parseInt(quantity),
        from: parseInt(from) - 1,
        to: parseInt(to) - 1,
    }
});
function unwrapCrate(crate: Crate): string {
    return crate.replace(/[\[\]]/g, "");
}

function showTopCrates(crates: Crate[][]): string {
    return crates.map((column) => (column.shift() || "[]")).map(unwrapCrate).join("");
}

const shipyard1 = new Shipyard(initialCrates);
const shipyard2 = new Shipyard(initialCrates);

moves.forEach((move) => {
    shipyard1.moveCrates(move, (crates) => crates.reverse());
    shipyard2.moveCrates(move);
});

const problem1Solution = showTopCrates(shipyard1.getCrates());
const problem2Solution = showTopCrates(shipyard2.getCrates());

console.log(problem1Solution);
console.log(problem2Solution);
