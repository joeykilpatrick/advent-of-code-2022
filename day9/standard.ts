import * as _ from 'lodash';

enum Direction {
    UP = "U",
    DOWN = "D",
    LEFT = "L",
    RIGHT = "R",
}

type Coord = [number, number];
type Vector = [number, number];
type CoordString = `${number}, ${number}`;
type Move = `${Direction} ${number}`;
type Step = Direction;

interface State {
    knots: [Coord, ...Coord[]], // Non-empty array
    tailVisits: Record<CoordString, true>,
}

const serializeCoord = ([x, y]: Coord): CoordString => { return `${x}, ${y}` };

function transform(step: Step): (coord: Coord) => Coord {
    switch (step) {
        case Direction.UP:
            return ([x, y]) => [x, y + 1]
        case Direction.DOWN:
            return ([x, y]) => [x, y - 1]
        case Direction.LEFT:
            return ([x, y]) => [x - 1, y]
        case Direction.RIGHT:
            return ([x, y]) => [x + 1, y]
    }
}

const moves: Move[] = ["D 2", "U 1", "D 1", "U 2", "D 2", "U 2", "R 2", "D 1", "L 1", "U 2", "D 1", "R 1", "U 1", "D 1", "U 1", "D 2", "L 1", "D 1", "U 1", "R 1", "D 1", "R 1", "L 2", "D 1", "R 2", "U 2", "L 1", "U 1", "R 1", "D 1", "U 2", "D 1", "U 1", "R 1", "L 1", "U 1", "R 1", "D 2", "U 2", "R 2", "L 1", "R 2", "L 2", "D 1", "L 2", "R 2", "D 2", "R 2", "D 1", "R 2", "D 1", "R 1", "U 2", "L 2", "D 1", "R 2", "U 2", "L 1", "U 1", "R 2", "D 2", "L 1", "U 2", "R 2", "U 1", "R 1", "D 2", "L 1", "R 2", "U 1", "D 2", "U 1", "R 1", "L 2", "D 1", "U 1", "L 1", "R 2", "L 2", "R 1", "D 2", "L 1", "R 2", "L 2", "R 2", "U 2", "L 2", "R 2", "L 2", "R 1", "L 2", "D 1", "L 2", "D 1", "R 2", "D 2", "U 2", "L 2", "R 2", "U 2", "D 1", "R 2", "L 1", "D 2", "U 1", "L 1", "D 2", "L 1", "U 2", "L 2", "U 1", "L 2", "U 2", "D 1", "R 2", "U 3", "R 3", "L 1", "R 2", "D 1", "R 1", "U 2", "L 2", "U 3", "L 1", "U 1", "R 3", "D 1", "U 1", "R 3", "U 2", "L 2", "D 1", "L 2", "D 2", "U 2", "D 2", "L 3", "U 3", "R 3", "D 1", "L 2", "D 3", "R 2", "L 1", "U 3", "D 2", "U 3", "L 1", "R 3", "U 1", "L 2", "R 1", "D 1", "U 2", "D 2", "R 2", "L 1", "U 3", "L 2", "U 1", "L 3", "U 1", "D 3", "R 3", "L 2", "D 3", "R 1", "L 1", "U 2", "D 3", "L 1", "U 3", "R 1", "D 1", "R 2", "U 1", "L 2", "U 1", "L 2", "D 1", "R 2", "L 3", "R 1", "L 3", "R 1", "D 1", "R 3", "U 1", "L 3", "R 2", "L 1", "U 3", "R 1", "U 3", "D 1", "R 1", "D 1", "R 1", "L 1", "U 3", "R 1", "L 1", "U 2", "D 2", "R 3", "L 1", "U 3", "D 1", "L 2", "U 3", "R 2", "L 1", "R 1", "L 3", "D 1", "U 3", "L 2", "U 2", "R 1", "U 3", "L 2", "U 3", "R 4", "D 1", "L 1", "U 1", "D 3", "R 1", "D 2", "R 2", "U 2", "R 2", "L 3", "D 3", "U 2", "L 2", "D 2", "R 1", "D 1", "U 4", "R 2", "L 2", "R 4", "D 2", "U 4", "L 4", "R 4", "L 1", "D 4", "R 3", "U 2", "D 3", "R 2", "L 2", "R 3", "U 2", "D 4", "L 2", "D 3", "R 4", "D 2", "L 4", "D 2", "L 1", "R 1", "L 3", "U 3", "D 2", "L 2", "R 4", "D 1", "U 3", "D 1", "U 3", "R 4", "L 1", "U 3", "L 1", "R 1", "D 1", "R 2", "D 1", "R 3", "D 1", "U 4", "L 2", "U 1", "D 3", "L 3", "D 2", "L 2", "D 3", "R 1", "D 3", "U 2", "D 3", "U 4", "D 2", "L 1", "R 4", "D 1", "L 1", "D 2", "L 1", "U 3", "L 1", "D 4", "L 3", "D 3", "U 4", "L 2", "R 3", "D 3", "R 2", "D 2", "R 2", "D 1", "L 1", "U 4", "D 1", "U 1", "L 1", "U 3", "R 1", "D 3", "L 3", "R 1", "L 3", "D 4", "R 3", "U 2", "L 2", "R 1", "D 5", "R 3", "L 1", "D 1", "R 1", "L 5", "D 4", "L 1", "R 1", "L 4", "D 3", "L 3", "R 2", "U 5", "L 3", "D 2", "U 4", "D 1", "U 4", "L 3", "U 5", "R 2", "U 3", "L 4", "R 1", "U 3", "L 3", "D 3", "R 4", "U 5", "L 2", "R 4", "L 5", "R 2", "D 1", "L 5", "D 5", "R 5", "D 3", "R 5", "D 3", "L 1", "U 3", "L 2", "D 3", "L 4", "D 5", "L 5", "D 5", "R 4", "L 1", "U 5", "L 3", "U 4", "L 4", "D 1", "L 4", "D 3", "R 4", "U 3", "R 3", "L 4", "U 2", "D 3", "U 4", "D 3", "R 1", "U 2", "D 3", "R 5", "L 2", "R 5", "U 3", "L 4", "R 1", "L 3", "U 1", "D 1", "L 3", "R 5", "U 5", "R 1", "U 4", "L 4", "U 3", "R 5", "L 3", "D 4", "L 1", "U 3", "L 3", "U 2", "D 2", "R 5", "L 5", "U 2", "L 2", "R 3", "U 4", "R 5", "L 5", "D 1", "R 3", "U 4", "L 5", "U 1", "R 4", "U 1", "D 5", "R 3", "D 1", "L 4", "U 5", "D 5", "R 1", "L 6", "D 6", "R 2", "U 4", "L 3", "R 5", "L 5", "R 4", "U 5", "D 3", "L 5", "U 2", "L 3", "D 3", "U 3", "D 6", "U 2", "R 5", "D 1", "U 2", "D 2", "U 2", "R 6", "D 4", "U 4", "R 4", "U 6", "R 3", "U 4", "D 4", "L 3", "U 3", "L 5", "U 3", "R 1", "U 5", "L 6", "U 1", "D 3", "U 5", "D 4", "L 5", "R 5", "U 3", "L 6", "R 2", "L 3", "D 4", "L 2", "U 3", "D 5", "U 4", "D 3", "R 2", "U 6", "D 5", "R 2", "U 6", "L 6", "R 2", "U 3", "L 6", "R 5", "D 4", "U 3", "R 5", "L 6", "R 4", "D 6", "L 3", "R 6", "U 6", "R 4", "U 4", "R 6", "U 2", "D 3", "R 1", "U 3", "D 3", "R 5", "D 3", "R 5", "U 4", "R 4", "L 4", "U 2", "R 1", "U 1", "L 2", "D 1", "R 6", "U 2", "D 2", "L 6", "R 1", "U 3", "L 3", "U 5", "D 4", "L 2", "D 1", "U 1", "D 5", "U 5", "L 5", "D 2", "L 5", "U 5", "D 2", "R 7", "U 7", "D 4", "R 4", "D 6", "U 2", "R 5", "L 2", "U 2", "R 2", "D 6", "U 7", "R 7", "D 7", "U 7", "D 2", "R 4", "D 7", "U 6", "D 1", "R 5", "D 7", "R 3", "L 2", "D 2", "U 2", "L 7", "U 2", "D 3", "U 2", "D 5", "L 4", "U 7", "R 7", "U 2", "L 6", "U 7", "R 5", "U 3", "D 1", "L 2", "U 1", "D 5", "U 7", "D 4", "L 6", "R 5", "L 2", "U 2", "R 6", "L 1", "U 7", "R 7", "U 3", "D 3", "L 2", "R 2", "U 6", "R 4", "D 4", "R 2", "L 6", "R 2", "D 3", "R 7", "D 2", "R 7", "L 4", "R 2", "U 4", "L 6", "U 5", "L 4", "U 7", "L 4", "R 2", "U 3", "L 1", "U 4", "R 5", "L 1", "D 2", "L 2", "U 7", "L 3", "R 3", "U 7", "R 2", "U 1", "L 2", "U 3", "R 7", "D 3", "U 2", "L 3", "U 7", "L 2", "U 5", "R 1", "U 4", "R 4", "D 6", "L 4", "R 7", "U 4", "L 7", "D 4", "L 7", "R 6", "D 4", "L 3", "R 3", "D 7", "L 5", "U 3", "D 4", "U 1", "L 8", "D 7", "L 1", "D 8", "L 3", "R 7", "D 8", "L 5", "D 1", "L 8", "R 7", "D 6", "R 8", "U 6", "R 3", "D 2", "U 7", "R 5", "D 3", "R 2", "L 7", "U 2", "D 6", "R 5", "U 4", "D 3", "R 2", "D 4", "U 5", "R 7", "U 4", "R 5", "L 4", "U 3", "L 1", "D 5", "L 7", "U 5", "D 7", "U 1", "D 4", "U 4", "D 2", "U 6", "L 5", "D 1", "R 4", "L 7", "R 3", "U 8", "L 3", "R 7", "U 1", "R 7", "L 7", "R 3", "D 4", "U 8", "R 1", "D 8", "L 7", "R 6", "U 5", "L 8", "R 6", "D 1", "L 4", "U 5", "L 4", "R 2", "U 7", "D 7", "R 2", "U 2", "D 3", "R 7", "D 8", "L 5", "U 2", "R 8", "D 1", "U 4", "D 6", "L 2", "U 6", "L 2", "R 5", "U 6", "L 8", "D 1", "R 1", "L 1", "D 3", "R 2", "L 2", "D 6", "R 6", "L 6", "U 5", "D 4", "L 4", "U 4", "R 7", "L 4", "U 4", "R 8", "U 5", "D 6", "U 6", "R 2", "U 3", "R 3", "U 6", "L 7", "R 5", "D 8", "U 1", "R 2", "D 4", "U 5", "D 3", "L 1", "U 3", "R 7", "D 8", "L 2", "D 2", "R 6", "U 7", "L 2", "R 4", "D 8", "R 2", "L 3", "U 1", "R 4", "D 3", "R 3", "L 2", "U 6", "D 1", "U 9", "D 8", "L 9", "R 7", "U 3", "L 9", "D 6", "U 2", "D 9", "R 7", "D 2", "L 9", "D 9", "L 2", "D 8", "R 7", "L 8", "U 8", "R 8", "D 7", "L 4", "R 8", "U 8", "R 9", "L 7", "D 7", "L 7", "D 9", "L 9", "D 4", "L 4", "U 4", "D 1", "L 5", "U 3", "R 2", "U 3", "D 3", "R 8", "U 2", "R 2", "D 2", "R 3", "U 1", "D 7", "R 4", "L 4", "U 7", "D 7", "R 1", "D 3", "R 2", "U 3", "D 3", "L 6", "D 1", "R 3", "D 5", "R 1", "U 1", "L 6", "D 1", "L 3", "R 6", "D 8", "U 4", "L 6", "U 3", "D 7", "U 7", "L 8", "U 8", "L 9", "U 6", "R 4", "U 6", "L 5", "R 8", "L 5", "U 9", "D 5", "U 2", "L 3", "U 3", "D 10", "R 9", "L 2", "U 5", "R 7", "U 4", "R 2", "L 3", "U 1", "L 2", "R 1", "D 8", "R 3", "U 1", "L 4", "D 6", "R 9", "D 6", "L 9", "U 9", "L 3", "R 5", "L 8", "U 8", "L 2", "R 7", "L 1", "U 7", "R 6", "U 5", "R 6", "L 5", "D 5", "U 4", "L 2", "D 7", "L 6", "U 4", "R 3", "L 1", "R 7", "U 3", "D 4", "U 5", "L 5", "D 10", "R 6", "U 9", "R 10", "D 7", "R 6", "D 10", "U 8", "D 3", "R 8", "L 6", "D 10", "U 1", "L 10", "U 7", "D 1", "U 2", "L 10", "U 7", "R 3", "D 10", "L 4", "R 6", "D 7", "R 5", "U 10", "L 6", "D 9", "R 8", "D 8", "R 1", "L 10", "D 9", "U 6", "R 6", "U 10", "R 3", "U 4", "R 7", "L 5", "U 4", "L 4", "U 6", "R 4", "U 7", "L 1", "R 2", "U 7", "L 1", "R 3", "D 3", "L 9", "U 10", "R 9", "L 3", "U 2", "R 7", "U 11", "R 4", "U 11", "D 4", "R 4", "L 1", "R 5", "U 6", "L 8", "U 4", "D 11", "U 6", "L 3", "R 8", "U 5", "D 2", "U 6", "D 3", "L 6", "U 7", "D 5", "U 7", "R 4", "L 8", "D 1", "L 5", "U 9", "D 2", "L 8", "U 1", "L 6", "R 8", "D 10", "R 7", "U 1", "R 11", "L 7", "R 3", "U 1", "L 1", "U 8", "D 3", "U 1", "D 8", "U 5", "D 10", "U 10", "R 3", "L 1", "D 10", "U 4", "D 11", "L 6", "R 8", "U 8", "L 9", "D 1", "R 8", "U 8", "D 1", "R 10", "L 10", "U 9", "R 6", "D 3", "U 11", "L 11", "R 2", "L 8", "R 6", "U 7", "R 5", "U 3", "D 3", "R 5", "U 2", "L 1", "U 3", "D 8", "U 6", "R 6", "D 3", "U 5", "R 8", "U 8", "D 7", "L 11", "R 2", "L 9", "R 8", "D 5", "L 4", "R 6", "D 1", "U 9", "D 7", "L 1", "D 5", "L 7", "U 11", "D 8", "U 9", "L 11", "D 3", "R 11", "L 6", "U 6", "D 3", "R 3", "L 8", "R 10", "L 9", "R 8", "U 3", "D 10", "U 10", "R 11", "U 10", "D 2", "U 8", "L 2", "D 2", "R 1", "U 2", "D 5", "L 1", "R 8", "U 3", "R 4", "D 6", "R 1", "U 4", "R 2", "L 1", "U 11", "D 8", "L 7", "R 9", "L 11", "R 1", "U 4", "R 11", "D 4", "L 1", "U 4", "D 5", "R 8", "U 8", "R 9", "U 10", "L 8", "R 9", "D 12", "L 6", "U 1", "R 6", "D 1", "U 6", "D 1", "R 11", "U 5", "R 1", "L 5", "U 6", "R 5", "L 5", "R 4", "D 4", "L 11", "R 12", "L 12", "U 12", "L 7", "D 10", "U 12", "D 4", "R 6", "U 9", "R 5", "U 4", "R 5", "L 11", "U 11", "R 3", "D 10", "R 4", "D 7", "R 4", "D 8", "R 6", "D 7", "L 3", "U 4", "L 3", "D 4", "U 6", "R 8", "U 9", "D 3", "R 8", "L 9", "R 2", "L 1", "D 6", "R 8", "L 5", "R 10", "U 5", "D 11", "U 1", "L 2", "U 7", "L 1", "D 3", "U 11", "D 10", "R 12", "D 9", "U 6", "L 13", "U 4", "L 13", "D 3", "R 9", "L 7", "U 8", "R 1", "L 13", "U 5", "R 4", "U 9", "R 6", "U 8", "L 2", "D 7", "R 8", "L 5", "R 9", "D 3", "R 3", "L 5", "U 12", "D 11", "L 7", "D 8", "L 4", "U 11", "R 10", "D 13", "U 2", "D 5", "U 5", "L 12", "D 7", "U 7", "R 7", "U 11", "R 4", "L 1", "U 7", "R 11", "D 11", "R 3", "U 8", "L 12", "D 2", "R 11", "L 1", "D 10", "U 9", "R 1", "U 1", "D 13", "L 3", "U 7", "L 7", "U 13", "D 3", "U 2", "L 10", "R 9", "L 4", "R 8", "L 10", "R 6", "L 9", "R 4", "D 12", "U 5", "D 8", "U 10", "D 7", "R 5", "D 4", "L 7", "D 5", "R 9", "U 1", "L 6", "D 1", "U 2", "D 2", "R 12", "U 10", "R 11", "L 5", "U 3", "D 2", "U 11", "D 9", "L 2", "R 4", "D 13", "L 2", "U 2", "R 6", "D 4", "U 10", "L 12", "U 11", "R 1", "D 10", "U 6", "R 7", "D 2", "U 5", "D 13", "U 7", "L 4", "D 3", "L 4", "U 4", "D 5", "L 13", "D 14", "U 13", "L 2", "R 3", "U 8", "R 9", "L 10", "R 3", "L 5", "U 8", "D 9", "R 8", "L 2", "U 2", "L 1", "D 1", "R 4", "U 11", "D 13", "R 2", "D 11", "R 4", "U 1", "R 14", "L 10", "U 13", "D 1", "R 10", "D 12", "R 7", "U 11", "R 8", "L 5", "R 4", "D 2", "U 10", "R 9", "L 3", "D 12", "R 10", "U 3", "L 3", "U 3", "D 5", "R 1", "D 1", "U 1", "D 8", "U 9", "R 2", "D 12", "U 13", "D 3", "U 11", "D 13", "L 1", "D 14", "R 9", "D 9", "L 12", "U 1", "D 7", "U 10", "R 4", "L 6", "U 5", "D 12", "U 1", "L 14", "R 6", "L 14", "D 12", "U 4", "R 9", "L 1", "R 11", "U 8", "L 1", "R 6", "U 2", "R 8", "D 9", "U 12", "R 2", "U 12", "R 12", "U 5", "D 13", "L 12", "R 11", "L 11", "R 13", "L 3", "R 10", "L 3", "R 10", "L 6", "D 2", "L 11", "R 4", "L 9", "U 8", "L 9", "D 14", "R 8", "D 5", "R 1", "D 5", "L 2", "D 2", "U 14", "R 6", "U 12", "R 10", "L 2", "U 8", "D 5", "U 1", "D 7", "L 1", "D 9", "R 6", "L 4", "R 6", "U 15", "L 4", "R 8", "U 2", "R 6", "D 10", "L 7", "D 11", "U 6", "D 2", "R 14", "L 11", "U 6", "D 2", "L 12", "U 14", "R 8", "D 11", "U 4", "D 8", "L 6", "D 5", "U 12", "D 1", "U 4", "L 1", "R 1", "U 14", "D 15", "L 11", "R 14", "L 13", "R 9", "D 11", "R 5", "L 13", "U 15", "L 5", "R 8", "D 15", "R 13", "U 3", "L 15", "D 9", "U 5", "D 13", "L 8", "R 11", "D 6", "L 12", "R 8", "L 10", "R 9", "D 12", "L 11", "U 12", "L 1", "U 1", "L 7", "R 6", "L 7", "D 13", "L 6", "R 3", "L 4", "U 2", "D 6", "L 2", "D 2", "R 3", "D 6", "U 7", "D 8", "R 4", "U 7", "D 4", "U 12", "D 10", "L 7", "U 12", "D 12", "U 7", "D 4", "L 9", "D 9", "R 11", "L 5", "U 13", "R 5", "U 6", "D 10", "L 9", "U 13", "D 1", "R 10", "L 12", "R 12", "L 16", "D 10", "U 3", "R 1", "L 7", "D 3", "R 16", "U 9", "L 6", "R 12", "U 10", "L 14", "R 12", "U 15", "L 14", "D 10", "U 15", "L 7", "U 8", "D 9", "R 8", "L 13", "U 6", "R 2", "U 3", "R 9", "D 9", "L 2", "D 10", "U 10", "D 15", "U 4", "R 10", "D 3", "L 10", "R 3", "D 11", "R 11", "U 1", "D 4", "R 15", "U 1", "R 4", "D 3", "L 6", "U 10", "L 9", "R 12", "U 8", "R 13", "L 15", "R 11", "D 12", "U 11", "D 3", "U 8", "R 3", "U 6", "L 7", "U 1", "R 8", "U 16", "L 8", "R 8", "U 1", "R 15", "U 5", "R 15", "U 8", "D 13", "R 5", "U 11", "R 11", "L 4", "R 2", "D 9", "R 3", "L 3", "R 10", "D 9", "L 7", "U 11", "D 9", "U 2", "R 15", "U 13", "D 3", "L 11", "D 9", "R 2", "U 8", "R 1", "L 5", "U 13", "D 12", "L 14", "D 14", "U 16", "D 6", "L 13", "U 12", "L 9", "U 15", "R 11", "U 5", "R 6", "D 6", "L 15", "D 1", "R 13", "D 2", "R 7", "U 6", "R 6", "L 4", "R 7", "U 15", "L 4", "R 5", "L 4", "U 16", "R 13", "L 8", "D 1", "R 14", "D 12", "R 3", "D 1", "R 5", "U 6", "R 4", "D 17", "U 8", "L 12", "R 12", "U 6", "R 14", "L 10", "U 15", "L 3", "U 2", "D 5", "R 4", "U 4", "D 10", "U 7", "L 7", "U 4", "R 1", "D 7", "U 1", "D 2", "L 15", "D 6", "L 13", "D 10", "U 1", "R 2", "L 15", "R 8", "D 4", "U 14", "L 13", "D 7", "R 16", "D 8", "U 9", "D 6", "R 14", "D 16", "U 13", "L 14", "D 5", "U 2", "D 14", "U 12", "L 13", "R 3", "L 13", "R 12", "D 8", "R 4", "L 5", "D 14", "L 8", "U 10", "R 15", "U 5", "D 2", "L 2", "U 1", "D 16", "L 14", "U 10", "R 13", "D 6", "L 13", "U 4", "R 12", "L 14", "U 14", "D 7", "R 12", "L 2", "R 11", "D 11", "R 6", "D 1", "R 14", "L 15", "R 12", "U 7", "D 4", "L 4", "D 7", "R 12", "L 5", "R 1", "L 11", "U 7", "L 1", "D 12", "L 11", "U 9", "L 6", "D 4", "R 15", "L 18", "R 14", "U 13", "R 14", "U 10", "R 11", "D 5", "U 4", "L 2", "D 8", "L 7", "U 14", "L 14", "R 4", "D 15", "U 2", "L 12", "R 10", "D 15", "L 7", "R 1", "U 17", "R 16", "U 4", "L 12", "D 2", "R 10", "U 17", "D 13", "L 5", "D 16", "R 14", "L 9", "D 3", "U 5", "D 8", "U 17", "L 6", "D 6", "L 4", "D 12", "R 10", "U 10", "D 10", "L 1", "R 7", "U 9", "D 7", "R 14", "L 4", "U 6", "L 17", "U 15", "D 13", "L 17", "R 2", "L 6", "D 10", "U 14", "R 9", "L 11", "U 12", "D 7", "R 15", "D 9", "U 13", "D 13", "U 9", "D 17", "U 8", "D 11", "L 12", "R 17", "U 17", "D 6", "L 17", "D 5", "L 5", "D 11", "R 9", "U 9", "D 15", "L 6", "R 4", "L 6", "U 10", "L 2", "U 15", "L 15", "R 6", "L 15", "U 13", "R 9", "D 12", "R 4", "U 11", "R 3", "L 10", "R 18", "L 5", "R 14", "L 3", "D 1", "U 12", "R 10", "L 16", "R 11", "U 6", "D 7", "U 6", "R 5", "D 19", "L 12", "R 16", "D 4", "L 15", "D 14", "L 17", "U 18", "D 13", "R 3", "D 9", "L 14", "U 16", "L 6", "U 14", "L 10", "D 2", "U 8", "L 1", "U 7", "D 12", "U 16", "L 15", "U 16", "R 15", "D 5", "R 7", "U 5", "R 13", "L 16", "D 7", "L 14", "R 9", "U 10", "L 16", "D 4", "U 17", "L 8", "D 3", "U 9", "D 2", "R 8", "D 3", "L 17", "D 1", "U 19", "R 16", "D 8", "U 18", "D 14", "U 1", "D 4", "U 12", "D 17", "R 19", "U 8", "D 7", "U 19", "R 15", "U 10", "R 6", "D 9", "L 6", "R 13", "D 16", "L 17", "R 18", "U 10", "R 19", "U 12", "D 19", "R 2", "L 8", "D 1", "L 17", "D 11", "R 7", "U 17", "L 4", "R 16", "U 17", "D 5", "L 8", "U 17", "L 16", "U 8", "L 19", "R 15", "U 5", "D 2", "R 18", "L 14", "D 9", "L 1", "D 5", "U 5", "D 8", "U 3", "R 9", "L 5", "R 6", "U 10", "R 3", "L 9"];

