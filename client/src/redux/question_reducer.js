import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers: {
        startExamAction: (state, action) => {
            let { question, answers } = action.payload
            return {
                ...state,
                queue: question,
                answers: answers
            }

        },
        moveNextAction: (state) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        movePrevAction: (state) => {
            return {
                ...state, trace: state.trace - 1
            }
        },
        resetAllActions: () => {
            return {
                queue: [],
                answers: [],
                trace: 0
            }
        }
    }
})


export const { startExamAction, moveNextAction, movePrevAction, resetAllActions } = questionReducer.actions;

export default questionReducer.reducer;