type BoolValue = "true" | "false";

interface Some<T> {
    case: "some";
    val: T;
}

interface None {
    case: "none";
}

type Option<T> =
    | Some<T>
    | None;

interface AnyNumber { prev?: any, isZero: BoolValue };
interface PositiveNumber { prev: any, isZero: "false" };

type IsZero<TNumber extends AnyNumber> = TNumber["isZero"];
type Next<TNumber extends AnyNumber> = { prev: TNumber, isZero: "false" };
type Prev<TNumber extends PositiveNumber> = TNumber["prev"];

type _0 = { isZero: "true" };
type _1 = Next<_0>;
type _2 = Next<_1>;
type _3 = Next<_2>;
type _4 = Next<_3>;
type _5 = Next<_4>;
type _6 = Next<_5>;
type _7 = Next<_6>;
type _8 = Next<_7>;
type _9 = Next<_8>;

type Digits = { 0: _0, 1: _1, 2: _2, 3: _3, 4: _4, 5: _5, 6: _6, 7: _7, 8: _8, 9: _9 };
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type NumberToType<TNumber extends Digit> = Digits[TNumber]; // I don't know why typescript complains here.

type Unused<TUsed> = Exclude<CellValue, TUsed>;

type Cell = Option<CellValue>;

// It shouldn't matter how we pass the board in. No matter how you look at it,
// it's a 2-matrix of Cells, whether you pass in an array of rows, columns, or boxes.
type TupleThing<T> = [T, T, T, T, T, T, T, T, T];
type Axis = TupleThing<Cell>;
type Board = TupleThing<Axis>;



type IsValid<TBoard extends Board> =
    TBoard


const example: Board = JSON.parse(JSON.stringify([
    2, 0, 0, 3, 0, 0, 0, 0, 0,
    8, 0, 4, 0, 6, 2, 0, 0, 3,
    0, 1, 3, 8, 0, 0, 2, 0, 0,
    0, 0, 0, 0, 2, 0, 3, 9, 0,
    5, 0, 7, 0, 0, 0, 6, 2, 1,
    0, 3, 2, 0, 0, 6, 0, 0, 0,
    0, 2, 0, 0, 0, 9, 1, 4, 0,
    6, 0, 1, 2, 5, 0, 8, 0, 9,
    0, 0, 0, 0, 0, 1, 0, 0, 2,
].map(c => c === 0 ? { case: "none" } : { case: "some", val: c })));

type Result = typeof example;


