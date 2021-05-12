// Type Safety
// Typescript introduces type safety to javascript by allowing us to write a "superset" of javascript that includes type annotations, new types, and type checking.
// A language superset means that any valid javascript is valid typescript, but that any valid typescript might not be valid javascript. TypeScript has more features then JS, but it has all of JS's features.

// const addTwoNums = (numOne: number, numTwo: number): number => {
//     return numOne + numTwo;
// };
//
// console.log(addTwoNums(1, 2));
import { State, Student, Campus, Reducer } from './types';

const initialState: State = {
    campuses: [],
    students: [],
};

let state: State = {
    ...initialState,
}

interface Action {
    type: string;
    [key: string]: any;
}

const reducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            return {
                ...state,
                students: state.students.concat([action.student]),
            };
        default:
            return state;
    }
}

const dispatch = (action: Action) => {
    state = reducer(state, action);
}

const getState = (): State => state;

const addSchool = (campus: Campus) => ({
    type: 'ADD_SCHOOL',
    campus,
});

const addStudent = (student: Student) => ({
    type: 'ADD_STUDENT',
    student,
});

dispatch(addStudent({
    name: 'janice',
    grade: 6,
}));

console.log(getState());