function getSteps(move: Move): Step[] {
    // All assertions guaranteed by regex
    const result = /^([UDLR]) (\d*)$/.exec(move)!;
    const dir: Direction = result[1] as Direction;
    const quantity: number = parseInt(result[2]!);
    return new Array(quantity).fill(dir);
}

const steps: Step[] = _.flatten(moves.map(getSteps))

function followHead(head: Coord, tail: Coord): Coord {

    const [x1, y1] = head;
    const [x2, y2] = tail;

    const diff: Vector = [x1 - x2, y1 - y2];
    const diffLength = Math.sqrt( Math.pow(diff[0], 2) +  Math.pow(diff[1], 2))

    // sqrt(2) < 1.7 < sqrt(4) = 2
    // I choose any value I want between sqrt(2) and 2
    if (diffLength < 1.7) {
        // If head is within one square, don't move
        return tail;
    }

    let newTail: Coord = tail;

    if (diff[0] > 0) {
        newTail = transform(Direction.RIGHT)(newTail);
    } else if (diff[0] < 0) {
        newTail = transform(Direction.LEFT)(newTail);
    }

    if (diff[1] > 0) {
        newTail = transform(Direction.UP)(newTail);
    } else if (diff[1] < 0) {
        newTail = transform(Direction.DOWN)(newTail);
    }

    return newTail;
}

function runSteps(initialState: State): number {

    const finalState = steps.reduce<State>((state: State, step) => {

        state.knots[0] = transform(step)(state.knots[0]);

        for (let i = 1; i < state.knots.length; i++) {
            state.knots[i] = followHead(state.knots[i - 1]!, state.knots[i]!); // Assertions guaranteed by index constraint
        }

        state.tailVisits[serializeCoord(state.knots.slice(-1)[0]!)] = true;
        return state;

    }, initialState);

    return Object.keys(finalState.tailVisits).length;

}

const problem1Solution: number = runSteps({
    knots: [[0,0], [0,0]],
    tailVisits: { "0, 0": true },
});

const problem2Solution: number = runSteps({
    knots: [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]],
    tailVisits: { "0, 0": true },
});

console.log(problem1Solution);
console.log(problem2Solution);
