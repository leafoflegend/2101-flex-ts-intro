export interface Campus {
    name: string;
    location: string;
    size: number;
}

export interface Student {
    name: string;
    grade: number;
}

export interface State {
    campuses: Campus[];
    students: Student[];
}

export type Reducer = (state: State, action: Action) => State;

