export type Board = {
    row: number;
    column: number;
    opened: boolean;
    flagged: boolean;
    mined: boolean;
    exploded: boolean;
    nearMines: number;
}