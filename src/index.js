"use strict";
// Type Safety
// Typescript introduces type safety to javascript by allowing us to write a "superset" of javascript that includes type annotations, new types, and type checking.
// A language superset means that any valid javascript is valid typescript, but that any valid typescript might not be valid javascript. TypeScript has more features then JS, but it has all of JS's features.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var initialState = {
    campuses: [],
    students: []
};
var state = __assign({}, initialState);
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'ADD_STUDENT':
            return __assign(__assign({}, state), { students: state.students.concat([action.student]) });
        default:
            return state;
    }
};
var dispatch = function (action) {
    state = reducer(state, action);
};
var getState = function () { return state; };
var addSchool = function (campus) { return ({
    type: 'ADD_SCHOOL',
    campus: campus
}); };
var addStudent = function (student) { return ({
    type: 'ADD_STUDENT',
    student: student
}); };
dispatch(addStudent({
    name: 'janice',
    grade: 6
}));
console.log(getState());
